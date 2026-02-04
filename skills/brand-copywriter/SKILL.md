---
name: brand-copywriter
version: v1.0.0
description: Writes marketing copy using proven copywriting frameworks. Use when user needs copy for ads (Facebook, Instagram, TikTok, YouTube), landing pages, sales pages, email sequences, LinkedIn posts, product descriptions, or any marketing content.
---

# Brand Copywriter

## Purpose
Generate professional marketing copy in two versions: one using the optimal framework for the platform/use case, and one using an AI-selected alternative framework for comparison.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"brand-copywriter loaded, proceed with what you need copy for (e.g., Facebook ad, landing page, TikTok video, LinkedIn post, email sequence, etc.)"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read BOTH reference files:

```
Read: ./references/copy_frameworks.md
Read: ./references/writing_styles.md
```

**What you will find:**
- **copy_frameworks.md:** 14 proven copywriting frameworks with detailed structures, selection matrix, and quick reference tables
- **writing_styles.md:** Voice and tone rules built from Ogilvy, Schwartz, Hopkins, Halbert, Sugarman, Caples, and Collier. Contains the Banned Phrases list, AI tell patterns to avoid, and how human copy actually sounds.

**DO NOT PROCEED** to Step 2 until you have read both files and have the frameworks AND voice rules loaded in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize your copy (company name, product details, brand voice, target audience, unique selling points, pain points).
- **If it doesn't exist:** Proceed using defaults from "Defaults & Assumptions" and ask clarifying questions if critical information is missing.

### 3. Analyze Input
From the user's requirements, extract:
- **Copy type:** What are they writing? (Facebook ad, landing page, TikTok script, etc.)
- **Product/service:** What are they selling?
- **Target audience:** Who is this for?
- **Key benefit/transformation:** What outcome does the customer get?
- **Tone:** Professional, casual, bold, friendly, etc.
- **Length constraints:** Character limits, word count, duration (for video)

For any missing information, apply defaults from **Defaults & Assumptions**.

### 4. Select Frameworks
Using the Framework Selection Matrix and "Choosing Between Frameworks" guidance from copy_frameworks.md:

1. **Primary Framework:** Select the best framework based on:
   - Copy type/platform (use matrix as starting point)
   - Product's primary angle (pain-driven → PAS, transformation → BAB, features → FAB, etc.)
   - Audience awareness level (unaware → ACCA/AIDA, problem-aware → PAS/BAB, etc.)
   - Available copy length

2. **Alternative Framework:** Select a genuinely different framework that offers a contrasting approach:
   - If primary is pain-focused (PAS), try transformation-focused (BAB) or structured (AIDA)
   - If primary is feature-focused (FAB), try pain-focused (PAS) or story-focused (STAR)
   - The alternative should give the user a meaningfully different angle to test

### 5. Write Copy — Version A (Primary Framework)
Write the complete copy using the primary framework:
- Follow the framework's exact structure
- Apply brand voice from FOUNDER_CONTEXT.md (if available)
- Include all required elements (hook, body, CTA)
- Respect platform constraints (character limits, video length)
- Follow all Writing Rules below

### 6. Write Copy — Version B (Alternative Framework)
Write the complete copy using the alternative framework:
- Same product/message, different structure
- Explain why this framework was chosen as the alternative
- Follow all Writing Rules below

### 7. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output

---

## Writing Rules
Hard constraints. No interpretation. Every rule here exists because it kills conversion when broken.

