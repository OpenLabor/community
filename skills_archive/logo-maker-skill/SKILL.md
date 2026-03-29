---
name: Logo Maker
description: "Generate professional logomarks and wordmarks using Flux and Imagen AI models"
category: Design
roles:
  - designer
  - cmo
---

<!-- openlabor-connector: images, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Logo Maker

Generate professional, minimal logomarks and wordmarks using Flux and Imagen AI models.

You have access to image generation through the OpenLabor API. API keys are managed automatically — never expose them.

## How to Generate

```
use images GENERATE '{"prompt":"...","model":"flux-2-pro","aspect_ratio":"1:1","num_images":"4"}'
```

### Available Models

```
use images MODELS '{}'
```

| Model | Speed | Best For |
|-------|-------|---------|
| `flux-schnell` | Fast (~5s) | Quick drafts, rapid iteration |
| `flux-dev` | Medium (~15s) | Balanced quality |
| `flux-2-pro` | Slow (~30s) | Final deliverables, highest Flux quality |
| `imagen-4-fast` | Fast (~5s) | Quick Google-quality drafts |
| `imagen-4` | Medium (~15s) | Balanced Google quality |
| `imagen-4-ultra` | Slow (~45s) | Highest quality, best text rendering |

## Workflow

### Step 1: Understand the Brand

Before generating, gather:
- **Brand name** (exact text for wordmark)
- **What it does** (one sentence)
- **Audience** (B2B enterprise, consumer, developer, etc.)
- **Vibe** (minimal, bold, playful, technical, premium)
- **Constraints** (favicon size, specific colors, etc.)

Ask 2-3 targeted questions if not provided.

### Step 2: Craft the Prompt

**For logomarks (icon/symbol):**
```
Minimal geometric logomark for "[Brand]" — [what it does]. Abstract symbol suggesting [2-3 concepts].
Single color on white background. Vector style, flat design, no gradients, no shadows, no text.
Clean lines, works at 16x16px. Professional, modern, [vibe].
```

**For wordmarks (text-based):**
```
Clean typographic logo for "[Brand]" in lowercase. Modern sans-serif typeface
similar to [Inter/Geist/Helvetica]. [Weight] weight. Minimal, no icon, no decoration.
Black on white background. Professional, [vibe].
```

**For combination marks (icon + text):**
```
Minimal logo for "[Brand]" — [what it does]. Small geometric symbol to the left of the wordmark.
Symbol suggests [concept]. Wordmark in clean lowercase sans-serif. Single color on white background.
Vector style, flat design. Professional, modern.
```

### Step 3: Generate from Both Providers

Always generate from BOTH Flux and Imagen — they have very different styles:

```
# Flux — better at geometric/abstract marks
use images GENERATE '{"prompt":"YOUR_PROMPT","model":"flux-2-pro","aspect_ratio":"1:1","num_images":"4"}'

# Imagen — better at text rendering and typography
use images GENERATE '{"prompt":"YOUR_PROMPT","model":"imagen-4","aspect_ratio":"1:1","num_images":"4"}'
```

### Step 4: Present and Compare

Present all options:
```
## Logo Concepts for [Brand]

### Flux Generations
1. [image] — Description of what this conveys
2. [image] — Description
3. [image] — Description
4. [image] — Description

### Imagen Generations
1. [image] — Description
2. [image] — Description
3. [image] — Description
4. [image] — Description

### Recommendation
**Top pick:** #X — [why this works best]
**Runner up:** #Y — [what makes it strong]
```

### Step 5: Refine

Once the user picks a direction:
- **More specific prompt** — add details from the chosen concept
- **Variations** — "similar to [concept] but with [adjustment]"
- **Color versions** — generate in brand colors
- **Size tests** — 1:1 for favicon, 16:9 for header

Use `flux-schnell` for quick iterations, `flux-2-pro` or `imagen-4-ultra` for finals.

## Prompt Tips

**DO:**
- "minimal", "geometric", "flat design", "vector style"
- "single color on white background"
- Reference specific typefaces (Inter, Geist, Helvetica Neue)
- "works at 16x16px" for favicons
- "no gradients, no shadows, no 3D effects"

**DON'T:**
- Vague terms like "creative" or "unique"
- Too many elements in one mark
- Detailed scenes or illustrations
- Say "logo" without specifying logomark vs wordmark

## Evaluation Criteria

| Dimension | Weight | What to look for |
|-----------|--------|-----------------|
| Simplicity | 25% | Can you draw it from memory? Works at 16x16? |
| Distinctiveness | 20% | Confusable with another brand? |
| Relevance | 20% | Suggests what the company does? |
| Versatility | 15% | Works dark/light, small/large, print/screen? |
| Timelessness | 10% | Will it look dated in 3 years? |
| Memorability | 10% | Recognizable after seeing once? |

## Guidelines
1. Always generate from both Flux and Imagen for comparison
2. Start with `flux-schnell` for drafts, upgrade to `flux-2-pro` for finals
3. Imagen 4 Ultra produces the best text rendering
4. Present options with descriptions — don't just dump images
5. Save all generated images for the user to review
