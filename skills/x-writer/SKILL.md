---
name: x-writer
version: v1.0.0
description: Creates viral X (Twitter) posts using proven formats, post templates, and creator voice matching. Use when user needs engaging, high-performing posts for X/Twitter.
---

# X Writer

## Purpose
Generate 3 viral X posts in different proven formats, matched to a creator voice, using battle-tested templates and patterns that drive engagement.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"x-writer loaded, proceed with your topic or idea"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read ALL three reference files. This is non-negotiable:

```
Read: ./references/formats.md
Read: ./references/posts.md
Read: ./references/voices.md
```

**What you will find:**
- **formats.md**: 8 proven post formats with structure templates, psychology, and format-specific rules
- **posts.md**: 49+ proven viral posts organized by format type — the example library
- **voices.md**: Creator voice profiles with writing DNA, signature patterns, and example posts

**DO NOT PROCEED** to Step 2 until you have read all three files and have their content in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize output (industry terminology, audience pain points, brand voice, company name, products).
- **If it doesn't exist:** Proceed using defaults from "Defaults & Assumptions."

### 3. Analyze Input & Select Voice
From the user's requirements, extract:
- **Topic/idea** — What they want to post about
- **Goal** — What they want the post to achieve (engagement, authority, education, humor)
- **Voice preference** — If they specified a voice or tone

**Voice Matching Logic:**

If the user specified a voice → use that voice directly.

If the user did NOT specify a voice:
1. Analyze the topic and FOUNDER_CONTEXT.md brand voice
2. Auto-suggest the best match based on topic:
   - Business advice, mindset, pricing, sales, productivity → suggest **Alex Hormozi**
   - Life philosophy, contrarian takes, self-improvement, minimalism → suggest **Naval Ravikant**
   - Startup advice, CEO/founder roles, hiring, company building → suggest **Andrew Gazdecki**
3. Ask the user to confirm using AskUserQuestion:
   - **[Suggested Voice] (Recommended)** — [one-line description of why it fits]
   - **[Other Voice 1]** — [one-line description]
   - **[Other Voice 2]** — [one-line description]
   - **My own voice** — Natural tone based on FOUNDER_CONTEXT.md brand voice

### 4. Generate 3 Viral Posts
Using the formats, posts, and voice you loaded in Steps 1-3:

1. **Select 3 DIFFERENT formats** from formats.md that best fit the user's topic and goal
2. **Study the example posts** in posts.md for those formats — internalize the rhythm, structure, and length
3. **Apply the selected voice** from voices.md — match their sentence structure, rhythm, and signature patterns (not their exact words or examples)
4. **Draft each post** following the format's structure template, the voice's DNA, and all Writing Rules below
5. **Run each post through the Screenshot Test:** "Would someone screenshot this and share it?" If no → rewrite before continuing

**Critical requirements:**
- Each post must use a DIFFERENT format (no repeats)
- Each post must sound like the selected voice (structural match, not word-for-word copy)
- Each post must be about the user's SPECIFIC topic (not generic advice)
- Each post must follow the format's structure template from formats.md
- Each post must be ready to copy-paste and post immediately — no placeholders

### 5. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output
- If any post feels generic, forced, or wouldn't pass the Screenshot Test → rewrite before presenting

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules (Apply to ALL posts)
- Maximum 280 characters for single posts. If a post exceeds 280 characters, it must be structured as a thread (each tweet under 280 characters).
- First line is the hook — it determines whether people click "Show more." Make it the strongest line in the post.
- Use line breaks strategically. White space = visual breathing room = readability.
- No hashtags. They reduce reach and look amateur on X.
- No engagement bait ("like if you agree", "RT if this resonates", "thoughts?"). It kills reach.
- No emojis unless the voice or topic specifically calls for it. When used, maximum 1-2 per post.
- Specific numbers > vague claims ("17 strategies" not "many strategies").
- Opinions > facts. X rewards bold takes, not Wikipedia summaries.
- Active voice only. Never passive.
- Present tense preferred.
- Every word must earn its place. If you can cut a word without losing meaning, cut it.
- No "I think" or "In my opinion" — just state the opinion as fact. Confidence is voice.

### Voice-Matching Rules
- Match the voice's SENTENCE STRUCTURE — short choppy lines vs flowing sentences, fragments vs complete thoughts.
- Match their RHYTHM — how they pace ideas, where they place line breaks, how they build tension.
- Match their PERSPECTIVE — coaching from authority (Hormozi) vs philosophical detachment (Naval) vs peer founder advice (Gazdecki).
- Do NOT copy their exact phrases, examples, or company references. Create original content that SOUNDS like them structurally.
- If the user chose "My own voice," use a natural, conversational tone that matches FOUNDER_CONTEXT.md brand voice. If no context exists, default to direct and conversational.

