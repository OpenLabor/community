---
name: Instagram Manager
description: "Publish posts, reels, carousels, manage comments, DMs, and track analytics on Instagram via Composio"
category: Social Media
roles:
  - social-manager
  - cmo
platforms:
  - instagram
---

<!-- openlabor-connector: instagram, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Instagram Manager

Publish posts, reels, carousels, manage comments, DMs, and track analytics on Instagram.

You have access to Instagram through the OpenLabor connector API.

## How to Execute Instagram Actions

Use the exec tool to run `openlabor-exec`. Credentials are loaded automatically from the workspace.

```
openlabor-exec instagram <TOOL_NAME> '<json_args>'
```

## Publishing (Two-Step Flow)

Instagram publishing requires two steps: create a media container, then publish it.

### Step 1: Create Media Container

- Tool: `INSTAGRAM_POST_IG_USER_MEDIA`
- Args: `{ "ig_user_id": "USER_ID", "caption": "Your caption here", "image_url": "https://..." }`
- For reels: add `"media_type": "REELS", "video_url": "https://..."`
- For carousel items: add `"media_type": "CAROUSEL"`
- Optional: `"user_tags"`, `"collaborators"` (max 3), `"location_id"`, `"cover_url"`

### Step 2: Publish

- Tool: `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH`
- Args: `{ "ig_user_id": "USER_ID", "creation_id": "CONTAINER_ID_FROM_STEP_1" }`

### Carousel Posts

- Tool: `INSTAGRAM_CREATE_CAROUSEL_CONTAINER`
- Args: `{ "ig_user_id": "USER_ID", "caption": "Caption", "child_image_urls": ["url1", "url2", "url3"] }`
- Then publish with `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH`

### Check Publishing Quota

- Tool: `INSTAGRAM_GET_IG_USER_CONTENT_PUBLISHING_LIMIT`
- Args: `{}`

## Media & Content

### Get User's Media

- Tool: `INSTAGRAM_GET_IG_USER_MEDIA`
- Args: `{ "ig_user_id": "USER_ID", "limit": "25" }`

### Get Specific Post Details

- Tool: `INSTAGRAM_GET_IG_MEDIA`
- Args: `{ "ig_media_id": "MEDIA_ID" }`

### Get Carousel Children

- Tool: `INSTAGRAM_GET_IG_MEDIA_CHILDREN`
- Args: `{ "ig_media_id": "MEDIA_ID" }`

### Get Stories

- Tool: `INSTAGRAM_GET_IG_USER_STORIES`
- Args: `{}`

### Get Tagged Media

- Tool: `INSTAGRAM_GET_IG_USER_TAGS`
- Args: `{}`

## Comments & Engagement

### Get Comments on a Post

- Tool: `INSTAGRAM_GET_IG_MEDIA_COMMENTS`
- Args: `{ "ig_media_id": "MEDIA_ID" }`

### Post a Comment

- Tool: `INSTAGRAM_POST_IG_MEDIA_COMMENTS`
- Args: `{ "ig_media_id": "MEDIA_ID", "message": "Great post!" }`
- Max 300 characters

### Reply to a Comment

- Tool: `INSTAGRAM_POST_IG_COMMENT_REPLIES`
- Args: `{ "ig_comment_id": "COMMENT_ID", "message": "Thanks!" }`

### Get Comment Replies

- Tool: `INSTAGRAM_GET_IG_COMMENT_REPLIES`
- Args: `{ "ig_comment_id": "COMMENT_ID" }`

### Delete a Comment

- Tool: `INSTAGRAM_DELETE_COMMENT`
- Args: `{ "ig_comment_id": "COMMENT_ID" }`

### Reply to a Mention

- Tool: `INSTAGRAM_POST_IG_USER_MENTIONS`
- Args: `{ "ig_user_id": "USER_ID", "ig_media_id": "MENTION_MEDIA_ID", "message": "Thanks for the mention!" }`

## Direct Messages

### Send a Text DM

- Tool: `INSTAGRAM_SEND_TEXT_MESSAGE`
- Args: `{ "recipient_id": "IGSID", "text": "Hello!" }`

### Send an Image DM

- Tool: `INSTAGRAM_SEND_IMAGE`
- Args: `{ "recipient_id": "IGSID", "image_url": "https://..." }`

### List Conversations

- Tool: `INSTAGRAM_LIST_ALL_CONVERSATIONS`
- Args: `{ "limit": "25" }`

### List Messages in Thread

- Tool: `INSTAGRAM_LIST_ALL_MESSAGES`
- Args: `{ "conversation_id": "CONV_ID", "limit": "25" }`

### Mark DMs as Read

- Tool: `INSTAGRAM_MARK_SEEN`
- Args: `{ "recipient_id": "PSID" }`

## Analytics & Insights

### Account Insights

- Tool: `INSTAGRAM_GET_USER_INSIGHTS`
- Args: `{ "metric": ["impressions", "reach", "accounts_engaged"], "period": "day" }`
- Periods: "day", "week", "days_28"

### Post Insights

- Tool: `INSTAGRAM_GET_IG_MEDIA_INSIGHTS`
- Args: `{ "ig_media_id": "MEDIA_ID", "metric": ["impressions", "reach", "engagement", "saved"] }`

### User Profile Info

- Tool: `INSTAGRAM_GET_USER_INFO`
- Args: `{}`

## Content Strategy

### Posting Best Practices
- Post 1-2 times per day for feed posts
- Use 3-5 relevant hashtags (don't overdo it)
- Carousel posts get 1.4x more reach than single images
- Reels get 2x more reach than static posts
- Post during peak hours: 11am-1pm, 7pm-9pm
- Use a strong first slide/thumbnail — it determines if people swipe

### Caption Formula
1. Hook (first line — visible before "more")
2. Value/story (the body)
3. CTA ("Save this for later", "Share with a friend", "Drop a comment")
4. Hashtags (3-5, relevant, mix of sizes)

## Guidelines
1. Always use the exact openlabor-exec command format shown above
2. Images must be publicly accessible URLs (not local files)
3. Videos for Reels must be 3-90 seconds, MP4, H.264
4. Captions max 2,200 characters
5. If you get a 400 "not connected" error, tell the user to connect Instagram in the Apps tab
6. Never expose credentials to the user
7. Requires Instagram Business or Creator account
