import puppeteer from 'puppeteer'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const OUTPUT_DIR = '/tmp/demo-frames'
const VIDEO_OUTPUT = '/tmp/demo-raw.mp4'
const WIDTH = 1280
const HEIGHT = 800
const FPS = 24

// Clean up and prepare output directory
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
    '--window-size=1280,800',
  ],
})

const page = await browser.newPage()
await page.setViewport({ width: WIDTH, height: HEIGHT })

console.log('Navigating to landing page...')
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 })

// Wait for fonts and animations to settle
await new Promise(r => setTimeout(r, 2000))

// Get full page height
const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight)
console.log(`Page height: ${totalHeight}px, taking screenshots...`)

let frameIndex = 0

async function captureFrame() {
  const framePath = path.join(OUTPUT_DIR, `frame_${String(frameIndex).padStart(5, '0')}.png`)
  await page.screenshot({ path: framePath, type: 'png' })
  frameIndex++
  return framePath
}

// Helper: hold at position for N frames
async function holdFrames(n) {
  for (let i = 0; i < n; i++) {
    await captureFrame()
  }
}

// Helper: scroll smoothly from current to target position
async function scrollTo(targetY, durationFrames) {
  const startY = await page.evaluate(() => window.scrollY)
  for (let i = 0; i < durationFrames; i++) {
    const progress = (i + 1) / durationFrames
    // Ease-in-out
    const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress
    const y = startY + (targetY - startY) * eased
    await page.evaluate(y => window.scrollTo({ top: y }), Math.round(y))
    await captureFrame()
  }
}

// ── Intro: hold on hero section
console.log('Capturing hero section...')
await page.evaluate(() => window.scrollTo({ top: 0 }))
await holdFrames(FPS * 3) // 3 seconds

// Scroll to show the product mockup
await scrollTo(300, FPS * 2)
await holdFrames(FPS * 2)

// Scroll to social proof
await scrollTo(1050, FPS * 1.5)
await holdFrames(FPS * 1.5)

// Scroll to features section
console.log('Capturing features section...')
const featuresY = await page.evaluate(() => {
  const el = document.getElementById('features')
  return el ? el.offsetTop - 80 : 1400
})
await scrollTo(featuresY, FPS * 2)
await holdFrames(FPS * 2.5)

// Scroll through features
await scrollTo(featuresY + 400, FPS * 2)
await holdFrames(FPS * 1.5)

// Scroll to "How it works"
const howY = await page.evaluate(() => {
  const els = document.querySelectorAll('section')
  for (const el of els) {
    const badge = el.querySelector('.inline-flex, span')
    if (badge && badge.textContent?.includes('How it works')) return el.offsetTop - 80
  }
  return 2600
})
console.log(`How it works Y: ${howY}`)
await scrollTo(howY, FPS * 2)
await holdFrames(FPS * 2.5)

// Scroll to metrics band
await scrollTo(howY + 700, FPS * 2)
await holdFrames(FPS * 1.5)

// Scroll to testimonials
const testimonialsY = await page.evaluate(() => {
  const el = document.getElementById('testimonials')
  return el ? el.offsetTop - 80 : 3800
})
console.log(`Testimonials Y: ${testimonialsY}`)
await scrollTo(testimonialsY, FPS * 2)
await holdFrames(FPS * 2.5)

// Scroll to pricing
console.log('Capturing pricing section...')
const pricingY = await page.evaluate(() => {
  const el = document.getElementById('pricing')
  return el ? el.offsetTop - 80 : 5000
})
await scrollTo(pricingY, FPS * 2)
await holdFrames(FPS * 2)

// Scroll down to show all pricing cards
await scrollTo(pricingY + 400, FPS * 2)
await holdFrames(FPS * 1.5)

// Scroll to FAQ
const faqY = await page.evaluate(() => {
  const el = document.getElementById('faq')
  return el ? el.offsetTop - 80 : 6500
})
await scrollTo(faqY, FPS * 2)
await holdFrames(FPS * 2)

// Scroll to CTA
const ctaY = totalHeight - HEIGHT - 100
await scrollTo(ctaY > 0 ? ctaY : totalHeight - HEIGHT, FPS * 2)
await holdFrames(FPS * 3)

// Scroll back to top
console.log('Scrolling back to hero...')
await scrollTo(0, FPS * 2)
await holdFrames(FPS * 2)

await browser.close()

const totalFrames = frameIndex
console.log(`Captured ${totalFrames} frames. Encoding video...`)

// Assemble video with ffmpeg
execSync(
  `ffmpeg -y -framerate ${FPS} -i "${OUTPUT_DIR}/frame_%05d.png" \
   -c:v libx264 -preset fast -crf 22 -pix_fmt yuv420p \
   -vf "scale=1280:800:force_original_aspect_ratio=decrease,pad=1280:800:(ow-iw)/2:(oh-ih)/2" \
   ${VIDEO_OUTPUT}`,
  { stdio: 'inherit' }
)

console.log(`\nVideo saved to: ${VIDEO_OUTPUT}`)
console.log(`Total duration: ${(totalFrames / FPS).toFixed(1)}s`)