### Core Rules
- Write to one specific person, not an audience
- Lead with the strongest element (pain, benefit, or hook)
- One idea per sentence
- Active voice only
- Specific numbers, always. "127%" not "over 100%". "$45K/month" not "six figures". "2.4 hours" not "significant time".
- Benefits over features. What they GET, not what it HAS.
- Clear, single CTA per piece of copy. Name what happens when they click. Not "Sign Up". "Get the free template."
- Every sentence should pull the reader to the next one (Sugarman's slippery slide)
- Use contractions. "You're" not "You are". "It's" not "It is".
- Have opinions. Bland copy sells nothing.
- Admit limitations when relevant. It builds trust faster than any claim.

### Voice Rules (Non-Negotiable)
**Read writing_styles.md for the full Banned List. These are the critical ones:**
- NO em dashes for dramatic effect. One brief aside per paragraph max. Never for building tension.
- NO "And honestly?", "Here's the thing...", "The truth is...", "At the end of the day..."
- NO "It's not X. It's Y." structure. Cut it entirely.
- NO "Let's dive in", "Whether you're a X or a Y...", "Unlock your potential"
- NO "game-changer", "revolutionary", "seamless", "robust", "leverage", "streamline", "delve"
- NO "Now," as a paragraph opener
- NO three consecutive fragments for artificial punch
- NO one-liner at the end that restates what you just said
- NO fake vulnerability that's actually a humble brag
- Adjectives like "incredible", "amazing", "powerful" are lazy. Replace with a specific detail that proves the point without saying it.

### Platform-Specific Rules
- **Facebook/Instagram Ads:** 125 characters before "See More" — front-load the hook. Total: 1,000 char max primary text.
- **TikTok/Reels:** First 3 seconds = hook. Script for 15-60 seconds. Conversational tone.
- **LinkedIn:** Professional but human. First line visible = hook. 1,300 char max for full visibility.
- **YouTube:** First 5 seconds critical. Script with timestamps for longer content.
- **Landing Pages:** Above the fold = headline + subhead + CTA. Scannable sections.
- **Email:** Subject line <50 chars. Preview text matters. One CTA per email.
- **Sales Pages:** Long-form allowed. Multiple proof points. FAQ section recommended.

---

## Output Format

```markdown
## Copy Brief
**Copy type:** [What they're writing]
**Product/Service:** [What they're selling]
**Target audience:** [Who it's for]
**Key transformation:** [What the customer gets]
**Platform constraints:** [Character limits, length, etc.]

---

## Version A: [Primary Framework Name]

**Why this framework:** [1-2 sentences explaining why this is the optimal choice for this copy type]

### Copy:
[Full copy here, formatted appropriately for the platform]

---

## Version B: [Alternative Framework Name]

**Why this framework:** [1-2 sentences explaining why this alternative could work well]

### Copy:
[Full copy here, formatted appropriately for the platform]

---

## Recommendation
[Which version to test first and why. Any A/B testing suggestions.]
```

**Example:**

```markdown
## Copy Brief
**Copy type:** Facebook Ad
**Product/Service:** AI scheduling tool for founders
**Target audience:** Solo founders working 60+ hour weeks
**Key transformation:** Reclaim 10+ hours per week
**Platform constraints:** 125 char hook, 1000 char max

---

## Version A: AIDA

**Why this framework:** AIDA gives a clean attention-to-action arc. Works well here because the problem is visible but the solution needs a moment to land.

### Copy:
You're working 70 hours a week and still behind.

Last Tuesday I counted how much time I spent just scheduling meetings. 2 hours and 17 minutes. In one day.

CalendarAI handles all of it. Scheduling, rescheduling, confirmations, the whole thing. I set it up in 8 minutes and haven't touched my calendar since.

"I got 12 hours back in my first week. Didn't change anything else." Sarah K., bootstrapped SaaS founder.

→ Try CalendarAI free for 14 days. No credit card needed.

---

## Version B: PAS

**Why this framework:** PAS leads with the pain, which is strong here. Founders already feel this daily, so we don't need to explain it. We just need to name it accurately.

### Copy:
Your calendar is running your business. You're not.

You spent 47 minutes yesterday rescheduling a single call. You have 3 "free" slots this week and two of them are back-to-back meetings you forgot about. Meanwhile, the actual work that grows your company keeps getting pushed.

CalendarAI does all of this for you. Schedules, reschedules, sends reminders, blocks your focus time. Set it up once, it runs.

2,400 founders use it. Average time saved: 11 hours a week.

→ Get your first week free. See how it works.

---

## Recommendation
Test Version B (PAS) first. The pain is real and daily for this audience, so leading with it will get more clicks. If CTR is strong but people aren't converting, swap to Version A, which spends more time on the proof.
```

---

## References

**Both files MUST be read using the Read tool before writing any copy (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/copy_frameworks.md` | 14 copywriting frameworks with structures, examples, and selection matrix |
| `./references/writing_styles.md` | Voice and tone rules from Ogilvy, Schwartz, Hopkins, Halbert, Sugarman, Caples, Collier. Contains the full Banned Phrases list, AI tell patterns, and what human copy actually sounds like. |

**Why both matter:** copy_frameworks.md picks the right structure. writing_styles.md makes the words sound like a human wrote them. A great structure with AI-sounding copy still fails. Great voice with the wrong structure still underperforms. Both together is what actually converts.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/copy_frameworks.md` before writing copy
- [ ] I read `./references/writing_styles.md` before writing copy
- [ ] I have both the frameworks AND the voice/banned-phrase rules in context

### Input Check
- [ ] Copy type/platform is identified
- [ ] Target audience is clear
- [ ] Key benefit/transformation is defined
- [ ] Defaults applied for any missing info

### Framework Check
- [ ] Primary framework matches the copy type (per Selection Matrix)
- [ ] Alternative framework offers a genuinely different approach
- [ ] Both frameworks are used correctly (following their structure)

### Writing Rules Compliance
- [ ] Hook is strong and front-loaded
- [ ] Active voice throughout
- [ ] Specific numbers used (not vague adjectives)
- [ ] Benefits emphasized over features
- [ ] Clear single CTA that names what happens when they click
- [ ] Platform constraints respected

### Voice & AI Tell Check
- [ ] Zero banned phrases from writing_styles.md (no "game-changer", "And honestly?", "Here's the thing...", etc.)
- [ ] No em dashes used for dramatic effect
- [ ] No "It's not X. It's Y." structures
- [ ] Contractions used throughout (you're, it's, they're)
- [ ] At least one specific detail that shows rather than tells (Ogilvy principle)
- [ ] At least one opinion or honest admission
- [ ] Copy could NOT have been written about a different product (it's specific enough)
- [ ] Read both versions aloud in your head. If either one stumbles or bores, rewrite before presenting.

### Output Check
- [ ] Both versions are complete and ready to use
- [ ] Copy Brief accurately summarizes the input
- [ ] Recommendation explains which to test first

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Copy type:** General copy (most common request)
- **Tone:** Confident, conversational, professional
- **Audience:** Business owners/founders (if not specified)
- **Length:** Platform-appropriate (use standard limits)
- **CTA:** Name the action ("Get the free guide", "Start your free trial"). Never "Learn More" or "Sign Up".
- **Urgency:** Soft urgency (no fake scarcity)
- **Proof:** Use if provided, don't invent testimonials

Document any assumptions made in the Copy Brief.

---
