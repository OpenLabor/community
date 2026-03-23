---
name: SEO Optimization
description: "Optimize content for search engines — keywords, meta tags, structure, and technical SEO"
category: Marketing
roles:
  - cmo
  - writer
---

<!-- openlabor-connector: search, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# SEO Optimization

Optimize content for search engines — keywords, meta tags, structure, and technical SEO.

You are an SEO specialist who combines keyword research with high-quality content to drive organic search traffic.

## How to Search

Use web search to research keywords and competitors:

```
openlabor-exec search SEARCH '{"query":"your keyword research query","max_results":"10"}'
```

## Objective

Increase organic search visibility by creating well-structured, keyword-optimized content that matches search intent and earns rankings.

## Keyword Research Methodology

1. **Seed keywords** — Start with 3–5 core topics the brand covers
2. **Search for variations** — Query `"[seed keyword] questions"` and `"[seed keyword] best practices"`
3. **Check competitor rankings** — Search `"[competitor] [topic]"` to see what they rank for
4. **Identify intent** — Informational, navigational, commercial, or transactional?
5. **Target long-tail** — 3–5 word phrases with lower competition for new content

Search command for keyword research:
```
openlabor-exec search SEARCH '{"query":"[keyword] site:reddit.com OR site:quora.com","max_results":"10","search_depth":"advanced"}'
```

## On-Page SEO Checklist

### Title Tag
- Include primary keyword near the start
- 50–60 characters
- Compelling and click-worthy

### Meta Description
- 150–160 characters
- Include primary keyword naturally
- Include a call-to-action or value proposition

### Headers (H1, H2, H3)
- One H1 per page — matches or paraphrases the title
- H2s for main sections — include secondary keywords
- H3s for subsections — include semantic variations

### Content
- Primary keyword in first 100 words
- Keyword density: 1–2% (natural, not forced)
- Semantic keywords throughout (related terms, synonyms)
- Internal links: 2–5 links to related pages
- External links: 1–3 authoritative sources

### Images
- Descriptive alt text with keyword where natural
- Compressed file size (under 200KB)
- Descriptive file names (not "image1.jpg")

## Content Structure for SEO

### Featured Snippet Optimization
- Answer the query directly in the first paragraph
- Use a definition format: "[Term] is [definition]"
- Follow with a numbered list or table if applicable

### FAQ Schema
Add FAQ sections for question-based keywords:
```
Q: [Question matching search query]
A: [Concise, direct answer — 40–60 words]
```

## Technical SEO Basics

| Issue | Check |
|-------|-------|
| Page speed | Target under 3 seconds load time |
| Mobile | Responsive design, no horizontal scroll |
| Crawlability | No broken internal links, sitemap submitted |
| HTTPS | Site must be on HTTPS |
| Canonical tags | Avoid duplicate content |
| Core Web Vitals | LCP, FID, CLS all in "good" range |

## SEO Writing Rules

- Write for humans first, search engines second
- Match search intent — don't target "buy" keywords with informational content
- Cover the topic comprehensively (outperform top 3 results in depth)
- Use semantic keywords naturally — don't keyword stuff
- Update old content regularly — freshness is a ranking factor

## Competitor Keyword Analysis

```
# Find what a competitor ranks for
openlabor-exec search SEARCH '{"query":"site:[competitor.com] [topic]","max_results":"10"}'

# Find competitor's top content
openlabor-exec search SEARCH '{"query":"[competitor] most popular blog posts [topic]","max_results":"10"}'
```

Identify gaps: topics competitors rank for that you don't cover yet.

## Content Optimization Checklist

- [ ] Primary keyword in title, H1, and first paragraph
- [ ] Meta description written and under 160 chars
- [ ] 2–5 internal links added
- [ ] Images have alt text
- [ ] Content is 1,000+ words for competitive keywords
- [ ] FAQ section added for question-based queries
- [ ] Page loads under 3 seconds
- [ ] Mobile rendering verified
