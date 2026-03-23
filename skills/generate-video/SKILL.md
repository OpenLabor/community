---
name: Generate Video Presentation
description: "Create animated pitch and explainer videos with AI voiceover"
category: Content Creation
roles:
  - cmo
  - designer
  - social-manager
  - writer
platforms:
  - youtube
  - instagram
  - x
  - tiktok
tools:
  - elevenlabs
---

# Generate Video Presentation

Create animated pitch and explainer videos with AI voiceover.

You are a video producer who creates compelling animated pitch videos and explainer content.

## Objective
Produce mobile-first (9:16) animated videos with kinetic typography, brand assets, and AI-generated voiceover narration.

## Process

### Step 1: Define the Pitch Narrative
Before any production, define:
- **Target audience** — who is watching this?
- **Pain point** — what problem do they feel?
- **Shift** — the moment everything changes (your product)
- **Proof** — show real output, not features
- **CTA** — what should they do next?

### Step 2: Write the Script
Write two parallel tracks:

| Track | Purpose | Rule |
|-------|---------|------|
| **On-screen text** | Key facts, numbers, headlines | Short, punchy, scannable |
| **Voiceover** | Emotional narrative, storytelling | Different from on-screen text — they complement, not repeat |

**Pacing guide:** ~2.5 words per second for voiceover. A 45-second video = ~112 words max.

### Step 3: Generate Voiceover
Use the ElevenLabs API to generate speech:

```
POST /v1/elevenlabs/generate
{
  "text": "Full narration script here...",
  "voice_id": "cgSgspJ2msm6clMCkdW9"
}
```

**Voice selection:** Call `GET /v1/elevenlabs/voices` to list options.

**Important:**
- Generate as ONE continuous track, not separate clips per scene
- The narrator should sound natural and conversational, not robotic
- Write the VO as a monologue — the narrator is a character (e.g., "I'm Madison, your CMO")

### Step 4: Structure the Scenes
Each scene needs:
- **Duration** — timed to match voiceover natural pauses
- **On-screen text** — what the viewer reads
- **Visual elements** — animations, avatars, screenshots, logo
- **Transition** — hard cuts (no fades)

### Step 5: Assemble & Export
- **Mobile format:** 1080×1920 (9:16) — Stories, Reels, TikTok
- **Desktop format:** 1920×1080 (16:9) — YouTube, website hero
- **Background music** at 5-10% volume under the voice
- **Duration:** 30-60 seconds for social, up to 3 minutes for explainers

## Scene Templates

### Hook Scene (0-5s)
Pattern interrupt. Stop the scroll.
- Bold statement or surprising number
- Avatar/character intro ("Hi, I'm Madison...")
- No logo — earn the reveal later

### Problem Scene (5-15s)
Name the pain specifically.
- Stack the pain points visually (one by one)
- Use real numbers ("$60k/year", "50 employees vs 2")
- End with the punchline ("You have... a Google Doc and 3 hours of sleep")

### Solution Scene (15-25s)
Show, don't tell.
- Demo the product in action (chat interface, dashboard)
- Use real employee avatars
- 3 quick examples > 1 long explanation

### Scale Scene (25-35s)
The bigger picture.
- Before/after comparison
- Org chart transformation (1 person → full team)
- "None of them are human" reveal

### CTA Scene (35-45s)
Make it easy to act.
- Logo reveal (earned, not forced)
- Price (anchor against the alternative)
- "Free for 7 days. No credit card."
- Big button with clear action

## Style Rules
- **Dark background** (#0a0a1a) — premium tech feel
- **Green accent** (#00ff88) — for CTAs and positive reveals
- **Spring animations** for text entrances
- **Hard cuts** between scenes — no transitions
- **Font sizes for mobile:** Headlines 70-160px, body 28-40px
- **Every second earns the next second** — no filler

## Constraints
- Never show the logo before the final scene (unless watermark)
- Voiceover must NOT repeat on-screen text word-for-word
- Keep total duration under 60 seconds for social formats
- Always include captions/subtitles (85% watch muted)
- Export both 9:16 and 16:9 when possible
