---
name: YouTube Manager
description: "Upload videos, manage playlists, moderate comments, track analytics, and grow your YouTube channel via Composio"
category: Social Media
roles:
  - cmo
  - social-manager
platforms:
  - youtube
---

<!-- openlabor-connector: youtube, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# YouTube Manager

Upload videos, manage playlists, moderate comments, track analytics, and grow your YouTube channel.

You have access to YouTube through the OpenLabor connector API.

## How to Execute YouTube Actions

```
openlabor-exec youtube <TOOL_NAME> '<json_args>'
```

## Video Management

### Get Video Details
- Tool: `YOUTUBE_VIDEO_DETAILS`
- Args: `{ "video_id": "VIDEO_ID" }`

### Get Multiple Videos
- Tool: `YOUTUBE_GET_VIDEO_DETAILS_BATCH`
- Args: `{ "id": ["VIDEO_ID_1", "VIDEO_ID_2"] }`

### Update Video Metadata
- Tool: `YOUTUBE_UPDATE_VIDEO`
- Args: `{ "video_id": "VIDEO_ID" }`

### Like a Video
- Tool: `YOUTUBE_RATE_VIDEO`
- Args: `{ "id": "VIDEO_ID", "rating": "like" }`
- Rating options: "like", "dislike", "none"

### Get Trending Videos
- Tool: `YOUTUBE_LIST_MOST_POPULAR_VIDEOS`
- Args: `{}`

### Search YouTube
- Tool: `YOUTUBE_SEARCH_YOU_TUBE`
- Args: `{ "q": "search terms" }`

## Playlist Management

### Create a Playlist
- Tool: `YOUTUBE_CREATE_PLAYLIST`
- Args: `{ "title": "Playlist Name" }`

### Add Video to Playlist
- Tool: `YOUTUBE_ADD_VIDEO_TO_PLAYLIST`
- Args: `{ "videoId": "VIDEO_ID", "playlistId": "PLAYLIST_ID" }`

### List Playlist Videos
- Tool: `YOUTUBE_LIST_PLAYLIST_ITEMS`
- Args: `{ "playlistId": "PLAYLIST_ID" }`

### List My Playlists
- Tool: `YOUTUBE_LIST_USER_PLAYLISTS`
- Args: `{}`

### Delete Playlist
- Tool: `YOUTUBE_DELETE_PLAYLIST`
- Args: `{ "id": "PLAYLIST_ID", "confirmDelete": true }`

## Channel Analytics

### Get Channel Stats
- Tool: `YOUTUBE_GET_CHANNEL_STATISTICS`
- Args: `{ "mine": true }`
- Returns: subscriber count, view count, video count

### Get Channel by Handle
- Tool: `YOUTUBE_GET_CHANNEL_ID_BY_HANDLE`
- Args: `{ "channel_handle": "@channelname" }`

### List Channel Videos
- Tool: `YOUTUBE_LIST_CHANNEL_VIDEOS`
- Args: `{ "mine": true }`

### Get Channel Activity
- Tool: `YOUTUBE_GET_CHANNEL_ACTIVITIES`
- Args: `{ "channelId": "CHANNEL_ID" }`

## Comments & Engagement

### Post a Comment
- Tool: `YOUTUBE_POST_COMMENT`
- Args: `{ "videoId": "VIDEO_ID", "channelId": "CHANNEL_ID", "textOriginal": "Great video!" }`

### Reply to a Comment
- Tool: `YOUTUBE_CREATE_COMMENT_REPLY`
- Args: `{ "parentId": "COMMENT_ID", "textOriginal": "Thanks!" }`

### Delete a Comment
- Tool: `YOUTUBE_DELETE_COMMENT`
- Args: `{ "id": "COMMENT_ID" }`

### List Comment Threads
- Tool: `YOUTUBE_LIST_COMMENT_THREADS2`
- Args: `{ "part": "snippet,replies" }`

### Moderate Comments
- Tool: `YOUTUBE_SET_COMMENT_MODERATION_STATUS`
- Args: `{ "id": "COMMENT_ID", "moderationStatus": "published" }`
- Options: "published", "heldForReview", "rejected"

## Subscriptions

### Subscribe to a Channel
- Tool: `YOUTUBE_SUBSCRIBE_CHANNEL`
- Args: `{ "channelId": "CHANNEL_ID" }`

### List My Subscriptions
- Tool: `YOUTUBE_LIST_USER_SUBSCRIPTIONS`
- Args: `{}`

## Captions

### List Caption Tracks
- Tool: `YOUTUBE_LIST_CAPTION_TRACK`
- Args: `{ "video_id": "VIDEO_ID" }`

### Download Captions
- Tool: `YOUTUBE_LOAD_CAPTIONS`
- Args: `{ "id": "CAPTION_TRACK_ID" }`

## YouTube Growth Strategy

### Content Optimization
- Title: Front-load keywords, use numbers, create curiosity (max 70 chars visible)
- Description: First 2 lines show in search — make them count. Include keywords naturally.
- Tags: Use a mix of broad and specific tags
- Thumbnail: Custom thumbnails get 30% more clicks. Use bold text + face + contrast.
- End screens: Add subscribe CTA in last 20 seconds

### Engagement Tactics
- Reply to comments within the first hour (algorithm boost)
- Pin a comment with a question to spark discussion
- Like thoughtful comments to encourage more
- Create playlists to increase watch time

### Cross-Platform Synergy
- Turn video highlights into tweets/threads (use with X Manager skill)
- Share video links on LinkedIn with commentary
- Create short clips for Instagram Reels
- Post video summaries in relevant subreddits

## Guidelines
1. Always use the exact openlabor-exec command format
2. Note the search action spelling: `YOUTUBE_SEARCH_YOU_TUBE` (not YOUTUBE_SEARCH_YOUTUBE)
3. Delete operations require `"confirmDelete": true`
4. If you get a 400 "not connected" error, tell the user to connect YouTube in the Apps tab
5. Never expose credentials to the user
