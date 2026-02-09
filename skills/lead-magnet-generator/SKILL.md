---
name: lead-magnet-generator
description: Creates viral lead magnet posts that drive comments and DMs. Produces 2 versions - a quick punchy format and a detailed format with bullet points. Use when user needs social media posts to give away a lead magnet in exchange for engagement.
---

# Lead Magnet Generator

## Purpose
Generate 2 viral lead magnet posts that get your audience to comment a trigger word in exchange for a free resource, maximizing engagement and DM opt-ins.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"lead-magnet-generator loaded, proceed with additional instructions"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read ALL reference files:

```
Read: ./references/lead-magnet-patterns.md
Read: ../viral-hook-creator/references/hook-patterns.md
Read: ../viral-hook-creator/references/trigger_words.md
```

**What you will find:**
- **lead-magnet-patterns.md**: Lead magnet post structures, value framing techniques, and CTA patterns
- **hook-patterns.md**: 18 proven viral hook patterns with templates and psychology (from viral-hook-creator)
- **trigger_words.md**: Four categories of viral trigger words (from viral-hook-creator)

**DO NOT PROCEED** to Step 2 until you have read ALL three files and have the patterns loaded in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize your output (industry terminology, audience, brand voice, authority metrics).
- **If it doesn't exist:** Proceed using defaults from the "Defaults & Assumptions" section.

### 3. Analyze Input
From the user's requirements, extract:
- **Lead magnet:** What are they giving away? (framework, template, checklist, course, etc.)
- **Credibility hook:** What effort/research backs it? (X hours studying, X months building, X years experience)
- **Inside contents:** What does the lead magnet contain? (for the detailed version)
- **Value anchor:** Price point to anchor value ($99, $199, etc.) or scarcity (will charge X in Y days)
- **Trigger word:** What word should people comment? (default: relevant keyword in CAPS)
- **Platform:** Twitter/X or LinkedIn

For any missing information, apply defaults from **Defaults & Assumptions** or ask the user.

### 4. Generate Lead Magnet Posts

**Step 4a: Generate Opening Hooks FIRST**
Using the hook patterns and trigger words from viral-hook-creator (read in Step 1), generate exactly 2 opening hook options:

1. Select 2 different patterns from hook-patterns.md that fit the lead magnet topic
2. Integrate 1-2 trigger words from trigger_words.md into each hook
3. Each hook should be 1-2 lines that create curiosity about the lead magnet

These hooks will serve as the opening lines for both post versions.

**Step 4b: Build Complete Posts**
Using the best hook from 4a, create exactly 2 versions:

**Version 1: Quick Format**
Structure:
```
[Opening hook from Step 4a]

[What you created from it]

[Value anchor - could charge $X / will charge $X soon]

Comment "[WORD]" and I'll send it to you for free (must be following)
```

**Version 2: Detailed Format**
Structure:
```
[Opening hook from Step 4a]

[What you built from it]

Inside you'll find:

→ [Benefit/content 1]
→ [Benefit/content 2]
→ [Benefit/content 3]
→ [Benefit/content 4]

Want the full [playbook/framework/guide]?

Comment "[WORD]" and I'll send it to you.

(Must be following)
```

**Platform Adaptation:**
- **Twitter/X:** Use the standard CTA endings above
- **LinkedIn:** Replace the CTA ending with:
```
1. Connect with me
2. Comment "[WORD]"

I'll send it straight to your DMs.

P.S. Repost for priority in the queue
```

### 5. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Lead with the credibility hook (effort, time, research, experience)
- Use specific numbers: "73 hours" not "many hours", "3 months" not "a long time"
- Value anchor must feel real and justified
- Trigger word should be relevant and memorable (usually the lead magnet type in CAPS)
- "Must be following" is required for Twitter/X (enables DMs)
- Keep it conversational, not salesy
- No emojis
- No hashtags in the main copy

### Format-Specific Rules
- **Quick Format:** 4-5 short paragraphs max. Punchy. Gets to the CTA fast.
- **Detailed Format:** Always use arrows (→) for the list. 3-5 bullet points. Each bullet is a specific benefit or content piece.

### Platform-Specific Rules
- **Twitter/X:**
  - Character limit doesn't apply (this is a thread opener or long post)
  - End with: `Comment "[WORD]" and I'll send it to you for free (must be following)`
  - OR: `Like + Comment "[WORD]" and it's yours for free. (Must be following so I can DM you)`

- **LinkedIn:**
  - Professional but still direct
  - End with the numbered CTA format:
    ```
    1. Connect with me
    2. Comment "[WORD]"

    I'll send it straight to your DMs.

    P.S. Repost for priority in the queue
    ```

### Opening Hook Rules
- Opening hooks MUST use patterns from viral-hook-creator's hook-patterns.md
- Integrate 1-2 trigger words from trigger_words.md
- Each hook should create curiosity and establish credibility in 1-2 lines
- Common patterns that work well for lead magnets: Authority Credibility, Data-Driven Insight, Time Investment

### Value Anchor Patterns
- "Could easily charge $X for this."
- "Will charge $X for it in Y days."
- "This would cost $X from a consultant."
- "Normally $X. Free for the next 48 hours."

---

## Output Format

