import puppeteer from 'puppeteer'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const OUTPUT_DIR = '/tmp/demo-frames-v2'
const VIDEO_OUTPUT = '/tmp/demo-raw-v2.mp4'
const WIDTH = 1280
const HEIGHT = 800
const FPS = 24

if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true })
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true })

console.log('Launching browser...')
const browser = await puppeteer.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    `--window-size=${WIDTH},${HEIGHT}`,
  ],
})

const page = await browser.newPage()
await page.setViewport({ width: WIDTH, height: HEIGHT })

console.log('Navigating to landing page...')
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2000))

const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight)
console.log(`Page height: ${totalHeight}px`)

let frameIndex = 0

async function captureFrame() {
  const framePath = path.join(OUTPUT_DIR, `frame_${String(frameIndex).padStart(5, '0')}.png`)
  await page.screenshot({ path: framePath, type: 'png' })
  frameIndex++
}

async function holdFrames(seconds) {
  const n = Math.round(seconds * FPS)
  for (let i = 0; i < n; i++) await captureFrame()
}

async function scrollTo(targetY, durationSec) {
  const startY = await page.evaluate(() => window.scrollY)
  const frames = Math.round(durationSec * FPS)
  for (let i = 0; i < frames; i++) {
    const p = (i + 1) / frames
    const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p
    const y = startY + (targetY - startY) * eased
    await page.evaluate(y => window.scrollTo({ top: y }), Math.round(y))
    await captureFrame()
  }
}

// ── HERO (0–15s): "Welcome to FlowTask..."
console.log('[0s] Hero section')
await page.evaluate(() => window.scrollTo({ top: 0 }))
await holdFrames(5) // 5s on headline + badges

// Slow drift down to reveal product mockup
await scrollTo(180, 2.5)
await holdFrames(4) // 4s showing CTA + mockup start

// Pan across the product mockup
await scrollTo(500, 2.5)
await holdFrames(3) // 3s showing full kanban board

// ── SOCIAL PROOF (15–22s)
console.log('[15s] Social proof')
const socialY = await page.evaluate(() => {
  const sections = document.querySelectorAll('section')
  for (const s of sections) {
    if (s.textContent?.includes('Trusted by teams')) return s.offsetTop - 60
  }
  return 950
})
await scrollTo(socialY, 2)
await holdFrames(5)

// ── FEATURES (22–40s)
console.log('[22s] Features')
const featuresY = await page.evaluate(() => {
  const el = document.getElementById('features')
  return el ? el.offsetTop - 80 : 1300
})
await scrollTo(featuresY, 2)
await holdFrames(3) // Header + first row

await scrollTo(featuresY + 250, 2)
await holdFrames(3) // Second row features

await scrollTo(featuresY + 500, 2)
await holdFrames(3) // Third row features

// ── HOW IT WORKS (40–55s)
console.log('[40s] How it works')
const howEl = await page.evaluate(() => {
  const sections = document.querySelectorAll('section')
  for (const s of sections) {
    if (s.textContent?.includes('Up and running')) return s.offsetTop - 80
  }
  return 2400
})
await scrollTo(howEl, 2)
await holdFrames(3) // Title

await scrollTo(howEl + 200, 2)
await holdFrames(4) // Steps

// ── METRICS (55–63s)
console.log('[55s] Metrics')
await scrollTo(howEl + 900, 2)
await holdFrames(4)

// ── TESTIMONIALS (63–82s)
console.log('[63s] Testimonials')
const testimonialsY = await page.evaluate(() => {
  const el = document.getElementById('testimonials')
  return el ? el.offsetTop - 80 : 3200
})
await scrollTo(testimonialsY, 2)
await holdFrames(3) // Header

await scrollTo(testimonialsY + 200, 2)
await holdFrames(5) // Cards

await scrollTo(testimonialsY + 450, 2)
await holdFrames(4)

// ── PRICING (82–107s)
console.log('[82s] Pricing')
const pricingY = await page.evaluate(() => {
  const el = document.getElementById('pricing')
  return el ? el.offsetTop - 80 : 4400
})
await scrollTo(pricingY, 2)
await holdFrames(3) // Title

await scrollTo(pricingY + 200, 2)
await holdFrames(6) // Pricing cards visible

await scrollTo(pricingY + 500, 2)
await holdFrames(5) // More pricing detail

// ── FAQ (107–127s)
console.log('[107s] FAQ')
const faqY = await page.evaluate(() => {
  const el = document.getElementById('faq')
  return el ? el.offsetTop - 80 : 5800
})
await scrollTo(faqY, 2)
await holdFrames(4)

await scrollTo(faqY + 300, 2)
await holdFrames(5)

await scrollTo(faqY + 600, 2)
await holdFrames(4)

// ── CTA (127–145s)
console.log('[127s] CTA section')
const ctaBottom = totalHeight - HEIGHT
await scrollTo(ctaBottom - 200, 2)
await holdFrames(5)

await scrollTo(ctaBottom, 2)
await holdFrames(6) // Big CTA in frame

// ── OUTRO (145–153s): scroll back to top
console.log('[145s] Outro - back to hero')
await scrollTo(0, 3)
await holdFrames(5)

await browser.close()

const totalFrames = frameIndex
const duration = (totalFrames / FPS).toFixed(1)
console.log(`\nCaptured ${totalFrames} frames (${duration}s). Encoding video...`)

execSync(
  `ffmpeg -y -framerate ${FPS} -i "${OUTPUT_DIR}/frame_%05d.png" \
   -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p \
   -vf "scale=1280:800:force_original_aspect_ratio=decrease,pad=1280:800:(ow-iw)/2:(oh-ih)/2" \
   ${VIDEO_OUTPUT}`,
  { stdio: 'inherit' }
)

console.log(`\nVideo saved: ${VIDEO_OUTPUT} (${duration}s)`)
