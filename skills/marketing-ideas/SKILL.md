---
name: marketing-ideas
version: v1.0.0
description: Produces the best marketing ideas for your business by analyzing your FOUNDER_CONTEXT and matching it against a curated database of 160+ proven marketing strategies. Use when user needs creative, actionable marketing ideas tailored to their business.
---

# Marketing Ideas

## Purpose
Analyze the user's business context and produce the 5 best marketing ideas from a curated database of proven strategies, each with a clear explanation and a specific action plan tailored to their business.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"marketing-ideas loaded, proceed with additional instructions or tell me what marketing goal you're focused on (e.g., more leads, buzz without paid ads, customer retention, crushing competitors, etc.)"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read the marketing ideas database:

```
Read: ./references/marketing-ideas-database.md
```

**What you will find:**
- **marketing-ideas-database.md**: 160+ proven marketing strategies organized by goal category (Leads & Conversions, Buzz Without Paid Ads, Customer Sharing & Virality, Crushing Competitors, Customer Retention, Winning at Events, Future-Proofing, Buzz Generation Stunts, Brand Awareness, Acquisition, Retention, Monetization). Each idea has a title, strategy, real-world example, applicability, and psychological reasoning.

**DO NOT PROCEED** to Step 2 until you have read the database and have all ideas loaded in context.

### 2. MANDATORY: Read Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and extract: company name, industry, target audience, value proposition, products/services, business goals, team size, competitors, and brand voice.
- **If it doesn't exist:** Ask the user to briefly describe their business, target audience, product/service, and current marketing goal. Do NOT proceed without business context — this skill requires it to produce relevant recommendations.

### 3. Analyze Input
From the user's requirements and business context, extract:
- **Marketing goal:** What they want to achieve (more leads, buzz, retention, competitive edge, etc.)
- **Business type:** B2B SaaS, B2C, e-commerce, agency, creator, etc.
- **Stage:** Early-stage, growth, established
- **Constraints:** Budget, team size, technical capability
- **Current channels:** Where they already market (social, email, events, etc.)

If the user doesn't specify a marketing goal, analyze their FOUNDER_CONTEXT to determine the most impactful goal based on their business stage and goals.

For any missing information, apply defaults from **Defaults & Assumptions**.

### 4. Select the 5 Best Ideas
Using the database from Step 1 and the business context from Step 2:

1. **Score every idea** in the database against the user's business using these criteria:
   - **Relevance:** Does this idea apply to their business type and industry?
   - **Impact:** How much could this move the needle for their specific goal?
   - **Feasibility:** Can they execute this with their current resources (team, budget, tech)?
   - **Uniqueness:** Would this be unexpected in their industry? (unexpected = more impact)

2. **Select the top 5 ideas** with the highest combined score.

3. **Ensure variety:** Pick ideas from at least 3 different categories when possible. Don't cluster all 5 in one category unless the user's goal is extremely specific.

### 5. Write Recommendations
For each of the 5 selected ideas, write two parts:

**Part A — The Strategy (What & Why)**
- Explain the strategy clearly in 2-3 sentences
- Include the real-world example from the database
- Explain the psychology of why it works

**Part B — Applied to Your Business (How)**
- Write a specific, actionable plan for how THIS business should implement this strategy
- Use the company name, product, audience, and industry from FOUNDER_CONTEXT
- Include concrete next steps (not vague advice)
- Mention specific platforms, tools, or channels relevant to their business
- If applicable, suggest a timeline or first step to get started this week

### 6. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Every recommendation must come from the database. Do NOT invent strategies.
- The "Applied to Your Business" section must be specific to the user's business. Generic advice is useless. Use their company name, product, audience.
- Lead with the highest-impact idea first.
- Use specific numbers and examples, not vague promises.
- Keep each recommendation concise. Strategy explanation: 3-5 sentences. Application: 4-8 sentences.
- No fluff, no filler, no motivational padding.
- Active voice only.

### Selection Rules
- If the user specifies a goal (e.g., "I want more leads"), prioritize ideas from that category but don't limit yourself to it. Cross-category ideas that serve the goal are fine.
- If an idea requires resources the business clearly doesn't have (e.g., "send physical items" for a solo bootstrapped founder), skip it in favor of a more feasible alternative.
- Never recommend two ideas that are too similar. Each idea should attack the problem from a different angle.

### Context Rules
- For B2B SaaS: Prioritize ideas around product-led growth, LinkedIn, content, and competitor positioning.
- For B2C / e-commerce: Prioritize ideas around virality, social sharing, retention, and UGC.
- For early-stage: Prioritize low-cost, high-impact guerrilla ideas.
- For established companies: Include bolder ideas that require some budget or team effort.

---

## Output Format

