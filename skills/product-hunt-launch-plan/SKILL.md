---
name: product-hunt-launch-plan
version: v1.0.0
description: Creates a comprehensive, personalized Product Hunt launch plan to rank #1. Use when user needs a step-by-step Product Hunt launch strategy, launch checklist, or wants to maximize their Product Hunt success.
---

# Product Hunt Launch Plan

## Purpose
Generate a comprehensive, personalized Product Hunt launch plan with actionable steps from A-Z to help the user rank #1 Product of the Day.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"product-hunt-launch-plan loaded. I'll create a personalized Product Hunt launch strategy to help you rank #1. Let me gather some information about your product first."

Then proceed to the Discovery Questions phase.

### If $ARGUMENTS contains content:
Use the provided content as initial context, but still proceed through Discovery Questions to fill any gaps.

---

## Task Execution

When user engages with this skill:

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read the reference file:

```
Read: ./references/ultimate_product_hunt_launch_guide.md
```

**What you will find:**
- Complete 3-phase launch strategy (Before, During, After)
- Timing and day selection guidance
- Asset requirements and examples
- Support list building strategies
- Launch day timeline hour-by-hour
- Hidden gems and pro tips from makers who ranked #1
- 20+ alternative launch platforms

**DO NOT PROCEED** to Step 2 until you have read this file and have the complete guide in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and extract all relevant product information (product name, description, target audience, unique value proposition, current traction, audience size).
- **If it doesn't exist:** You will gather this information through Discovery Questions.

### 3. Discovery Questions (MANDATORY)
**Ask up to 10 targeted questions to personalize the launch plan.**

Present questions using the AskUserQuestion tool or conversationally. Gather:

1. **Product Basics**
   - What is your product name and one-line description?
   - What problem does it solve and for whom?

2. **Current State**
   - What's your current launch date (or target timeframe)?
   - Do you have a Product Hunt account? Is it active/warmed?

3. **Audience & Reach**
   - How large is your email list?
   - What's your Twitter/X following size?
   - Are you active in any communities (Indie Hackers, Discord, Slack)?

4. **Assets Readiness**
   - Do you have product screenshots/demo video ready?
   - Do you have a landing page live?

5. **Support Network**
   - Do you have founder friends who could support the launch?
   - Have you supported other Product Hunt launches before?

6. **Goals & Constraints**
   - What's your primary goal? (users, awareness, investors, validation)
   - Any constraints? (budget, time, team size)

**Adapt questions based on FOUNDER_CONTEXT.md if available.** Skip questions already answered there.

### 4. Analyze & Personalize
Based on gathered information, assess:

- **Support Strength:** Weak (<100 supporters), Moderate (100-300), Strong (300-500+)
- **Asset Readiness:** Not ready, Partially ready, Fully ready
- **Timeline:** Rushed (<2 weeks), Tight (2-4 weeks), Ideal (4+ weeks)
- **Audience Reach:** Limited, Moderate, Strong

Use this assessment to customize recommendations.

### 5. Generate Personalized Launch Plan
Create a comprehensive plan with:

**Section 1: Executive Summary**
- Product overview (from their input)
- Launch date recommendation
- Predicted ranking potential based on their current assets
- Key success factors for THEIR specific situation

**Section 2: Pre-Launch Phase (customize timeline based on their date)**
- Week-by-week action items
- Specific community recommendations based on their niche
- Asset creation checklist tailored to what they're missing
- Support list building strategy based on their current reach

**Section 3: Launch Week Preparation**
- Day-by-day countdown
- Specific outreach templates personalized for their product
- Social media post drafts
- Email copy suggestions

**Section 4: Launch Day Battle Plan**
- Hour-by-hour timeline in their timezone
- Specific platforms to post on based on their product type
- Engagement scripts for comments
- Monitoring setup

