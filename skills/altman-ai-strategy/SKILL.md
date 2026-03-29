---
name: Sam Altman - AI Strategy
description: "Sam Altman's AI-first thinking: rebuilding companies around AI, identifying what AI can do 80% of, AI integration roadmap, when to build vs use existing AI tools, and AI-native product design — from Altman's blog, OpenAI writings, and public talks (2022-2024)"
category: Strategy
roles:
  - ceo
  - cto
  - strategist
---

# Sam Altman - AI Strategy

Use these frameworks when evaluating AI tools, recommending AI integration, designing AI-native products, or advising on build-vs-use decisions. Apply the 80/20 audit to identify automation opportunities. Use the integration roadmap to sequence AI adoption. Apply the competitive advantage analysis to distinguish durable AI moats from commodity features.

**Routes when user asks about:** AI strategy, rebuilding with AI, AI integration, AI-native products, when to build vs buy AI, AI automation, AI product design, how to think about AI for my business, AI roadmap, what AI can do, AGI implications, AI competitive advantage

---

## How to Use This Skill

When advising on AI strategy, evaluating AI tools, or recommending integration approaches, apply the relevant framework below. Start with the Two Failure Modes assessment, then use the 80/20 audit to identify opportunities, and the build-vs-use matrix for implementation decisions.

---

## The Two Failure Modes

"Every company will need to be rebuilt around AI. This is not about adding AI to what you do — it's about rethinking what you do." — Altman, 2023

**Failure Mode 1 — Ignoring AI entirely:**
- Treating AI as hype that will pass
- Competitors who integrate AI execute faster, cheaper, at better quality
- Timeline to competitive disadvantage: 2-5 years

**Failure Mode 2 — Adding AI cosmetically:**
- Slapping GPT onto existing workflows without rethinking the workflow
- "We added an AI chatbot" without changing how the product works
- Result: marginal gains, no moat, high costs for low value

**The right approach**: Rebuild core processes from scratch, assuming AI capability.

**The Rebuild Question** (apply to every significant workflow):
"If we were building this from scratch today, knowing AI can do X, Y, Z — would we design it the same way?" If no: redesign it.

---

## The 80% Identification Framework

"AI can do 80% of most knowledge work tasks. Your job is to figure out which 80%, and what to do with the remaining 20%." — Altman

### What AI Does Well (the 80%)

**Information processing:** Summarizing, extracting structured data from unstructured sources, translating between formats, research synthesis across multiple sources.

**Generation:** First drafts of any written content, brainstorming variations, creating templates/frameworks/checklists, generating options for human review.

**Analysis:** Pattern recognition in data, categorization/tagging, anomaly detection, comparative analysis on defined criteria.

**Communication:** Drafting responses in a trained voice, adapting messaging for different audiences, translating technical content for non-technical audiences.

### What Humans Do Better (the 20%)

**Judgment in novel situations**: AI is pattern-matching on training data. Genuinely new situations require human judgment.

**High-stakes relationship decisions**: Hiring a key executive, ending a major partnership, handling a sensitive crisis.

**Strategic direction**: "What should we be building?" requires values, context, and judgment AI doesn't have.

**Accountability**: AI cannot be accountable to a customer, board, or regulator.

**Creative direction**: AI generates variations; humans decide which direction matters.

### The 80/20 Audit Template

For each role and function, map AI vs. human ownership:

| Task | Current Time | AI Can Do? | Human Required For? |
|------|-------------|-----------|---------------------|
| Writing first-draft proposals | 4h/week | Yes (80%) | Review and customize (20%) |
| Research competitive landscape | 3h/week | Yes (90%) | Strategic framing (10%) |
| Responding to support tickets | 8h/week | Yes (70%) | Edge cases and escalations (30%) |
| Code review | 5h/week | Partially (50%) | Architecture judgment (50%) |
| Hiring decisions | 4h/week | Screening (60%) | Final judgment (40%) |

Most knowledge worker roles have 50-80% of tasks partially or fully automatable. The human's job shifts to reviewing, directing, and handling exceptions.

---

## AI Integration Roadmap

### Phase 1: Individual Productivity (Month 1-3)
**Goal**: Every knowledge worker saves 1+ hours per day.

Actions:
- [ ] Deploy AI tools (Claude, GPT-4, Gemini) as standard for all knowledge workers
- [ ] Run 4-hour workshop: "What can AI do for your specific job?"
- [ ] Identify 3-5 tasks per person where AI saves the most time
- [ ] Build shared prompt library for common use cases
- [ ] Track time savings weekly; share best practices

Metric: Average time saved per person per day (target: 1+ hour)

### Phase 2: Workflow Redesign (Month 3-6)
**Goal**: Redesign core workflows assuming AI capabilities.

For each core workflow:
1. Map current workflow step by step
2. For each step: can AI do this better, faster, or cheaper?
3. Redesign with AI handling appropriate steps
4. Build human checkpoints where judgment required
5. Pilot with one team before rollout

