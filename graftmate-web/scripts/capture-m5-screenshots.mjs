/**
 * Headless screenshots for M5 acceptance.
 * Run: npm run build && node scripts/capture-m5-screenshots.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer-core";

const PORT = 3101;
const BASE = `http://127.0.0.1:${PORT}`;
const OUT_DIR = "/opt/cursor/artifacts";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function startServer() {
  return spawn("npm", ["run", "start", "--", "-p", String(PORT)], {
    cwd: new URL("..", import.meta.url).pathname,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, PORT: String(PORT) },
  });
}

async function waitForServer(maxMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {
      // not ready
    }
    await sleep(500);
  }
  throw new Error("Server did not become ready");
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const server = startServer();
  let browser;

  try {
    await waitForServer();

    browser = await puppeteer.launch({
      headless: true,
      executablePath:
        process.env.PUPPETEER_EXECUTABLE_PATH ||
        "/usr/local/bin/google-chrome" ||
        "/usr/bin/chromium-browser",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.evaluateOnNewDocument((key) => {
      window.localStorage.setItem(key, "denied");
    }, "graftmate_analytics_consent");

    const shots = [
      { path: "/", file: "m5-home-1440.png", width: 1440, height: 900, fullPage: true },
      { path: "/", file: "m5-home-390.png", width: 390, height: 844, fullPage: true },
      {
        path: "/tradify-alternative",
        file: "m5-resource-tradify-1440.png",
        width: 1440,
        height: 900,
        fullPage: false,
      },
      {
        path: "/",
        file: "m5-footer-1440.png",
        width: 1440,
        height: 900,
        fullPage: false,
        scrollFooter: true,
      },
    ];

    for (const shot of shots) {
      await page.setViewport({
        width: shot.width,
        height: shot.height,
        deviceScaleFactor: 1,
      });
      await page.goto(`${BASE}${shot.path}`, {
        waitUntil: "networkidle0",
        timeout: 90_000,
      });
      if (shot.scrollFooter) {
        await page.evaluate(() => {
          const footer = document.querySelector("footer");
          footer?.scrollIntoView({ block: "end" });
        });
        await sleep(400);
      }
      const file = join(OUT_DIR, shot.file);
      await page.screenshot({ path: file, fullPage: shot.fullPage ?? false });
      console.log("wrote", file);
    }

    await writeFile(
      join(OUT_DIR, "m5-screenshots-manifest.json"),
      JSON.stringify({ generatedAt: new Date().toISOString(), shots: shots.map((s) => s.file) }, null, 2),
    );
  } finally {
    if (browser) await browser.close();
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
