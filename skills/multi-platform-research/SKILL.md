---
name: Multi-Platform Research
description: "Free read & search access to 16+ platforms — Twitter, YouTube, Reddit, GitHub, web, RSS, and more — via Agent Reach"
category: Research
roles:
  - x-manager
  - cmo
  - sdr
  - writer
  - social-manager
  - analyst
  - lead-finder
  - cto
---

<!-- openlabor-connector: research, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Multi-Platform Research

Free read and search access to 16+ platforms via Agent Reach — Twitter/X, YouTube, Reddit, GitHub, web pages, RSS feeds, Weibo, and more. No API costs for most tools.

## How to Use

Use the exec tool to run `use`. Credentials are loaded automatically from the workspace.

```
use research <TOOL_NAME> '<json_args>'
```

---

## Available Tools

### Web Pages — Jina Reader (free, no auth)

- Tool: `JINA_READ`
- Args: `{ "url": "https://example.com/article" }`
- Use for: reading any web page as clean markdown — articles, docs, company pages

### Web Search — Exa (1 credit)

- Tool: `EXA_SEARCH`
- Args: `{ "query": "search terms", "count": 5 }`
- Use for: AI-native semantic search across the web

### Twitter/X — bird CLI (cookie auth)

- Tool: `BIRD_SEARCH`
- Args: `{ "query": "AI agents", "count": 10 }`
- Use for: searching tweets, monitoring mentions, competitor research

- Tool: `BIRD_READ`
- Args: `{ "url_or_id": "https://x.com/user/status/123" }`
- Use for: reading a specific tweet or thread

**Note:** These are READ-ONLY. For posting, liking, DMs, or threads use the X Strategy skill.

### YouTube — yt-dlp (free, no auth)

- Tool: `YTDLP_METADATA`
- Args: `{ "url": "https://youtube.com/watch?v=..." }`
- Use for: video title, description, view count, channel info

- Tool: `YTDLP_SEARCH`
- Args: `{ "query": "topic", "count": 10 }`
- Use for: finding videos by keyword

- Tool: `YTDLP_SUBTITLES`
- Args: `{ "url": "https://youtube.com/watch?v=..." }`
- Use for: pulling full transcript/subtitles from a video

### GitHub

- Tool: `GH_SEARCH_REPOS`
- Args: `{ "query": "AI agent framework" }`
- Use for: finding open-source projects, tracking repos

- Tool: `GH_SEARCH_ISSUES`
- Args: `{ "query": "bug label:help-wanted" }`
- Use for: finding issues across GitHub

### Reddit

- Tool: `REDDIT_READ`
- Args: `{ "url": "https://reddit.com/r/SUBREDDIT/top?t=week" }`
- Use for: reading subreddit posts, threads, search results as markdown

### RSS Feeds

- Tool: `RSS_READ`
- Args: `{ "url": "https://example.com/feed.xml" }`
- Use for: reading any RSS or Atom feed as structured markdown

### Weibo

- Tool: `WEIBO_TRENDING`
- Args: `{}`
- Use for: Chinese market trending topics

- Tool: `WEIBO_SEARCH`
- Args: `{ "query": "keyword" }`
- Use for: searching Weibo posts

---

## Research Workflows

### Competitive Intelligence

1. `use research BIRD_SEARCH '{"query":"[competitor]","count":20}'` — what the market says on X
2. `use research EXA_SEARCH '{"query":"[competitor] product updates","count":10}'` — recent news
3. `use research GH_SEARCH_REPOS '{"query":"[competitor]"}'` — open-source footprint
4. `use research REDDIT_READ '{"url":"https://reddit.com/r/SUBREDDIT/search?q=[competitor]&sort=top"}'` — user sentiment

### Content Research

1. `use research YTDLP_SEARCH '{"query":"[topic]","count":10}'` — find top YouTube videos
2. `use research YTDLP_SUBTITLES '{"url":"VIDEO_URL"}'` — pull transcripts
3. `use research EXA_SEARCH '{"query":"[topic] expert opinion","count":10}'` — web perspectives
4. `use research RSS_READ '{"url":"FEED_URL"}'` — ongoing RSS coverage

### Lead Research

1. `use research EXA_SEARCH '{"query":"[company] leadership team","count":5}'` — find decision-makers
2. `use research GH_SEARCH_REPOS '{"query":"[person or company]"}'` — GitHub activity
3. `use research JINA_READ '{"url":"https://company.com/about"}'` — read company website

### Trend Monitoring

1. `use research BIRD_SEARCH '{"query":"[topic]","count":25}'` — pulse check on X
2. `use research REDDIT_READ '{"url":"https://reddit.com/r/SUBREDDIT/top?t=week"}'` — Reddit top posts
3. `use research WEIBO_TRENDING '{}'` — Chinese market trends
4. `use research EXA_SEARCH '{"query":"[topic] trend 2026","count":10}'` — broader web signal

### Deep-Dive on a URL

Read any page, article, doc, or thread:

```
use research JINA_READ '{"url":"https://full-url-here.com/path"}'
```

---

## Guidelines

- These are READ-ONLY tools. For posting or writing to any platform, use the platform-specific skill (X Strategy, LinkedIn Manager, etc.).
- `JINA_READ` is the universal fallback — works on any URL.
- All tools are 0 credits except `EXA_SEARCH` (1 credit per query).
- For Chinese platform results (Weibo), translate as needed.
- Always attribute sources when using research findings in published content.