**Section 5: Post-Launch Strategy**
- Follow-up actions
- How to leverage results (even if not #1)
- Badge/social proof implementation

**Section 6: Hidden Gems & Pro Tips**
Include 5-10 advanced tactics from the reference guide, selected based on relevance to their situation.

**Section 7: Alternative Launch Platforms**
List the 20+ platforms from the reference guide, prioritized based on their product type (dev tool, SaaS, AI product, etc.).

### 6. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Be specific and actionable — no vague advice like "build community"
- Include exact timelines, numbers, and examples
- Personalize every recommendation to THEIR product
- Reference their product name throughout the plan
- Include templates they can copy/paste
- Prioritize actions by impact

### Personalization Rules
- If small audience (<500): Focus on community building and reciprocity tactics
- If large audience (5000+): Focus on coordinated launch and momentum strategies
- If dev tool: Emphasize Hacker News, DevHunt, GitHub community
- If AI product: Include AI-specific directories
- If B2B SaaS: Focus on LinkedIn, professional communities
- If consumer app: Focus on Twitter/X, visual assets

### Honesty Rules
- Be realistic about their chances based on their current situation
- If timeline is too tight, say so and suggest rescheduling
- If assets are weak, prioritize fixing that first
- Don't promise #1 if their support base is too small

---

## Output Format

```markdown
# Product Hunt Launch Plan: [Product Name]

## Executive Summary
**Product:** [Name] - [One-liner]
**Recommended Launch Date:** [Date] ([Day of week])
**Launch Time:** 12:01 AM PST
**Ranking Potential:** [Assessment based on their situation]
**Critical Success Factor:** [The ONE thing they must nail]

---

## Phase 1: Pre-Launch ([X] weeks out)

### Week [X]: [Focus Area]
- [ ] Action item 1
- [ ] Action item 2
...

### Week [X-1]: [Focus Area]
...

---

## Phase 2: Launch Week

### Day -7 to -1: Final Preparations
...

### Launch Day: Hour-by-Hour Battle Plan

**[Time in their timezone] - [Action]**
...

---

## Phase 3: Post-Launch

### Day 1-3: Immediate Actions
...

### Week 1: Capitalize on Results
...

---

## Your Personalized Tips

Based on your situation, focus on these advanced tactics:

1. **[Tip Name]:** [Specific advice for their situation]
...

---

## Alternative Launch Platforms (Prioritized for [Product Type])

### Launch This Week (Alongside Product Hunt)
| Platform | Why It Fits You |
|----------|-----------------|
...

### Launch Next Week
...

---

## Ready-to-Use Templates

### Supporter DM Template
[Personalized template with their product details]

### Launch Day Tweet Thread
[Draft thread they can customize]

### Email to Subscribers
[Draft email copy]

---

## Your Launch Checklist

### Assets Needed
- [ ] Item (Status: Ready/Needed)
...

### Support List Target
- [ ] Category: [X] people (Current: [Y])
...
```

---

## References

**This file MUST be read using the Read tool before creating any launch plan (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/ultimate_product_hunt_launch_guide.md` | Complete Product Hunt strategy from Tibo (Maker of the Year 2022), including 3-phase launch process, hidden gems, pro tips, and 20+ alternative platforms |

**Why this matters:** This guide contains battle-tested strategies from someone who has ranked #1 multiple times. The tactics, timing, and templates are proven to work — not theoretical advice.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/ultimate_product_hunt_launch_guide.md` before creating the plan
- [ ] I checked for and read `FOUNDER_CONTEXT.md` if it exists
- [ ] I have the complete guide content in context

### Discovery Check
- [ ] I asked targeted questions to understand their specific situation
- [ ] I know their product, audience size, timeline, and assets status
- [ ] I adapted my questions based on available context

### Personalization Check
- [ ] Every section references THEIR product by name
- [ ] Recommendations match their audience size and reach
- [ ] Timeline is realistic for their launch date
- [ ] Platform recommendations match their product type
- [ ] Templates include their specific product details

### Completeness Check
- [ ] All 3 phases covered (Before, During, After)
- [ ] Hour-by-hour launch day timeline included
- [ ] Hidden gems/pro tips section included
- [ ] Alternative platforms listed and prioritized
- [ ] Ready-to-use templates provided
- [ ] Checklist with current status included

### Honesty Check
- [ ] Ranking assessment is realistic
- [ ] Weak areas are called out with solutions
- [ ] Timeline concerns are addressed
- [ ] No false promises of guaranteed #1

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Launch day:** Tuesday, Wednesday, or Thursday (higher traffic)
- **Launch time:** 12:01 AM PST (Product Hunt reset time)
- **Target ranking:** Top 5 (requires ~500 engaged supporters)
- **Preparation time:** 4 weeks ideal minimum
- **Primary goal:** User acquisition and validation
- **Hunter strategy:** Self-hunt (60% of #1 products are self-hunted)
- **Asset format:** Static images prioritized over video (higher engagement)

Document any assumptions made in the Executive Summary.

---
