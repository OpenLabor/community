---
name: Animate Story
description: "Turn photos and ideas into anime-style visual stories — generate scene-by-scene illustrated narratives"
category: Content Creation
roles:
  - cmo
  - social-manager
  - designer
  - x-manager
---

<!-- openlabor-connector: images, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Animate Story

Turn photos and ideas into anime-style visual stories — generate scene-by-scene illustrated narratives.

You have access to image generation through the OpenLabor API.

## How to Generate Images

```
openlabor-exec images GENERATE '{"prompt":"...","model":"flux-schnell","aspect_ratio":"9:16","num_images":"1"}'
```

## Styles

The same pipeline supports multiple visual styles. Always ask the user which style they want, or default to anime.

| Style | Prompt Suffix |
|-------|--------------|
| Anime/Manga | `anime style, manga aesthetic, vibrant colors, dramatic lighting, studio quality` |
| Ghibli | `studio ghibli style, soft watercolor, whimsical, warm lighting, hand-painted feel, nostalgic` |
| Comic Book | `comic book style, bold ink outlines, halftone dots, dynamic panels, superhero aesthetic, vivid colors` |
| Cyberpunk | `cyberpunk style, neon lights, rain-soaked streets, holographic UI, dark futuristic, blade runner aesthetic` |
| Watercolor | `watercolor painting style, soft edges, flowing colors, artistic brushstrokes, delicate, dreamy` |
| Pixel Art | `pixel art style, 16-bit retro, clean pixels, limited color palette, nostalgic game aesthetic` |

## Pipeline

### Step 1: Story Input

The user provides either:
- A **photo** of themselves or a scene (to be anime-fied)
- A **text description** of a story they want illustrated
- A **topic/theme** ("my morning routine as anime", "startup founder origin story")

### Step 2: Scene Breakdown

Break the story into 5-8 scenes. For each scene define:
- **Scene number** and **description** (what's happening)
- **Type**: "anime" (AI-generated) or "real" (user's original photo)
- **Image prompt** for anime scenes
- **Caption/text overlay** (short, punchy text for the scene)
- **Mood** (epic, chill, romantic, dark, funny)

Example breakdown:
```
Scene 1: [anime] Hook — dramatic wide shot establishing the world
Scene 2: [real] User's actual photo — the "real me"
Scene 3: [anime] The struggle — character facing a challenge
Scene 4: [anime] The breakthrough moment
Scene 5: [anime] The transformation — before/after contrast
Scene 6: [real] User's photo again — "back to reality"
Scene 7: [anime] The vision — where they're heading
Scene 8: [anime] CTA scene — bold text with call to action
```

### Step 3: Image Generation

For each anime scene, generate the image:

```
openlabor-exec images GENERATE '{"prompt":"[scene description], anime style, manga aesthetic, vibrant colors, dramatic lighting, studio quality, detailed illustration","model":"flux-schnell","aspect_ratio":"9:16","num_images":"1"}'
```

**Style prompt suffix** — always append to every anime prompt:
```
anime style, manga aesthetic, vibrant colors, dramatic lighting, studio quality, detailed illustration, cinematic composition
```

**Aspect ratios by platform:**
- TikTok / Reels / Stories: `9:16` (vertical)
- Twitter / LinkedIn: `16:9` (horizontal)
- Instagram feed: `1:1` (square)

**Model selection:**
- `flux-schnell` — fast drafts, $0.003/img (~5s)
- `flux-dev` — higher quality, $0.025/img (~15s)
- `imagen-4` — alternative style, good for text rendering

**Generate all scenes in parallel** for speed — don't wait for one to finish before starting the next.

### Step 4: Assemble the Story

Present the scenes in order with:
1. Each generated image
2. Scene caption/text overlay
3. Transition notes (if creating video)

### Step 5: Refinement

Once the user reviews:
- Regenerate specific scenes with adjusted prompts
- Try different models for better quality
- Adjust style (more dramatic, more subtle, different color palette)
- Add or remove scenes

## Story Templates

### "Day in My Life" (anime edition)
1. Wake up scene — cozy bedroom, morning light
2. Real photo — actual morning routine
3. Commute/travel — dramatic city scene
4. Work scene — focused character at desk
5. Real photo — actual workspace
6. Achievement moment — celebration/breakthrough
7. Evening — peaceful sunset scene
8. CTA — "Follow for more"

### "Origin Story" (startup/brand)
1. The problem — dark, frustrated scene
2. The spark — lightbulb moment, dramatic lighting
3. Building — montage of work and progress
4. The struggle — obstacles, rain, darkness
5. Breakthrough — explosion of light and color
6. Today — confident character, bright scene
7. Vision — epic future landscape
8. CTA — brand name, bold typography

### "Product Launch"
1. The old way — dull, frustrating
2. Enter the hero — product reveal, dramatic
3. Feature 1 — action scene showing benefit
4. Feature 2 — another action scene
5. Feature 3 — climactic demonstration
6. Transformation — before/after split
7. Social proof — characters celebrating
8. CTA — "Try it now"

### "Tutorial / How-To"
1. The goal — what you'll learn
2-6. Step-by-step scenes, each illustrating one step
7. The result — completed outcome
8. CTA — "Save this for later"

## Prompt Engineering for Anime

### Character Consistency
To maintain consistent characters across scenes:
- Describe the character the same way each time: "young woman with short black hair, blue eyes, wearing a white hoodie"
- Keep the style descriptors identical across all scenes
- Use the same model for all scenes in one story

### Mood Mapping
| Mood | Prompt keywords |
|------|----------------|
| Epic | dramatic lighting, cinematic, golden hour, lens flare, wide angle |
| Chill | soft colors, pastel, warm lighting, cozy, lo-fi aesthetic |
| Romantic | cherry blossoms, soft pink, dreamy, bokeh, sunset |
| Dark | noir, shadows, rain, neon lights, moody, high contrast |
| Funny | exaggerated expressions, chibi style, bright colors, comedic |
| Hype | action lines, dynamic pose, explosion effects, intense colors |

### Platform Optimization
- **TikTok/Reels**: 9:16, bold text overlays, 5-8 scenes max
- **Twitter thread**: 16:9, one image per tweet, 7-10 scenes
- **Instagram carousel**: 1:1, clean design, 5-10 slides
- **LinkedIn**: 16:9, professional tone, 5-7 scenes

## Guidelines
1. Always use 9:16 for vertical/story content unless specified otherwise
2. Generate scenes in parallel for speed
3. Append the anime style suffix to every prompt
4. Start with flux-schnell for drafts, upgrade to flux-dev for finals
5. Keep stories to 5-8 scenes — too many loses engagement
6. Each scene should have a clear purpose in the narrative arc
7. Include a CTA in the final scene
