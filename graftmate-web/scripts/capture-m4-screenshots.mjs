/**
 * Headless screenshots for M4 acceptance (390px and 1440px homepage phone-to-quote).
 * Run: npm run build && node scripts/capture-m4-screenshots.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer-core";

const PORT = 3100;
const BASE = `http://127.0.0.1:${PORT}`;
const OUT_DIR = "/opt/cursor/artifacts/m4-screenshots";

const viewports = [
  { suffix: "390", width: 390, height: 844 },
  { suffix: "1440", width: 1440, height: 900 },
];

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
        process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.evaluateOnNewDocument((key) => {
      window.localStorage.setItem(key, "denied");
    }, "graftmate_analytics_consent");

    for (const vp of viewports) {
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
      });
      await page.goto(`${BASE}/#phone-to-quote`, {
        waitUntil: "networkidle0",
        timeout: 60_000,
      });
      await page.evaluate(() => {
        document.getElementById("phone-to-quote")?.scrollIntoView({
          block: "start",
        });
      });
      await sleep(400);
      const file = join(OUT_DIR, `home-phone-to-quote-${vp.suffix}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log("wrote", file);
    }

    const manifest = {
      generatedAt: new Date().toISOString(),
      section: "#phone-to-quote",
      captures: viewports.map((v) => ({
        file: `home-phone-to-quote-${v.suffix}.png`,
        viewport: `${v.width}x${v.height}`,
      })),
    };
    await writeFile(
      join(OUT_DIR, "manifest.json"),
      JSON.stringify(manifest, null, 2),
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
