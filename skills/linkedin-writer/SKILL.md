---
name: linkedin-writer
version: v1.0.0
description: Creates viral LinkedIn posts using proven formats, post templates, and voice matching. Use when user needs engaging, high-performing posts for LinkedIn.
---

# LinkedIn Writer

## Purpose
Generate 2 viral LinkedIn posts in different proven formats, matched to the founder's voice, using battle-tested templates and patterns that drive engagement on LinkedIn.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"linkedin-writer loaded, proceed with your topic or idea"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read ALL reference files. This is non-negotiable:

```
Read: ./references/linkedin-formats.md
Read: ./references/linkedin-posts.md
```

**What you will find:**
- **linkedin-formats.md**: 7 proven LinkedIn post formats with structure templates, psychology, rules, and when-to-use matching logic
- **linkedin-posts.md**: 8+ proven viral LinkedIn posts organized by format type — the example and voice library

**DO NOT PROCEED** to Step 2 until you have read all files and have their content in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize output (industry terminology, audience pain points, brand voice, company name, products, achievements).
- **If it doesn't exist:** Proceed using defaults from "Defaults & Assumptions."

### 3. Analyze Input & Auto-Select Formats
From the user's requirements, extract:
- **Topic/idea** — What they want to post about
- **Goal** — What they want the post to achieve (engagement, authority, leads, thought leadership)
- **Any specific format preference** — If they mentioned a format type

**Format Auto-Selection Logic:**

If the user specified a format → use that format for one post, auto-select the best complementary format for the second.

If the user did NOT specify a format, auto-select 2 different formats based on the topic:

| If the topic involves... | Best format match |
|---|---|
| Multiple tips, lessons, mistakes, or advice points | **Lessons Learned** |
| A complete process, roadmap, or "how to achieve X" | **Actionable Blueprint** |
| A personal experience, failure, setback, or pivotal moment | **Personal Story** |
| Explaining one specific technique, hack, or strategy with proof | **Strategy Breakdown** |
| Analyzing a specific company, product, or brand | **Case Study** |
| A strong opinion, industry trend, prediction, or contrarian view | **Industry Hot Take** |
| A small but impactful tip or optimization | **Quick Hack** |

**Always select 2 DIFFERENT formats.** Choose the primary format based on the strongest topic match, then select a complementary second format that gives the user a different angle on the same topic.

### 4. Generate 2 Viral LinkedIn Posts
Using the formats and posts you loaded in Steps 1-3:

1. **Study the example posts** in linkedin-posts.md for your selected formats — internalize the rhythm, structure, hook style, and length
2. **Extract the voice DNA** from the reference posts — match the writing style:
   - Conversational and direct, like talking to a peer
   - Short paragraphs (1-3 sentences each)
   - Heavy line breaks for readability
   - Mixes professional insight with personality
   - Uses specific numbers and data
   - First-person perspective with real examples
   - No corporate jargon
3. **If FOUNDER_CONTEXT.md exists**, blend the founder's brand voice with the voice DNA from the reference posts
4. **Draft each post** following the format's structure template, the voice DNA, and all Writing Rules below
5. **Run each post through the Engagement Test:** "Would someone save this post or leave a comment?" If no → rewrite before continuing

**Critical requirements:**
- Each post must use a DIFFERENT format (no repeats)
- Each post must match the voice DNA from the reference posts
- Each post must be about the user's SPECIFIC topic (not generic advice)
- Each post must follow the format's structure template from linkedin-formats.md
- Each post must be ready to copy-paste and post immediately — no placeholders, no [brackets], no instructions
- The first 2 lines of each post must work as a compelling hook above LinkedIn's "see more" fold

### 5. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output
- If any post feels generic, forced, or wouldn't pass the Engagement Test → rewrite before presenting

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules (Apply to ALL LinkedIn posts)
- **First 2 lines are everything.** LinkedIn cuts off at ~210 characters with "see more." Your hook must compel the click. Make it the strongest part of the post.
- Use frequent line breaks. On LinkedIn, white space = readability = engagement. One idea per paragraph.
- Short paragraphs only — 1-3 sentences max per paragraph. Wall of text = scroll past.
- Specific numbers > vague claims ("52% increase" not "significant increase", "23-person agency" not "large agency").
- Active voice only. Never passive.
- Present tense preferred.
- Conversational tone — write like you're talking to one person, not presenting to a boardroom.
- No hashtags in the body of the post. If used at all, maximum 3 at the very end below a line break.
- No engagement bait ("Like if you agree", "Share this with someone who needs it"). It kills credibility on LinkedIn.
- Every sentence must earn its place. If you can cut it without losing value, cut it.
- Use emojis strategically and sparingly — numbered emojis (1️⃣ 2️⃣ 3️⃣), arrows (↳ →), checkmarks (✅), and pointers (👉) are functional. Decorative emojis are fine but don't overdo them.
- Opinions > generic facts. LinkedIn rewards bold, specific takes from experience.
- No "I think" or "In my opinion" — state opinions as earned truths from experience.
- End with engagement drivers: direct questions, invitations to share experiences, or specific CTAs — but make them specific to the topic, not generic.

### Voice-Matching Rules
- Study the reference posts in linkedin-posts.md to absorb the writing DNA — the rhythm, the sentence length, the way ideas are paced.
- Match the conversational, peer-to-peer tone. Not guru-to-student. Not corporate-to-employee. Founder-to-founder.
- Use the same structural patterns: short opener → context → value → engaging closer.
- If FOUNDER_CONTEXT.md exists, weave in the founder's specific terminology, industry language, and brand voice.
- The posts should sound like they were written by a real person sharing real experience — never like AI-generated content.
- Do NOT copy phrases or examples directly from the reference posts. Create original content that matches the voice structurally.

