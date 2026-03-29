---
name: Image Generator
description: "Generate images from text prompts using Flux, Imagen, and other AI models"
category: Content Creation
roles:
  - x-manager
  - cmo
  - social-manager
  - designer
---

<!-- openlabor-connector: images, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Image Generator

Generate images from text prompts using AI models (Flux, Imagen, and more).

You have access to image generation through the OpenLabor API.

## How to Generate Images

Use the exec tool to run `use`. Credentials are loaded automatically from the workspace.

```
use images GENERATE '{"prompt":"your image description","model":"flux-schnell"}'
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `prompt` | string | required | Detailed description of the image to generate |
| `model` | string | "flux-schnell" | Which model to use (see models below) |
| `aspect_ratio` | string | "1:1" | Aspect ratio (1:1, 16:9, 9:16, 4:3, 3:4) |
| `num_images` | string | "1" | Number of images (1-4) |
| `output_format` | string | "webp" | Output format (webp, png, jpg) |

### Available Models

| Model ID | Speed | Quality | Best For |
|----------|-------|---------|----------|
| `flux-schnell` | Fast (~5s) | Good | Quick drafts, iteration |
| `flux-dev` | Medium (~15s) | High | Balanced quality/speed |
| `flux-2-pro` | Slow (~30s) | Highest | Final/polished images |
| `imagen-4-fast` | Fast (~5s) | Good | Quick Google-quality drafts |
| `imagen-4` | Medium (~15s) | High | Balanced Google quality |
| `imagen-4-ultra` | Slow (~45s) | Highest | Ultra-quality images |

### List Available Models

```
use images MODELS '{}'
```

### Examples

```
# Social media post image
use images GENERATE '{"prompt":"Modern minimal workspace with laptop showing analytics dashboard, warm lighting, top-down view","model":"flux-schnell","aspect_ratio":"1:1"}'

# Twitter header
use images GENERATE '{"prompt":"Abstract gradient background in deep blue and purple, subtle geometric patterns","model":"flux-dev","aspect_ratio":"16:9"}'

# Instagram story
use images GENERATE '{"prompt":"Bold typographic quote card, white text on dark background, motivational","model":"flux-schnell","aspect_ratio":"9:16"}'

# High-quality brand image
use images GENERATE '{"prompt":"Professional product photo of a sleek SaaS dashboard on a MacBook, clean desk setup","model":"flux-2-pro","aspect_ratio":"16:9"}'
```

### Response Format

Returns JSON with:
- `model` — Model used
- `images` — Array of image URLs (or base64 data URIs for Google models)
- `durationMs` — Generation time in milliseconds

## Prompt Writing Tips

### For Social Media Images
- Be specific about style: "minimal", "bold", "professional", "playful"
- Include composition details: "top-down view", "close-up", "wide shot"
- Mention lighting: "warm lighting", "natural light", "studio lighting"
- Specify mood: "energetic", "calm", "professional", "casual"

### For Brand Content
- Reference your brand colors if relevant
- Be specific about what should be in the image
- Include "no text" if you want a clean image without text
- Use "professional", "corporate", "clean" for business content

### What Works Best
- Detailed, specific prompts get better results
- Include style references: "in the style of Apple product photography"
- Specify what you DON'T want: "no people", "no text", "no watermark"
- Use `flux-schnell` for iteration, then `flux-2-pro` for the final version

## Guidelines
- Generate images that are on-brand and professional
- Use 1:1 for social posts, 16:9 for headers/banners, 9:16 for stories
- Start with `flux-schnell` for speed, upgrade model for final versions
- Never generate inappropriate, misleading, or offensive content
- Credit AI generation when required by platform rules