```markdown
## Your Top 5 Marketing Ideas

Based on your business ([Company Name] — [one-line description]), here are the 5 highest-impact marketing strategies you should implement:

---

### 1. [Idea Title]

**The Strategy:**
[2-3 sentence explanation of the strategy. Include the real-world example. Explain why it works psychologically.]

**How to Apply This to [Company Name]:**
[4-8 sentences with a specific, actionable plan. Use their product name, audience, channels. Include a concrete first step.]

---

### 2. [Idea Title]

**The Strategy:**
[...]

**How to Apply This to [Company Name]:**
[...]

---

### 3. [Idea Title]

**The Strategy:**
[...]

**How to Apply This to [Company Name]:**
[...]

---

### 4. [Idea Title]

**The Strategy:**
[...]

**How to Apply This to [Company Name]:**
[...]

---

### 5. [Idea Title]

**The Strategy:**
[...]

**How to Apply This to [Company Name]:**
[...]

---

## Quick-Start Action Plan
Pick ONE idea and do this today:
- **Idea to start with:** [Recommend the one with the fastest time-to-impact]
- **First step:** [One specific action they can take in the next 30 minutes]
- **Expected timeline:** [When they should see initial results]
```

**Example:**

```markdown
## Your Top 5 Marketing Ideas

Based on your business (CalendarAI — AI scheduling tool for busy founders), here are the 5 highest-impact marketing strategies you should implement:

---

### 1. Replace "Book a Demo" with a Self-Serve Playground

**The Strategy:**
Build a frictionless playground where prospects can try a dummy version of your product with zero signup. Companies replacing "Book a Demo" with "Try it yourself" see faster conversions because people experience the Aha moment before committing. It works because it removes every barrier between curiosity and value.

**How to Apply This to CalendarAI:**
Create a sandbox at try.calendarai.com where visitors can simulate scheduling 3 meetings. Pre-load a fake calendar with conflicts and let them watch CalendarAI resolve them in real time. No email required. Add a CTA at the end: "Want this on your real calendar? Connect Google Calendar in 30 seconds." This is your highest-leverage move because your product's value is instantly visible — people just need to see it work once.

---

### 2. Use CalendarAI FOR Potential Customers, Then Gift Them the Results

**The Strategy:**
Find 8-10 ideal customers on LinkedIn. Use your product to create something valuable for them and send it as a surprise gift. Vanta's co-founder sent the Segment team a SOC-2 compliance spreadsheet before they were even customers. The gift itself is proof the product works.

**How to Apply This to CalendarAI:**
Find 10 founders on LinkedIn who post about being overwhelmed or working 70+ hour weeks. Run their public calendar availability (from Calendly links in their bios) through CalendarAI and generate a "scheduling efficiency report" showing how much time they're wasting on back-and-forth. DM it to them: "Made this for you — thought you'd find it useful." If 3 out of 10 respond, that's 3 warm leads who already saw your product work.

---

[...ideas 3-5...]

---

## Quick-Start Action Plan
Pick ONE idea and do this today:
- **Idea to start with:** #2 — Use CalendarAI for potential customers
- **First step:** Open LinkedIn, find 3 founders who posted about being busy this week, and generate a scheduling report for each
- **Expected timeline:** DMs sent today, responses within 48 hours
```

---

## References

**This file MUST be read using the Read tool before generating recommendations (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/marketing-ideas-database.md` | 160+ proven marketing strategies organized by category, each with title, strategy, example, applicability, and psychology |

**Why this matters:** Every recommendation must be grounded in a proven strategy from the database. The database provides the raw ideas; FOUNDER_CONTEXT provides the business specifics. The skill's value is in the match — finding which proven strategies fit THIS specific business best.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/marketing-ideas-database.md` before generating ideas
- [ ] I have all 160+ ideas loaded in context
- [ ] I read `FOUNDER_CONTEXT.md` or have business context from the user

### Selection Check
- [ ] All 5 recommended ideas come from the database (none invented)
- [ ] Ideas are ranked by impact (highest first)
- [ ] Ideas come from at least 3 different categories
- [ ] No two ideas are too similar
- [ ] All ideas are feasible given the business's resources

### Content Check
- [ ] Each "The Strategy" section explains what, why, and includes the real-world example
- [ ] Each "How to Apply" section uses the actual company name, product, and audience
- [ ] Each "How to Apply" section has concrete next steps (not vague advice)
- [ ] Quick-Start Action Plan recommends one idea with a specific 30-minute first step

### Writing Rules Compliance
- [ ] Active voice throughout
- [ ] Specific numbers and examples used
- [ ] No fluff, filler, or motivational padding
- [ ] Each recommendation is concise (strategy: 3-5 sentences, application: 4-8 sentences)

### Output Check
- [ ] Output matches the Output Format exactly
- [ ] All 5 ideas are complete with both parts (Strategy + Application)
- [ ] Quick-Start Action Plan is included

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Number of ideas:** 5
- **Marketing goal:** Inferred from FOUNDER_CONTEXT business goals. If unclear, default to "more leads & conversions" (most common founder need).
- **Business type:** Inferred from FOUNDER_CONTEXT. If missing, assume B2B SaaS.
- **Stage:** Inferred from team size and funding. If missing, assume early-stage/growth.
- **Budget:** Assume limited budget (prioritize low-cost ideas) unless stated otherwise.
- **Audience:** Inferred from FOUNDER_CONTEXT target audience.
- **Tone:** Match FOUNDER_CONTEXT brand voice. If missing, default to direct and actionable.

Document any assumptions made at the top of the output.

---
