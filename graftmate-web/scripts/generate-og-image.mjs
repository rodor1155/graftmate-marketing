import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const WIDTH = 1200;
const HEIGHT = 630;

const heroScene = await sharp(join(publicDir, "brand", "desktop-home-hero-scene.webp"))
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
  .toBuffer();

const phoneWidth = 220;
const phoneHeight = Math.round(phoneWidth * (844 / 390));

const phoneScreenshot = await sharp(join(publicDir, "app", "home.webp"))
  .resize(phoneWidth, phoneHeight, { fit: "cover", position: "top" })
  .toBuffer();

const phoneFrameSvg = Buffer.from(`
  <svg width="${phoneWidth + 16}" height="${phoneHeight + 16}" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="${phoneWidth + 8}" height="${phoneHeight + 8}" rx="28" fill="#f5f3ed" stroke="rgba(26,26,26,0.12)" stroke-width="4"/>
    <rect x="12" y="12" width="${phoneWidth}" height="${Math.round(phoneHeight * 0.07)}" rx="0" fill="#a9b8c0"/>
    <rect x="${phoneWidth * 0.34 + 12}" y="16" width="${phoneWidth * 0.32}" height="8" rx="4" fill="#1a1a1a"/>
  </svg>
`);

const phoneComposite = await sharp({
  create: {
    width: phoneWidth + 16,
    height: phoneHeight + 16,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    { input: phoneFrameSvg, top: 0, left: 0 },
    {
      input: phoneScreenshot,
      top: 12 + Math.round(phoneHeight * 0.07),
      left: 12,
    },
  ])
  .png()
  .toBuffer();

const logo = await sharp(join(publicDir, "logo.png"))
  .resize(72, 88, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const wordmarkSvg = Buffer.from(`
  <svg width="420" height="80" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="58" font-family="system-ui, sans-serif" font-size="56" font-weight="700" fill="#1a1a1a">GraftMate</text>
    <text x="0" y="76" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#4a4a4a">Professional quotes from your phone</text>
  </svg>
`);

const overlaySvg = Buffer.from(`
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f5f3ed" stop-opacity="0.92"/>
        <stop offset="55%" stop-color="#f5f3ed" stop-opacity="0.72"/>
        <stop offset="100%" stop-color="#f5f3ed" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)"/>
  </svg>
`);

await sharp(heroScene)
  .composite([
    { input: overlaySvg, top: 0, left: 0 },
    { input: logo, top: 72, left: 72 },
    { input: wordmarkSvg, top: 68, left: 160 },
    {
      input: phoneComposite,
      top: Math.round((HEIGHT - phoneHeight - 16) / 2),
      left: WIDTH - phoneWidth - 96,
    },
  ])
  .png()
  .toFile(join(publicDir, "og-image.png"));

console.log("Generated public/og-image.png");
