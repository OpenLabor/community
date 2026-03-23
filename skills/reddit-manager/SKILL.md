---
name: Reddit Manager
description: "Post, comment, search, and monitor subreddits for brand visibility and community engagement via Composio"
category: Social Media
roles:
  - cmo
  - social-manager
platforms:
  - reddit
---

<!-- openlabor-connector: reddit, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Reddit Manager

Post, comment, search, and monitor subreddits for brand visibility and community engagement.

You have access to Reddit through the OpenLabor connector API.

## How to Execute Reddit Actions

Use the exec tool to run `openlabor-exec`. Credentials are loaded automatically from the workspace.

```
openlabor-exec reddit <TOOL_NAME> '<json_args>'
```

## Publishing

### Create a Text Post

- Tool: `REDDIT_CREATE_REDDIT_POST`
- Args: `{ "title": "Post title", "subreddit": "subreddit_name", "text": "Post body text", "kind": "self" }`
- Title max 300 characters
- Optional: `"flair_id"` (UUID) to apply a flair

### Create a Link Post

- Tool: `REDDIT_CREATE_REDDIT_POST`
- Args: `{ "title": "Check this out", "subreddit": "subreddit_name", "url": "https://example.com", "kind": "link" }`

### Post a Comment

- Tool: `REDDIT_POST_REDDIT_COMMENT`
- Args: `{ "thing_id": "t3_POST_ID", "text": "Your comment here" }`
- Use `t3_` prefix for post replies, `t1_` prefix for comment replies

### Edit a Post or Comment

- Tool: `REDDIT_EDIT_REDDIT_COMMENT_OR_POST`
- Args: `{ "thing_id": "t3_POST_ID", "text": "Updated text" }`

### Delete a Post

- Tool: `REDDIT_DELETE_REDDIT_POST`
- Args: `{ "id": "t3_POST_ID" }`

### Delete a Comment

- Tool: `REDDIT_DELETE_REDDIT_COMMENT`
- Args: `{ "id": "t1_COMMENT_ID" }`

## Discovery & Search

### Search Reddit

- Tool: `REDDIT_SEARCH_ACROSS_SUBREDDITS`
- Args: `{ "search_query": "your search terms", "sort": "relevance", "limit": "25" }`
- Sort options: "relevance", "hot", "new", "top", "comments"

### Get Posts from a Subreddit

- Tool: `REDDIT_RETRIEVE_REDDIT_POST`
- Args: `{ "subreddit": "subreddit_name", "sort": "hot", "max_results": "25" }`
- Sort options: "hot", "new", "top", "rising", "controversial"

### Get Top Posts

- Tool: `REDDIT_GET_R_TOP`
- Args: `{ "subreddit": "subreddit_name", "t": "week", "limit": "25" }`
- Time filters: "hour", "day", "week", "month", "year", "all"

### Get Post Comments

- Tool: `REDDIT_RETRIEVE_POST_COMMENTS`
- Args: `{ "article": "POST_ID_WITHOUT_PREFIX" }`

### Search Subreddits

- Tool: `REDDIT_GET_SUBREDDITS_SEARCH`
- Args: `{ "q": "search term", "sort": "relevance", "limit": "10" }`

### Get Subreddit Rules

- Tool: `REDDIT_GET_SUBREDDIT_RULES`
- Args: `{ "subreddit": "subreddit_name" }`
- Always check rules before posting!

### Get Available Flairs

- Tool: `REDDIT_LIST_SUBREDDIT_POST_FLAIRS`
- Args: `{ "subreddit": "subreddit_name" }`

## User & Account

### Get User Info

- Tool: `REDDIT_GET_REDDIT_USER_ABOUT`
- Args: `{ "username": "me" }`
- Use "me" for authenticated user, or any username

## Reddit Strategy

### What Works on Reddit
- **Value-first** — Reddit hates self-promotion. Lead with value, not links.
- **Native content** — Text posts outperform link posts for engagement.
- **Community first** — Establish presence by commenting before posting.
- **Timing** — Best posting times: 6-9am EST (US peak), varies by subreddit.
- **AMA format** — Great for brand visibility when done authentically.

### Subreddit Research Workflow
1. Search for relevant subreddits with `REDDIT_GET_SUBREDDITS_SEARCH`
2. Check subreddit rules with `REDDIT_GET_SUBREDDIT_RULES`
3. Browse top posts to understand what works: `REDDIT_GET_R_TOP`
4. Engage in comments before posting your own content

### Content Guidelines for Brands
- **DO**: Share genuine insights, answer questions, contribute to discussions
- **DO**: Use Reddit-native language (not corporate speak)
- **DO**: Disclose affiliations when relevant
- **DON'T**: Drop links without context
- **DON'T**: Use marketing language or emojis excessively
- **DON'T**: Cross-post the same content to many subreddits
- **DON'T**: Ignore subreddit rules — instant removal or ban

### Monitoring & Engagement
- Search for brand mentions: `REDDIT_SEARCH_ACROSS_SUBREDDITS`
- Monitor competitor discussions
- Find questions in your niche to answer with expertise
- Track trending topics in relevant subreddits

## Guidelines
1. Always check subreddit rules before posting
2. Reddit culture is anti-marketing — be authentic and add value
3. If you get a 400 "not connected" error, tell the user to connect Reddit in the Apps tab
4. Never expose credentials to the user
5. Respect Reddit's content policy and subreddit-specific rules
