---
name: Web Research
description: "Search the web for trending topics, competitor intel, and content ideas using Tavily AI search"
category: Research
roles:
  - x-manager
  - cmo
  - sdr
  - writer
  - social-manager
  - analyst
---

<!-- openlabor-connector: search, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Web Research

Search the web for trending topics, competitor intel, and content ideas using AI-powered search.

You have access to web search through the OpenLabor API.

## How to Search

Use the exec tool to run `use`. Credentials are loaded automatically from the workspace.

```
use search SEARCH '{"query":"your search query","max_results":"5"}'
```

### Search Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `query` | string | required | What to search for |
| `max_results` | string | "5" | Number of results (1-20) |
| `search_depth` | string | "basic" | "basic" (fast) or "advanced" (deeper, slower) |
| `include_answer` | string | "true" | Include AI-generated answer summary |

### Example Searches

```
# Find trending topics in a niche
use search SEARCH '{"query":"trending AI startup topics March 2026","max_results":"10"}'

# Competitor research
use search SEARCH '{"query":"[competitor name] latest product updates","max_results":"5"}'

# Find content ideas
use search SEARCH '{"query":"most shared tweets about remote work this week","max_results":"10"}'

# Industry news
use search SEARCH '{"query":"latest SaaS funding rounds 2026","search_depth":"advanced"}'
```

### Response Format

The search returns:
- `answer` — AI-generated summary answering your query
- `results` — Array of web results, each with:
  - `title` — Page title
  - `url` — Source URL
  - `content` — Extracted text content (not just a snippet)
  - `score` — Relevance score (0-1)

## Research Workflows

### Trending Topics (for X/social content)
1. Search for "[industry] trending topics this week"
2. Search for "viral tweets about [topic]"
3. Cross-reference what's getting engagement
4. Draft content angles based on findings

### Competitor Monitoring
1. Search for "[competitor] news" or "[competitor] product updates"
2. Search for "[competitor] customer reviews"
3. Summarize findings and identify opportunities

### Content Research
1. Search for the topic with `search_depth: "advanced"`
2. Extract key stats, quotes, and data points
3. Use findings to support content creation

### Market Research
1. Search for "[industry] market size 2026"
2. Search for "[industry] trends"
3. Search for "[industry] challenges"
4. Compile into a research brief

## Guidelines
- Use `search_depth: "basic"` for quick lookups, `"advanced"` for deep research
- Always cite sources when using search results in content
- Cross-reference multiple sources for important claims
- Search results contain extracted content — you don't need to visit the URLs
- Use specific, targeted queries for better results
