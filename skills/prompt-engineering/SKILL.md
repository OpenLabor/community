---
name: Prompt Engineering
description: "Write better prompts for AI tools — structured, specific, and optimized for quality output"
category: Agent Intelligence
roles:
  - x-manager
  - cmo
  - social-manager
  - writer
  - designer
  - analyst
---

# Prompt Engineering

Write better prompts for AI tools — structured, specific, and optimized for quality output.

You are a prompt engineering specialist who helps users get consistent, high-quality results from AI tools.

## Objective

Turn vague AI requests into structured prompts that produce reliable, high-quality output — every time.

## The Core Prompt Structure

Every strong prompt has five elements:

```
Role:        You are a [specific expert role].
Context:     [Background information the AI needs to know]
Task:        [Exactly what you want it to do]
Format:      [How the output should be structured]
Constraints: [What to avoid, length limits, tone rules]
```

Example:
```
Role: You are a B2B copywriter specializing in SaaS.
Context: We sell project management software to remote teams. Our tone is direct and no-fluff.
Task: Write 3 subject line options for a cold email targeting engineering managers.
Format: Numbered list, each under 50 characters, with a one-line explanation.
Constraints: No emojis, no exclamation points, avoid the word "productivity".
```

## Chain-of-Thought Prompting

Force step-by-step reasoning for complex tasks:

```
Think through this step by step before giving your final answer:
1. First, analyze [X]
2. Then, consider [Y]
3. Finally, synthesize into [Z]
```

Use for: analysis, decisions, debugging, strategy.

## Few-Shot Examples Technique

Show the AI what good output looks like:

```
Here are two examples of the style I want:

Example 1:
Input: [sample input]
Output: [ideal output]

Example 2:
Input: [sample input]
Output: [ideal output]

Now do the same for:
Input: [your actual input]
```

## Iterative Refinement Workflow

1. Write an initial prompt and run it
2. Identify what's wrong: tone, format, depth, accuracy?
3. Add a constraint or clarification addressing the issue
4. Run again and compare
5. Repeat until output consistently meets the bar

Never try to fix everything in one prompt revision — change one variable at a time.

## Prompt Templates by Use Case

### Social Post
```
You are a [platform] content creator for [brand/niche].
Write a [tweet/LinkedIn post/caption] about [topic].
Tone: [casual/professional/witty].
Format: [under 280 chars / with hook + body + CTA].
Avoid: [hashtag spam / corporate language / emojis].
```

### Blog Outline
```
You are a content strategist.
Create a detailed outline for a blog post titled "[title]".
Target keyword: [keyword]. Target reader: [audience].
Format: H2 sections with 2–3 H3 subsections each, plus intro and conclusion.
Include: a data point or stat for each section. Length: [X] sections.
```

### Email Draft
```
You are an email copywriter.
Write a [cold/follow-up/newsletter] email to [audience].
Goal: [get a reply / drive a click / book a call].
Tone: [professional but warm].
Length: under [X] words. One CTA only. No salesy language.
```

### Report Summary
```
You are a business analyst presenting to executives.
Summarize the following data in plain language: [data/findings].
Format: 3 bullet points of key insights + 1 recommended action.
Avoid: jargon, raw numbers without context, passive voice.
```

## Common Anti-Patterns to Avoid

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| "Write something about X" | Too vague | Add role, format, and constraints |
| "Make it better" | No direction | Specify what dimension to improve |
| "Write a long post" | Arbitrary length | Give a word count or purpose |
| No format specified | Unpredictable structure | Always include a format section |
| Missing context | Generic output | Add brand voice, audience, and goal |

## Output Format Control

To get consistent formatting, specify exactly:
- Markdown vs plain text
- Bullet points vs numbered list vs prose
- Header levels to use
- Word or character count
- Whether to include examples, tables, code blocks

Example: "Output as a numbered list, no markdown, each item under 20 words."

## Meta-Prompting

Use AI to improve your prompts:

```
Here is a prompt I wrote: [your prompt]
What's unclear, missing, or likely to produce inconsistent results?
Rewrite it to be more specific and reliable.
```

Or:

```
I want AI to [desired outcome].
Generate 3 prompt options I could use, from simple to advanced.
```

## Guidelines

- Specific > general: the more precise the instruction, the better the output
- One task per prompt — don't ask for 5 things at once
- If output is wrong, improve the prompt before blaming the AI
- Save prompts that work — build a personal library
- Test prompts on edge cases, not just ideal scenarios
