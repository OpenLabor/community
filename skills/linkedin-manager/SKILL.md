---
name: LinkedIn Manager
description: "Create posts, share articles, manage comments, and track analytics on LinkedIn via Composio"
category: Social Media
roles:
  - sdr
  - cmo
  - social-manager
platforms:
  - linkedin
---

<!-- openlabor-connector: linkedin, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# LinkedIn Manager

Create posts, share articles, manage comments, and track analytics on LinkedIn.

You have access to LinkedIn through the OpenLabor connector API.

## How to Execute LinkedIn Actions

Use the exec tool to run `use`. Credentials are loaded automatically from the workspace.

```
use linkedin <TOOL_NAME> '<json_args>'
```

## Getting Started

### Get Your LinkedIn Profile (required first step)

- Tool: `LINKEDIN_GET_MY_INFO`
- Args: `{}`
- Returns your `person_id` — you'll need this as `author` for posting

Your author URN is: `urn:li:person:{person_id}`

## Publishing

### Create a Text Post

- Tool: `LINKEDIN_CREATE_LINKED_IN_POST`
- Args: `{ "author": "urn:li:person:YOUR_PERSON_ID", "commentary": "Your post text here", "visibility": "PUBLIC" }`
- Visibility options: "PUBLIC", "CONNECTIONS"
- Max 3,000 characters

### Share a URL/Article

- Tool: `LINKEDIN_CREATE_ARTICLE_OR_URL_SHARE`
- Args:
```json
{
  "author": "urn:li:person:YOUR_PERSON_ID",
  "visibility": { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
  "specificContent": {
    "com.linkedin.ugc.ShareContent": {
      "shareCommentary": { "text": "Check this out" },
      "shareMediaCategory": "ARTICLE",
      "media": [{ "status": "READY", "originalUrl": "https://example.com" }]
    }
  }
}
```

### Post with Image

Step 1 — Upload image:
- Tool: `LINKEDIN_INITIALIZE_IMAGE_UPLOAD`
- Args: `{ "owner": "urn:li:person:YOUR_PERSON_ID" }`

Step 2 — Create post with image reference:
- Tool: `LINKEDIN_CREATE_LINKED_IN_POST`
- Args: `{ "author": "urn:li:person:YOUR_PERSON_ID", "commentary": "Caption", "visibility": "PUBLIC", "images": ["IMAGE_URN_FROM_STEP_1"] }`

### Delete a Post

- Tool: `LINKEDIN_DELETE_POST`
- Args: `{ "post_urn": "urn:li:ugcPost:POST_ID" }`

## Engagement

### Comment on a Post

- Tool: `LINKEDIN_CREATE_COMMENT_ON_POST`
- Args: `{ "actor": "urn:li:person:YOUR_PERSON_ID", "object": "urn:li:ugcPost:POST_ID", "message": { "text": "Great insight!" }, "target_urn": "urn:li:ugcPost:POST_ID" }`

### View Reactions on a Post

- Tool: `LINKEDIN_LIST_REACTIONS`
- Args: `{ "entity": "urn:li:ugcPost:POST_ID" }`

### Get Post Details

- Tool: `LINKEDIN_GET_POST_CONTENT`
- Args: `{ "post_id": "urn:li:ugcPost:POST_ID" }`

## Profile & Company

### Look Up a Person

- Tool: `LINKEDIN_GET_PERSON`
- Args: `{ "person_id": "PERSON_ID" }`

### Get Company Info

- Tool: `LINKEDIN_GET_COMPANY_INFO`
- Args: `{}`
- Returns organizations where you have admin or posting roles

### Get Organization Follower Count

- Tool: `LINKEDIN_GET_NETWORK_SIZE`
- Args: `{ "organization_id": "ORG_ID" }`

## Analytics

### Organization Page Stats

- Tool: `LINKEDIN_GET_ORG_PAGE_STATS`
- Args: `{ "organization": "urn:li:organization:ORG_ID" }`

### Content Performance

- Tool: `LINKEDIN_GET_SHARE_STATS`
- Args: `{ "organizational_entity": "urn:li:organization:ORG_ID" }`

## LinkedIn Content Strategy

### What Works on LinkedIn
- **Personal stories** with professional lessons perform best
- **Carousel documents** (PDF uploads) get 3x more engagement
- **Polls** drive high engagement but low quality
- **Text-only posts** often outperform image posts
- Format with **line breaks** — wall of text kills engagement
- First line is critical — it's what shows before "...see more"

### Posting Formula
1. **Hook** (first line) — bold claim, question, or personal admission
2. **Line break** — creates visual breathing room
3. **Story/value** — 3-8 short paragraphs, one idea each
4. **Takeaway** — what should the reader do differently?
5. **CTA** — "Agree? ♻️ Repost to help your network"

### LinkedIn-Specific Tactics
- Post 1x per day, weekdays only (Tue-Thu best)
- Best times: 7-8am, 12pm, 5-6pm
- Reply to every comment within 1 hour (algorithm boost)
- Use 3-5 hashtags max
- Tag people only if relevant — don't spam-tag
- Engage on 10-15 posts before publishing yours (primes the algorithm)

### For SDRs
- Share industry insights, not sales pitches
- Comment thoughtfully on prospects' posts before reaching out
- Use LinkedIn posts to warm up cold outreach targets
- Share case studies and customer wins (with permission)

## Guidelines
1. Always use the exact use command format shown above
2. Get your person_id with LINKEDIN_GET_MY_INFO before posting
3. Author URN format: `urn:li:person:{person_id}`
4. Organization URN format: `urn:li:organization:{org_id}`
5. Posts max 3,000 characters
6. If you get a 400 "not connected" error, tell the user to connect LinkedIn in the Apps tab
7. Never expose credentials to the user
