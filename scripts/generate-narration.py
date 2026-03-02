import os
import requests
import json

API_KEY = os.environ['ELEVEN_LABS_API_KEY']
VOICE_ID = "wWWn96OtTHu1sn8SRGEr"
OUTPUT_PATH = "/tmp/narration.mp3"

NARRATION = """
Welcome to FlowTask — the modern task management app built for teams who want to ship projects on time, every time.

Right here on the hero section, you're greeted with a clean, beautiful interface and a live product preview of FlowTask's signature kanban board. Notice the realistic workspace — complete with columns for To Do, In Progress, In Review, and Done — each populated with real task cards showing priorities, due dates, progress bars, and team member avatars.

FlowTask is trusted by over fifty thousand teams worldwide. You can see the social proof band right here with well-known companies relying on FlowTask daily.

Scrolling into the Features section, FlowTask packs everything your team needs: customizable kanban boards to visualize your workflow, smart deadlines so you never miss a target, real-time team collaboration, a priority system to focus on what matters most, beautiful progress analytics to track velocity and project health, and over a hundred integrations with tools like GitHub, Slack, and Figma.

The How It Works section keeps it simple — create your workspace in seconds, invite your team with role-based permissions, then start shipping. Three steps, that's all it takes.

Teams that switch to FlowTask see real results. Sarah Chen from TechFlow says her engineering team now ships forty percent faster. Marcus Rodriguez calls it the only task manager designed for real teams. And Aisha Patel's remote team finally feels in sync without endless status meetings.

Pricing is transparent and simple. The free plan covers individuals and small teams with three projects and five members. Pro, the most popular plan, unlocks unlimited projects, advanced analytics, and priority support for just twelve dollars per user per month. Enterprise scales to the needs of large organizations with SSO, custom integrations, and dedicated support.

The FAQ section answers everything — free plans, switching plans, collaboration, integrations, and security. FlowTask is SOC 2 Type Two certified and fully GDPR compliant.

And at the end of the page, a beautiful call-to-action invites you to get started for free. No credit card required, and a fourteen-day Pro trial is included.

FlowTask — built for modern teams. Ship projects on time, every time. Get started free today.
"""

print("Generating narration with ElevenLabs...")
url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

headers = {
    "Accept": "audio/mpeg",
    "Content-Type": "application/json",
    "xi-api-key": API_KEY,
}

payload = {
    "text": NARRATION.strip(),
    "model_id": "eleven_monolingual_v1",
    "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.8,
        "style": 0.2,
        "use_speaker_boost": True,
    },
}

response = requests.post(url, json=payload, headers=headers)
print(f"Status: {response.status_code}")

if response.status_code == 200:
    with open(OUTPUT_PATH, "wb") as f:
        f.write(response.content)
    size_kb = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"Audio saved to {OUTPUT_PATH} ({size_kb:.1f} KB)")
else:
    print(f"Error: {response.text}")
    raise SystemExit(1)