### Format-Specific Rules
- **One-Liners:** One sentence. One idea. No explanations. Every word carries weight.
- **Two-Part Punch:** Line break between parts. Second part MUST change the meaning of the first.
- **Numbered Lists:** Odd numbers preferred. Each item must be specific and standalone. Strong, opinionated closer.
- **Stacked Progression:** Same grammatical structure per line. Build momentum. The final line MUST break the pattern.
- **Comparison:** Stark, obvious contrast. Don't lecture — let the contrast make the point.
- **Example + Takeaway:** Use real, named companies or people. Minimum 3 examples. Actionable closer.
- **Reverse Advice:** Deadpan delivery. No winking. Every item is a real mistake people make.
- **Humor:** One joke per post. Deadpan > trying hard. Industry-specific > generic. Never explain the joke.

### The Screenshot Test
Before finalizing ANY post, ask yourself: "Would someone screenshot this and share it with their group chat?" If the answer is no — the post isn't good enough. Rewrite it.

---

## Output Format
Present exactly 3 posts, each labeled with its format and voice:

```markdown
## Your 3 X Posts

**Voice:** [Selected voice name]
**Topic:** [User's topic]

---

### Post 1 — [Format Name]

[Full post text, ready to copy and paste]

---

### Post 2 — [Format Name]

[Full post text, ready to copy and paste]

---

### Post 3 — [Format Name]

[Full post text, ready to copy and paste]
```

**Example:**

```markdown
## Your 3 X Posts

**Voice:** Alex Hormozi
**Topic:** Why most SaaS founders fail

---

### Post 1 — Comparison

SaaS founders who fail:

- Build for 6 months in silence
- Launch to crickets
- Blame the market

SaaS founders who win:

- Post the idea before writing code
- Get 50 people to say "I'd pay for that"
- Build only what was validated

The market doesn't lie. Your assumptions do.

---

### Post 2 — One-Liner

The graveyard of failed startups isn't full of bad ideas. It's full of founders who built before they sold.

---

### Post 3 — Stacked Progression

Day 1: "I have a great idea."
Week 2: "The MVP is almost done."
Month 3: "Just a few more features."
Month 6: "Why is no one signing up?"

You shipped a product. You never shipped distribution.
```

---

## References

**These files MUST be read using the Read tool before generating any posts (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/formats.md` | 8 proven post formats with structure templates, psychology, and rules |
| `./references/posts.md` | 49+ proven viral posts organized by format — the example library |
| `./references/voices.md` | Creator voice profiles with writing DNA, signature patterns, and example posts |

**Why all three matter:** Formats provide structural templates for how posts are built. Posts show those templates executed at the highest level with real examples. Voices add the human layer that makes content feel authentic instead of AI-generated. All three together = posts that go viral because they have proven structure + proven patterns + authentic voice.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I read `./references/formats.md` before generating posts
- [ ] I read `./references/posts.md` before generating posts
- [ ] I read `./references/voices.md` before generating posts
- [ ] I have all formats, example posts, and voice profiles in context

### Format Verification
- [ ] Each post uses a DIFFERENT format from formats.md (no repeats)
- [ ] Each post follows its format's structure template exactly
- [ ] Format-specific rules are followed (line counts, structure requirements)

### Voice Verification
- [ ] All 3 posts match the selected voice's sentence structure and rhythm
- [ ] Posts sound like the voice — structurally matched, not copied
- [ ] No phrases or examples were directly lifted from voice example posts

### Content Verification
- [ ] All 3 posts are about the user's specific topic (not generic filler)
- [ ] Each post contains specific details, numbers, or examples (nothing vague)
- [ ] No hashtags, engagement bait, or unnecessary emojis
- [ ] Every post is under 280 characters OR clearly structured as a thread
- [ ] Each post is ready to copy-paste and post immediately

### The Screenshot Test
- [ ] Would someone screenshot Post 1 and share it? If no → rewrite
- [ ] Would someone screenshot Post 2 and share it? If no → rewrite
- [ ] Would someone screenshot Post 3 and share it? If no → rewrite

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user overrides:

- **Number of posts:** 3 (each in a different format)
- **Voice:** Ask user to choose (auto-suggest based on topic and FOUNDER_CONTEXT.md)
- **Goal:** Maximize engagement (likes, reposts, bookmarks)
- **Audience:** Founders, entrepreneurs, builders (unless FOUNDER_CONTEXT specifies otherwise)
- **Tone:** Matches selected voice profile
- **Post type:** Single post (not thread) unless the topic requires more depth
- **Character limit:** 280 characters per post (X standard)
- **Topic specificity:** Use the user's exact topic — never drift to generic startup advice

Document any assumptions made in the output.
