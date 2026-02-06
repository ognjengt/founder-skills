---
name: go-to-market-plan
version: v1.0.0
description: Analyzes the founder's business context to deliver 3 best go-to-market strategies tailored to their current stage, product, and market. Asks up to 10 diagnostic questions when needed to understand product readiness, target market clarity, competitive positioning, and distribution channels. Use when user needs go-to-market strategy, launch planning, market entry strategy, or actionable GTM roadmap.
---

# Go-to-Market Plan

## Purpose
Analyze the founder's business and current stage to deliver 3 specific, actionable go-to-market strategies that will drive measurable market penetration and customer acquisition.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"go-to-market-plan loaded, proceed with details about your product, target market, or current launch situation"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. Read Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and extract: company name, industry, target audience, value proposition, products/services, business stage, competitors, pricing model, unique advantages.
- **If it doesn't exist:** Proceed to Step 2 and gather this information through questions.

### 2. Diagnose GTM Readiness
Evaluate whether you have enough information to produce high-confidence, actionable go-to-market strategies:

**Required information to proceed without questions:**
- What problem the product solves (core value proposition)
- Who the ideal customer is (specific ICP, not "small businesses" or "everyone")
- Product readiness stage (MVP, beta, ready to scale, etc.)
- Competitive landscape (who else solves this, how you're different)
- Distribution model (direct, channel partners, marketplace, etc.)
- Pricing strategy (freemium, paid, enterprise, etc.)
- Current market position (pre-launch, launched but struggling, ready to scale)
- Available resources (team, budget, runway)

**If you have enough context:** Proceed directly to Step 4.

**If critical information is missing:** Proceed to Step 3.

### 3. Ask Diagnostic Questions (When Needed)
Use the AskUserQuestion tool to gather missing information. Ask between 3-10 questions based on what's needed:

**Core GTM questions:**
- What stage is your product at right now? (Idea, MVP, beta, launched, scaling)
- Who is your ideal first customer? (Be specific: role, company size, industry, pain point)
- What's the core problem your product solves? How do people solve it today?
- How do customers currently discover solutions like yours?
- What's your biggest struggle with go-to-market right now?
- What have you already tried for customer acquisition? What worked? What didn't?
- What resources do you have available? (Budget, team, timeline, network)

**Context-specific questions:**
- For pre-launch: "Have you validated product-market fit? How many people have you talked to?"
- For launched but struggling: "Where are you getting customers today? What's your current CAC vs. LTV?"
- For scaling: "What channels are working? What's your constraint to 10x growth?"
- For competitive positioning: "Who are your top 3 competitors? Why would someone choose you over them?"
- For pricing clarity: "Have you tested pricing? What signals indicate customers will pay this amount?"

**IMPORTANT:** Only ask questions for information you truly need. Don't ask for information you can infer from FOUNDER_CONTEXT.md or the user's initial message.

### 4. Analyze Market Entry Strategy
Based on the context gathered, analyze:

1. **Product-Market Fit Status:** Do they have it? How do you know?
2. **Market Entry Point:** Where is the wedge? (Specific segment, use case, or channel)
3. **Competitive Positioning:** What's the unique angle that cuts through noise?
4. **Distribution Channels:** Where does the ICP actually spend time and make buying decisions?
5. **Go-to-Market Motion:** Product-led, sales-led, community-led, or hybrid?
6. **Market Timing:** Why now? What's changed in the market or technology?

**Critical analysis principles:**
- **Start narrow, expand later:** Best GTM starts with a tight, underserved segment
- **Channel-product fit matters more than product-market fit early on:** Great product in wrong channel = no traction
- **Identify unfair advantages:** Network, expertise, distribution, brand, technology
- **Find the "bowling pin" strategy:** Which customer segment unlocks adjacent segments?
- **Validate before scaling:** Don't build GTM for hypothetical customers

### 5. Generate 3 Go-to-Market Strategies
Create exactly 3 GTM strategies, ranked by fit and impact:

**Selection criteria:**
- **Specificity:** Is this concrete enough to execute this week?
- **Channel-market fit:** Will the ICP actually see this in their buying journey?
- **Differentiation:** Does this position you uniquely vs. competitors?
- **Scalability:** Can this grow beyond the first 10 customers?
- **Resource fit:** Can they execute with current team/budget/capabilities?
- **Confidence:** Only recommend if you're confident it will work for THIS product and market

**For each strategy, write:**

**Part A — The Strategy (What & Why)**
- One-line strategy name
- 2-3 sentences explaining WHAT the GTM approach is and WHY it fits this product/market
- Reference the specific market wedge, competitive angle, or channel advantage it leverages

**Part B — The Exact Playbook (How)**
- Step-by-step execution plan with specific actions
- Use their actual product name, ICP details, and market specifics
- Include concrete details: which channels, which messaging, which segments, which metrics to track
- Specify timeline and expected milestones

**Part C — First Action (Do This Today)**
- One specific task they can complete in the next 30-60 minutes
- Concrete enough that there's no ambiguity about what to do

### 6. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Zero generic GTM advice. Every strategy must be specific to THIS product and market.
- Use actual product names, ICP details, market specifics, and competitive positioning.
- Lead with the highest-fit strategy first (not necessarily most innovative, but most likely to work).
- Every strategy must include a concrete playbook, not just a concept.
- Specify metrics to track for each strategy.
- No motivational fluff. Only actionable GTM strategy.
- Active voice only.
- Strategies must be executable within their resource constraints.

### Specificity Rules
- **BAD:** "Use content marketing"
- **GOOD:** "Write 1 deep-dive case study per week showing how [Product] helped [Specific ICP] solve [Specific Problem]. Post on LinkedIn targeting [Job Titles]. Include ROI metrics. Repurpose into email sequence for outbound. Goal: 500 views/post, 20 inbound leads/month."

- **BAD:** "Build a community"
- **GOOD:** "Launch a private Slack community for [Specific ICP] called '[Community Name]'. Seed it with 20 hand-picked customers. Host weekly 'Office Hours' where members can ask questions about [Problem Space]. Incentivize referrals: invite 3 peers = lifetime discount. Goal: 100 members in 60 days, 30% weekly active."

- **BAD:** "Partner with influencers"
- **GOOD:** "Identify 10 YouTubers with 50k-200k subscribers in [Industry] who cover [Topic]. Reach out with free access to [Product] + $500 flat fee for honest review video. Track: views, click-through rate, signups from each video. Goal: 3 partnerships, 500+ signups in 90 days."

### Context-Based Adaptation
- **Pre-product-market fit:** Focus on validation tactics (customer interviews, pilot programs, design partnerships, early adopter communities)
- **Post-product-market fit, pre-scale:** Focus on repeatable acquisition (content engine, outbound playbook, referral loops, strategic partnerships)
- **Scaling stage:** Focus on channel diversification, market expansion, brand building, enterprise upmarket moves

- **B2B SaaS:** Prioritize outbound, content, product-led growth, partnerships, vertical events
- **B2C apps:** Prioritize app store optimization, influencer marketing, viral loops, paid social
- **Marketplace:** Prioritize supply-side first (harder to acquire), demand follows
- **Developer tools:** Prioritize open source, technical content, developer communities, product-led growth

- **Category creation:** Focus on education-first content, thought leadership, category naming/framing
- **Competitive market:** Focus on wedge positioning, differentiated messaging, switching incentives

### Quality Filters
Before finalizing ANY strategy, ask:
- Is this specific to THIS product and market, or could it apply to any company?
- Would the ICP actually see/engage with this in their buying journey?
- Does this leverage an unfair advantage or unique positioning?
- Can they execute this with current resources?
- Would I personally bet money that this will produce traction?
- If the answer to any is "no" → rewrite or replace the strategy.

---

## Output Format

```markdown
## Your 3 Go-to-Market Strategies

Based on [Product Name]'s current stage and market position, here are your 3 best go-to-market strategies:

---

### Strategy 1: [Strategy Name]

**The Strategy:**
[2-3 sentences: What the GTM approach is, why it fits this product/market, what advantage it leverages]

**The Exact Playbook:**

**Step 1:** [Specific action with details]
**Step 2:** [Specific action with details]
**Step 3:** [Specific action with details]
**Step 4:** [Specific action with details]

**Metrics to Track:**
- [Specific metric 1]
- [Specific metric 2]
- [Specific metric 3]

**Expected Milestones:**
[Concrete outcomes with timeline, e.g., "50 qualified leads within 30 days, 10 customers by day 60"]

**Do This Today:**
[One 30-60 minute action they can take immediately]

---

### Strategy 2: [Strategy Name]

**The Strategy:**
[...]

**The Exact Playbook:**
[...]

**Metrics to Track:**
[...]

**Expected Milestones:**
[...]

**Do This Today:**
[...]

---

### Strategy 3: [Strategy Name]

**The Strategy:**
[...]

**The Exact Playbook:**
[...]

**Metrics to Track:**
[...]

**Expected Milestones:**
[...]

**Do This Today:**
[...]

---

## Execution Priority

**Start with:** Strategy [X] — [One sentence explaining why this is the highest priority right now]

**Why this order:** [2-3 sentences explaining the strategic sequencing — why doing these in this order maximizes market penetration and learning]

---

## Success Criteria

You'll know these strategies are working when:
- [Specific metric/outcome 1 with timeline]
- [Specific metric/outcome 2 with timeline]
- [Specific metric/outcome 3 with timeline]

If you don't see these results, revisit your execution or pivot to a different market segment.
```

**Example:**

```markdown
## Your 3 Go-to-Market Strategies

Based on DevAnalytics's current stage (MVP launched, 12 beta users, targeting engineering managers at Series A-C startups), here are your 3 best go-to-market strategies:

---

### Strategy 1: Design Partnership Program with 5 Target Companies

**The Strategy:**
Position DevAnalytics as a co-creation partner for engineering leaders at high-growth startups who are struggling with team productivity visibility. Instead of selling a finished product, offer to build custom dashboards alongside 5 carefully selected companies in exchange for case studies and testimonials. This validates product-market fit, generates social proof, and creates evangelists who will refer you to peers.

**The Exact Playbook:**

**Step 1:** Identify 5 Series A-C startups (50-150 employees) in your network or LinkedIn 2nd connections who recently raised funding and are likely hiring aggressively. Focus on companies using your tech stack (GitHub, Jira, Linear).

**Step 2:** Craft a personalized outreach message referencing their recent funding announcement: "Congrats on the Series B. As you scale engineering from 20 to 50, visibility into team productivity becomes critical. I'm building DevAnalytics specifically for this problem. Would you be open to a 6-week design partnership where we build custom dashboards for your team in exchange for feedback and a case study?"

**Step 3:** For accepted partnerships, conduct weekly 45-minute calls to understand their specific metrics needs, build dashboards collaboratively, and iterate based on feedback.

**Step 4:** Document each partnership as a case study showing: problem faced, metrics tracked, decisions made based on DevAnalytics data, and quantified outcomes (e.g., "Reduced deployment time by 30%").

**Metrics to Track:**
- Outreach sent: 20 (to get 5 partnerships)
- Partnership acceptance rate (goal: 25%)
- Weekly active users per partnership (goal: >70%)
- Case study completion rate (goal: 100%)

**Expected Milestones:**
5 active design partnerships within 30 days, 3 completed case studies by day 60, 2 paid conversions by day 90.

**Do This Today:**
Open LinkedIn and identify 10 engineering leaders at Series A-C startups who you have a mutual connection with. Export their names, companies, and connection paths to a spreadsheet.

---

### Strategy 2: "Engineering Metrics Playbook" Content + Inbound Engine

**The Strategy:**
Engineering managers at scaling startups are overwhelmed with metric choices (velocity, cycle time, DORA metrics, etc.) but don't know which to track or how to act on them. Create an authoritative "Engineering Metrics Playbook" that becomes the go-to resource for this audience. Position DevAnalytics as the tool that makes implementing these metrics effortless. This builds SEO authority, generates inbound leads, and establishes thought leadership.

**The Exact Playbook:**

**Step 1:** Write a 3,000-word "Engineering Metrics Playbook" covering: which metrics matter at each stage (pre-PMF, scaling, enterprise), how to measure them, what benchmarks to target, and common pitfalls to avoid. Use real examples from your design partnerships.

**Step 2:** Publish on your blog at devanalytics.com/playbook with SEO-optimized title: "Engineering Metrics That Actually Matter: A Playbook for Scaling Startups [2026]". Optimize for keywords: "engineering metrics", "DORA metrics for startups", "engineering KPIs".

**Step 3:** Gate a downloadable PDF version (with additional templates and spreadsheets) behind an email signup. Use ConvertKit or similar to capture leads.

**Step 4:** Distribute aggressively: post on Hacker News, Reddit r/engineering, LinkedIn (tag 10 engineering influencers), Engineering Manager communities (Rands Leadership Slack, LeadDev community), and email to your 12 beta users asking them to share.

**Step 5:** Follow up with email sequence: Day 1: Send the playbook. Day 3: Case study from design partnership. Day 7: Product demo video. Day 14: Free trial offer.

**Metrics to Track:**
- Playbook page views (goal: 1,000 in first 30 days)
- Email conversion rate (goal: 15%)
- Email-to-trial conversion rate (goal: 10%)

**Expected Milestones:**
150 email signups within 30 days, 15 trial signups within 60 days, 3 paid conversions within 90 days.

**Do This Today:**
Outline the Engineering Metrics Playbook table of contents. List 10 metrics you'll cover and identify which of your beta users can provide examples for each.

---

### Strategy 3: Strategic Partnership with Engineering Enablement Consultants

**The Strategy:**
Engineering leaders at scaling startups often hire consultants (ex-VPEs, fractional CTOs) to help them build processes and teams. These consultants need data to make recommendations but don't have analytics tools to provide to clients. Partner with 3-5 engineering enablement consultants to make DevAnalytics their default tool for client engagements. They get better insights for clients, you get distribution into their customer base.

**The Exact Playbook:**

**Step 1:** Identify 5 engineering enablement consultants who work with Series A-C startups. Search LinkedIn for "Fractional CTO", "Engineering Consultant", "Engineering Leadership Coach". Look for people with 10k+ followers and active posting about scaling teams.

**Step 2:** Reach out with a partnership proposition: "I noticed you work with engineering leaders at scaling startups. I built DevAnalytics to give teams visibility into productivity metrics. Would you be interested in a partnership where you get free access to offer to your clients, and in return, you promote it as your recommended analytics tool? You get better client outcomes, we get distribution."

**Step 3:** Create a "Consultant Partner Program" with: free DevAnalytics access for consultants + their clients, co-branded case studies, 20% revenue share on client conversions, joint webinar opportunities.

**Step 4:** Provide partners with enablement materials: pitch deck, demo scripts, ROI calculator, case studies, setup guides.

**Step 5:** Track partner activity and double down on top performers with co-marketing initiatives.

**Metrics to Track:**
- Partner outreach sent: 15
- Partnership acceptance rate (goal: 30%)
- Client referrals per partner per month (goal: 2)
- Partner-referred conversions (goal: 5 in 90 days)

**Expected Milestones:**
3 active consultant partners within 30 days, 10 partner-referred trials within 60 days, 5 paid conversions from partners within 90 days.

**Do This Today:**
Search LinkedIn for "Fractional CTO" and "Engineering Consultant" and create a list of 10 people with 5k+ followers who actively post about scaling engineering teams. Export to spreadsheet with their names, companies, and follower counts.

---

## Execution Priority

**Start with:** Strategy 1 — Design Partnership Program

**Why this order:** Design partnerships validate product-market fit and generate case studies, which fuel Strategy 2 (content) and Strategy 3 (partner enablement). Starting with partnerships ensures you're building GTM on top of real customer stories, not hypothetical positioning. Launch Strategy 2 (content) once you have 2-3 case studies to reference (week 4-6). Launch Strategy 3 (consultant partnerships) once you have proven client outcomes to show partners (week 8-10). This sequence builds compounding momentum: partnerships → case studies → content → inbound leads + partner referrals.

---

## Success Criteria

You'll know these strategies are working when:
- 5 active design partnerships + 3 case studies completed within 60 days (Strategy 1)
- 150 email signups + 15 product trials from content within 60 days (Strategy 2)
- 3 active consultant partners + 10 partner-referred trials within 90 days (Strategy 3)

If you don't see these results, revisit your ICP targeting or pivot to a different market segment (e.g., enterprise vs. startup, or different tech stack).
```

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `FOUNDER_CONTEXT.md` or gathered equivalent context from the user
- [ ] I have enough information about: product, ICP, stage, competitive landscape, distribution model, resources available
- [ ] If information was missing, I used AskUserQuestion to gather it (and didn't guess)

### Analysis Check
- [ ] I assessed product-market fit status based on evidence, not assumptions
- [ ] I identified the specific market wedge or entry point (not "everyone" or "small businesses")
- [ ] I analyzed channel-product fit (where the ICP actually makes buying decisions)
- [ ] I matched strategies to their current stage (pre-PMF, scaling, etc.)
- [ ] I leveraged their unfair advantages (network, expertise, positioning)

### Strategy Selection Check
- [ ] All 3 strategies are ranked by fit and likelihood of success (highest first)
- [ ] Each strategy attacks market entry from a different angle (no overlap)
- [ ] Each strategy is feasible with their current resources
- [ ] I'm personally confident each strategy will produce measurable traction
- [ ] No generic GTM advice — every strategy is specific to this product and market

### Specificity Check
- [ ] Every strategy uses actual product name, ICP details, and market specifics
- [ ] Every playbook has step-by-step actions with concrete details
- [ ] Metrics are specific and measurable
- [ ] Expected milestones include concrete outcomes with timelines
- [ ] "Do This Today" actions are completable in 30-60 minutes

### Writing Rules Compliance
- [ ] Zero generic advice (no "build a website", "do content marketing", etc.)
- [ ] Active voice throughout
- [ ] No motivational fluff or filler
- [ ] Every strategy passes the "would I bet money on this?" test
- [ ] Strategies are adapted to business stage and type (B2B/B2C, pre-PMF/scaling, etc.)

### Output Check
- [ ] Output matches the Output Format exactly
- [ ] All 3 strategies are complete with all sections filled
- [ ] Execution Priority section explains the strategic sequencing
- [ ] Success Criteria section has measurable outcomes with timelines

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides or context suggests otherwise:

- **Number of strategies:** 3 (exactly)
- **Strategy focus:** Start narrow, expand later (tight ICP, specific channel, clear positioning)
- **Stage:** If unclear, assume post-MVP, validating product-market fit
- **Business type:** If unclear, infer from FOUNDER_CONTEXT industry field
- **Budget:** Assume limited unless stated otherwise (prioritize low-cost, high-leverage tactics)
- **Timeline:** Assume user wants to see initial traction within 60-90 days
- **Metrics:** Track both leading indicators (activities) and lagging indicators (conversions, revenue)
- **Tone:** Direct, actionable, confident. No fluff.

Document any assumptions made at the top of the output.

---
