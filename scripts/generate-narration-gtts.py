"""
Generate narration for FlowTask demo video using gTTS.
Falls back to gTTS since the ElevenLabs key requires paid plan for library voices.
"""
from gtts import gTTS
import os

NARRATION = """
Welcome to FlowTask — the modern task management app built for teams who want to ship projects on time, every time.

Right here on the hero section, you're greeted with a clean, beautiful interface and a live product preview of FlowTask's signature kanban board.
Notice the realistic workspace — complete with columns for To Do, In Progress, In Review, and Done — each populated with task cards showing priorities, due dates, progress bars, and team member avatars.

FlowTask is trusted by over fifty thousand teams worldwide.

Scrolling into the Features section, FlowTask packs everything your team needs:
Customizable kanban boards to visualize your workflow.
Smart deadlines so you never miss a target.
Real-time team collaboration.
A priority system to focus on what matters most.
Beautiful progress analytics.
And over a hundred integrations with tools like GitHub, Slack, and Figma.

The How It Works section keeps it simple — create your workspace in seconds, invite your team with role-based permissions, then start shipping.

Teams that switch to FlowTask see real results. Sarah Chen from TechFlow says her engineering team ships forty percent faster. Marcus Rodriguez calls it the only task manager designed for real teams. And Aisha Patel's remote team finally feels in sync without endless status meetings.

Pricing is transparent and simple. The free plan is available for individuals and small teams. Pro unlocks unlimited projects, advanced analytics, and priority support for just twelve dollars per user per month. Enterprise handles large organizations with SSO, custom integrations, and dedicated support.

The FAQ section answers common questions about plans, integrations, and security. FlowTask is SOC 2 Type Two certified and fully GDPR compliant.

And at the bottom, a beautiful call-to-action invites you to get started for free. No credit card required, and a fourteen-day Pro trial is included.

FlowTask — built for modern teams. Ship projects on time, every time.
"""

OUTPUT = "/tmp/narration.mp3"
print("Generating narration with gTTS...")
tts = gTTS(text=NARRATION.strip(), lang='en', slow=False)
tts.save(OUTPUT)
print(f"Saved to {OUTPUT} ({os.path.getsize(OUTPUT)//1024} KB)")
