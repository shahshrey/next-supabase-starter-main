import puppeteer from "puppeteer";
import { execSync, spawn } from "child_process";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const FRAMES_DIR = path.join(ROOT, "tmp-frames");
const OUTPUT_VIDEO = path.join(ROOT, "demo-raw.mp4");
const FPS = 30;

if (!existsSync(FRAMES_DIR)) mkdirSync(FRAMES_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  headless: true,
  defaultViewport: { width: 1280, height: 800 },
});

const page = await browser.newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });

// Wait for fonts/images to settle
await new Promise((r) => setTimeout(r, 1500));

let frame = 0;

async function captureFrame() {
  const filename = path.join(FRAMES_DIR, `frame-${String(frame).padStart(5, "0")}.png`);
  await page.screenshot({ path: filename, type: "png" });
  frame++;
}

// Helper: hold a position for N seconds
async function hold(seconds) {
  const count = Math.round(seconds * FPS);
  for (let i = 0; i < count; i++) await captureFrame();
}

// Helper: smooth scroll to a position over N seconds
async function smoothScrollTo(targetY, durationSec) {
  const startY = await page.evaluate(() => window.scrollY);
  const diff = targetY - startY;
  const steps = Math.round(durationSec * FPS);
  for (let i = 0; i <= steps; i++) {
    const progress = i / steps;
    // Ease in-out
    const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const y = startY + diff * eased;
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await captureFrame();
  }
}

console.log("Recording: Hero section...");
await hold(10);

console.log("Recording: Scrolling to social proof...");
await smoothScrollTo(900, 3);
await hold(4);

console.log("Recording: Scrolling to features...");
await smoothScrollTo(1600, 3);
await hold(9);

console.log("Recording: Scrolling to how it works...");
await smoothScrollTo(2800, 3);
await hold(8);

console.log("Recording: Scrolling to stats...");
await smoothScrollTo(3800, 2.5);
await hold(6);

console.log("Recording: Scrolling to testimonials...");
await smoothScrollTo(4400, 2.5);
await hold(9);

console.log("Recording: Scrolling to pricing...");
await smoothScrollTo(5400, 3);
await hold(12);

console.log("Recording: Scrolling to CTA...");
await smoothScrollTo(6500, 2.5);
await hold(7);

console.log("Recording: Scrolling to footer...");
await smoothScrollTo(7200, 2.5);
await hold(4);

console.log("Recording: Scrolling back to top...");
await smoothScrollTo(0, 3);
await hold(5);

await browser.close();

console.log(`Captured ${frame} frames. Encoding video...`);

execSync(
  `ffmpeg -y -framerate ${FPS} -i "${FRAMES_DIR}/frame-%05d.png" \
   -c:v libx264 -pix_fmt yuv420p -preset fast -crf 18 \
   -vf "scale=1280:800" \
   "${OUTPUT_VIDEO}"`,
  { stdio: "inherit" }
);

// Clean up frames
execSync(`rm -rf "${FRAMES_DIR}"`);

console.log(`\nVideo saved to: ${OUTPUT_VIDEO}`);