Priority workflows: content creation, customer support, sales proposals, code review/docs, reporting/analysis, recruiting screening.

Metric: Cycle time reduction for key workflows; cost per output.

### Phase 3: AI-Native Product Features (Month 4-9)
**Goal**: Build AI directly into the product.

Feature identification:
1. Interview top 20 users: "Most tedious/time-consuming thing you do in [product]?"
2. Map pain points against AI capabilities
3. Prioritize by: time saved x frequency x willingness to pay
4. Build highest-priority AI feature, measure adoption/retention impact

Feature types:
- **Automation**: AI completes a task the user did manually
- **Acceleration**: AI provides a starting point the user refines
- **Insight**: AI surfaces patterns in user's data they wouldn't see
- **Prediction**: AI predicts what the user needs next

### Phase 4: AI-Native Business Model (Month 6-18)
**Goal**: Compete at the business model level.

Questions to answer:
- Can AI serve customers at 10x lower cost than competitors?
- Can AI enable serving segments that were previously unprofitable?
- Can AI produce quality impossible without AI?
- Can AI create a data flywheel that compounds over time?

---

## Build vs. Use Decision Matrix

"Most companies should use AI, not build AI models." — Altman

| Scenario | Decision | Reasoning |
|----------|----------|-----------|
| Need GPT-4-quality model | Use (API) | Building costs $100M+; using costs cents/call |
| Need fine-tuned model on proprietary data | Build (fine-tune) | Your data creates differentiation |
| Need AI infrastructure (compute, scaling) | Use (cloud) | Not your core competency |
| Need domain-specific AI feature | Build (fine-tune or RAG) | Domain performance requires your data |
| Need general AI writing assistant | Use (Anthropic/OpenAI) | Commodity capability |

### When to Build
1. Proprietary data creates meaningful performance advantage
2. Use case too specific for general models
3. Data privacy requires data stays on your infrastructure
4. API costs at scale exceed self-hosting costs
5. Latency requirements can't be met by external APIs

### The AI Infrastructure Stack

For most non-AI companies:

| Layer | Decision | Tools |
|-------|----------|-------|
| Foundation models | Use | OpenAI, Anthropic, Google |
| Model fine-tuning | Build when needed | OpenAI fine-tuning, Hugging Face |
| Application layer | Build | Your core product |
| Orchestration | Use or Build | LangChain, LlamaIndex, or custom |
| Vector database | Use | Pinecone, Weaviate, Chroma |
| Compute | Use | AWS, GCP, Azure |

---

## AI-Native Product Design Principles

### Principle 1: AI as Collaborator, Not Tool
Old model: user inputs → tool processes → output.
AI-native: user inputs → AI drafts → user refines → AI learns.

Less form-filling, more conversation. Less clicking menus, more describing what you want. Less rigid workflows, more adaptive paths.

### Principle 2: Progressive Disclosure of AI
Build trust progression:
1. **Suggest mode**: AI suggests, user explicitly approves
2. **Review mode**: AI acts, user can review and override
3. **Autopilot mode**: AI acts, user notified of significant decisions
4. **Full automation**: AI acts independently within defined boundaries

Build all four; let users choose comfort level. Users who start in suggest mode migrate to higher automation over time.

### Principle 3: The AI Flywheel (Data Compounding)
```
User uses product → Usage generates data → Data improves AI
→ Better AI = better product → Better product = more users
→ More users = more data (loop)
```

Design to capture training-relevant data from every interaction. Define what "good" looks like and capture quality signals.

### Principle 4: Shift from SaaS to Outcome-as-a-Service
**SaaS**: "Here's software to help you do X."
**AI-native**: "We will do X for you. You review and direct."

Price on outcomes, not seats. Examples emerging:
- "We write 20 SEO articles per month" (not "here's our content tool")
- "We handle all Tier 1 support" (not "here's our support platform")
- "We generate qualified leads" (not "here's our outreach tool")

---

## AI Competitive Advantage Analysis

Not all AI integrations create competitive advantage. Score each initiative:

| AI Application | Proprietary Advantage | Replicability | Durability |
|---------------|----------------------|---------------|------------|
| Using GPT-4 API for content | None | High | None |
| Fine-tuned model on user data | Medium | Medium | Medium |
| AI trained on proprietary data flywheel | High | Low | High |
| AI-enabled 10x cost advantage | High | Medium | Medium-High |
| AI-native UX requiring years of product work | High | Low | High |

**Rule**: AI applications competitors can replicate in 3 months provide no durable advantage. Invest where replication takes years.

### The Data Moat Question
"Who has the most relevant data for training AI models in your market?"

If your company generates data that is unique, large, and labeled with quality signals → you have a potential data moat. Invest heavily in leveraging it.

---

## Sources
- Sam Altman blog: blog.samaltman.com (2022-2024)
- "Intelligence Age" — Sam Altman (September 2024)
- OpenAI preparedness framework and safety writings
- Altman interviews: Lex Fridman Podcast #419, Bloomberg Technology
- OpenAI DevDay keynotes 2023-2024