```markdown
## Lead Magnet Brief
**Lead magnet:** [What they're giving away]
**Credibility:** [The effort/research/experience behind it]
**Value anchor:** [$X or scarcity framing]
**Trigger word:** [WORD]
**Platform:** [Twitter/X or LinkedIn]

---

## Opening Hook Options
(Generated using viral-hook-creator patterns)

### Hook 1: [Pattern Name]
[Hook text - 1-2 lines]

### Hook 2: [Pattern Name]
[Hook text - 1-2 lines]

---

## Version 1: Quick Format

[Full post using Hook 1 or 2 as opener]

---

## Version 2: Detailed Format

[Full post using Hook 1 or 2 as opener]
```

**Example (Twitter/X):**

```markdown
## Lead Magnet Brief
**Lead magnet:** Product Hunt launch checklist (Claude Skill)
**Credibility:** 3 months studying every #1 Product Hunt launch
**Value anchor:** Could charge $99
**Trigger word:** SKILL
**Platform:** Twitter/X

---

## Opening Hook Options
(Generated using viral-hook-creator patterns)

### Hook 1: Authority Credibility
I spent 3 months studying every #1 Product Hunt launch.

### Hook 2: Data-Driven Insight
I analyzed 247 Product Hunt launches that hit #1. Here's what they all had in common.

---

## Version 1: Quick Format

I spent 3 months studying every #1 Product Hunt launch.

Then I built a Claude Skill that gives you a personalized launch checklist based on YOUR product.

Could easily charge $99 for this.

Comment "SKILL" and I'll send it to you for free (must be following)

---

## Version 2: Detailed Format

I spent 3 months studying every #1 Product Hunt launch.

Then I built a Claude Skill that creates a personalized launch checklist based on YOUR product.

Inside you'll find:

→ Pre-launch timeline with exact tasks for each day
→ Hunter outreach templates that actually get responses
→ Community building tactics the top launches used
→ Launch day hour-by-hour checklist

Want the full playbook?

Comment "SKILL" and I'll send it to you.

(Must be following)
```

**Example (LinkedIn):**

```markdown
## Version 1: Quick Format

I spent 3 months studying every #1 Product Hunt launch.

Then I built a tool that gives you a personalized launch checklist based on YOUR product.

Could easily charge $99 for this.

1. Connect with me
2. Comment "SKILL"

I'll send it straight to your DMs.

P.S. Repost for priority in the queue

---

## Version 2: Detailed Format

I spent 3 months studying every #1 Product Hunt launch.

Then I built a tool that creates a personalized launch checklist based on YOUR product.

Inside you'll find:

→ Pre-launch timeline with exact tasks for each day
→ Hunter outreach templates that actually get responses
→ Community building tactics the top launches used
→ Launch day hour-by-hour checklist

Want the full playbook?

1. Connect with me
2. Comment "SKILL"

I'll send it straight to your DMs.

P.S. Repost for priority in the queue
```

---

## References

**These files MUST be read using the Read tool before generating posts (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/lead-magnet-patterns.md` | Value anchors, CTA patterns, post structures, and examples |
| `../viral-hook-creator/references/hook-patterns.md` | 18 proven viral hook patterns for opening lines |
| `../viral-hook-creator/references/trigger_words.md` | Viral trigger words to integrate into hooks |

**Why this matters:** Lead magnet posts need two things: (1) a viral opening hook that stops the scroll, and (2) a clear value-to-action structure. Hook patterns create the initial curiosity. Lead magnet patterns convert that attention into comments.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/lead-magnet-patterns.md` before generating posts
- [ ] I read `../viral-hook-creator/references/hook-patterns.md` before generating hooks
- [ ] I read `../viral-hook-creator/references/trigger_words.md` before generating hooks
- [ ] I have hook patterns, trigger words, value anchors, and CTA formats in context

### Opening Hook Check
- [ ] Generated exactly 2 opening hook options
- [ ] Each hook uses a DIFFERENT pattern from hook-patterns.md
- [ ] Each hook contains 1-2 trigger words from trigger_words.md
- [ ] Hooks are 1-2 lines that create curiosity

### Content Check
- [ ] Opening hook uses specific numbers (hours, months, years)
- [ ] Value anchor feels real and justified
- [ ] Trigger word is relevant and in CAPS
- [ ] Quick format is punchy (4-5 short paragraphs max)
- [ ] Detailed format uses arrows (→) for the list
- [ ] Detailed format has 3-5 specific bullet points

### CTA Check
- [ ] Twitter/X posts end with proper "Comment + must be following" CTA
- [ ] LinkedIn posts end with numbered CTA format + "P.S. Repost" line
- [ ] Trigger word matches in CTA

### Writing Check
- [ ] No emojis
- [ ] No hashtags in main copy
- [ ] Conversational tone, not salesy
- [ ] Active voice throughout

### Output Check
- [ ] Both versions are complete
- [ ] Brief accurately summarizes input
- [ ] Platform-appropriate CTAs applied

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Platform:** Twitter/X (most common for lead magnet giveaways)
- **Trigger word:** The lead magnet type in CAPS (e.g., "FRAMEWORK", "CHECKLIST", "TEMPLATE")
- **Value anchor:** "Could easily charge $99 for this" (safe default)
- **Credibility format:** Time-based ("I spent X hours/months...")
- **Bullet count:** 4 items for detailed format
- **Tone:** Confident, direct, generous

If the user doesn't provide what's inside the lead magnet, ask for 3-5 key benefits or contents before generating the detailed version.

---