### Format-Specific Rules
- **Lessons Learned:** Lead with credential. Each numbered item needs 2-4 lines of context, not just a title. End with a question.
- **Actionable Blueprint:** Every step must be actionable with specific tools/numbers. End with math that proves the outcome.
- **Personal Story:** Start with emotion. Use short sentences for tension. Lesson must feel earned by the narrative. End with an invitation to share.
- **Strategy Breakdown:** Lead with surprising stat or result. Use numbered sub-points with arrows (↳). End with a next step.
- **Case Study:** Use real company names. Lead with counterintuitive insight. Show contrast with "normal." End with a question.
- **Industry Hot Take:** Take a clear side — no hedging. Build argument progressively. Closer must be quotable and memorable.
- **Quick Hack:** Start with "Quick hack" signal. Show before/after. Use visual markers (✅ 👉). Keep it short. Push to action.

### The Engagement Test
Before finalizing ANY post, ask yourself: "Would someone save this post, leave a comment, or send it to a colleague?" If the answer is no — the post isn't good enough. Rewrite it.

---

## Output Format
Present exactly 2 posts, each labeled with its format:

```markdown
## Your 2 LinkedIn Posts

**Topic:** [User's topic]

---

### Post 1 — [Format Name]

[Full post text, ready to copy and paste]

---

### Post 2 — [Format Name]

[Full post text, ready to copy and paste]
```

**Example:**

```markdown
## Your 2 LinkedIn Posts

**Topic:** Why personal branding matters for SaaS founders

---

### Post 1 — Industry Hot Take

We've officially entered an era where anyone can build a SaaS overnight.

Lovable. Cursor. Replit. Bolt.

19-year-olds are going from idea to working prototype in 48 hours.

So here's the real question:

If anyone can build it, why should anyone buy YOURS?

The answer isn't your feature set. It's not your pricing.

It's you.

Your personal brand is the only unfakeable moat left.

When someone sees your product for the first time, they're not evaluating the tech.

They're evaluating the founder.

The game has changed.

It's not about who can build it.

It's about who can distribute it.

—

Trust the founder = trust the SaaS.

---

### Post 2 — Lessons Learned

I run a 23-person software development agency.

Here are 3 things that moved the needle more than any feature we ever built:

1️⃣ Building in public

↳ We started sharing our process, wins, and failures online. Within 6 months, 40% of our inbound leads mentioned our content. Trust was already built before the first call.

2️⃣ Showing up as a founder, not a company

↳ People don't follow logos. They follow people. The day I started posting as myself instead of the company brand, engagement went up 5x.

3️⃣ Owning a specific niche

↳ We stopped trying to be "the agency for everyone" and focused on Marketing, Healthcare, and Fintech. Referrals tripled because people could finally describe what we do in one sentence.

—

What's the one thing that moved the needle most in your business?
```

---

## References

**These files MUST be read using the Read tool before generating any posts (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/linkedin-formats.md` | 7 proven LinkedIn post formats with structure templates, psychology, rules, and when-to-use matching logic |
| `./references/linkedin-posts.md` | 8+ proven viral LinkedIn posts organized by format — the example and voice library |

**Why both matter:** Formats provide the structural blueprint — when to use each format, how to build it, and what rules to follow. Posts show those formats executed with a real voice — the rhythm, personality, and style that makes LinkedIn content feel authentic instead of AI-generated. Formats alone = correct structure. Formats + Posts = viral content with a human voice.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/linkedin-formats.md` before generating posts
- [ ] I read `./references/linkedin-posts.md` before generating posts
- [ ] I have all format definitions and example posts in context

### Format Verification
- [ ] Each post uses a DIFFERENT format from linkedin-formats.md (no repeats)
- [ ] Each post follows its format's structure template exactly
- [ ] Format selection matches the user's topic based on the auto-selection logic
- [ ] Format-specific rules are followed

### Voice Verification
- [ ] Both posts match the voice DNA from the reference posts
- [ ] Posts sound conversational and authentic — not AI-generated or corporate
- [ ] FOUNDER_CONTEXT.md brand voice is blended in (if it exists)
- [ ] Short paragraphs, frequent line breaks, specific numbers throughout

### Content Verification
- [ ] Both posts are about the user's specific topic (not generic filler)
- [ ] Each post contains specific details, numbers, or examples (nothing vague)
- [ ] First 2 lines of each post work as a compelling hook above the "see more" fold
- [ ] No hashtags in body text, no engagement bait, emojis used sparingly and functionally
- [ ] Each post is ready to copy-paste and post immediately — no placeholders
- [ ] Posts end with engagement drivers (questions, CTAs) specific to the topic

### The Engagement Test
- [ ] Would someone save Post 1 or leave a comment? If no → rewrite
- [ ] Would someone save Post 2 or leave a comment? If no → rewrite

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Number of posts:** 2 (each in a different format)
- **Format selection:** Auto-selected based on topic (see Step 3)
- **Goal:** Maximize engagement (saves, comments, profile visits)
- **Audience:** Founders, entrepreneurs, marketers (unless FOUNDER_CONTEXT specifies otherwise)
- **Tone:** Conversational, peer-to-peer, experienced (matched from reference posts)
- **Post length:** 600-1,500 characters (LinkedIn sweet spot for engagement)
- **Hook style:** Compelling enough to click "see more" — first 2 lines must stand alone
- **Topic specificity:** Use the user's exact topic — never drift to generic business advice

Document any assumptions made in the output.
