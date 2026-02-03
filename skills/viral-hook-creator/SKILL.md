---
name: viral-hook-creator
version: v1.5.0
description: Creates viral social media hooks using proven psychological patterns and trigger words. Use when user needs attention-grabbing openings for posts, threads, videos, or content.
---

# Viral Hook Creator

## Purpose
Generate 3-5 viral hook options using proven psychological patterns that create curiosity, provide value, and drive engagement. Hooks are optimized for social platforms (X/Twitter, LinkedIn, Instagram, TikTok).

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"viral-hook-creator loaded, proceed with additional instructions"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT - DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read BOTH reference files. This is non-negotiable:

```
Read: ./references/hook-patterns.md
Read: ./references/trigger_words.md
```

**What you will find:**
- **hook-patterns.md**: 17 proven hook patterns with templates, psychology explanations, and the Pattern Selection Matrix
- **trigger_words.md**: Four categories of viral trigger words (Insider, Helper, Thinker, Amplifiers)

**DO NOT PROCEED** to step 2 until you have read both files and have the patterns and trigger words loaded in context.

### 2. Check for Business Context (Optional)
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize your output (industry terminology, audience pain points, brand voice, authority metrics).
- **If it doesn't exist:** Proceed using defaults from the "Defaults & Assumptions" section.

### 3. Analyze Input
From the user's requirements, extract:
- Content topic/theme
- Target platform (X, LinkedIn, Instagram, TikTok, general)
- Goal (awareness, education, engagement, conversion)
- Target audience demographics and psychographics
- Available social proof (stats, achievements, research)

For any missing information, apply defaults from the **"Defaults & Assumptions"** section.

### 4. Generate Viral Hooks
Using the patterns and trigger words you read in Step 1, create hooks:

1. **Select patterns** from hook-patterns.md using the Pattern Selection Matrix (match user's goal + platform)
2. **Draft each hook** using the pattern template as your starting point
3. **Integrate 1-2 trigger words** from trigger_words.md into each hook as you write:
   - **Insider words** (secretly, revealed, hidden, uncovered, etc.) → exclusivity patterns
   - **Helper words** (losing, wasting, bleeding, stealing, etc.) → problem/urgency patterns
   - **Thinker words** (backwards, myth, counterintuitive, paradox, etc.) → contrarian patterns
   - **Amplifiers** (literally, every, zero, completely, etc.) → any pattern for intensity

4. **Follow all Writing Rules** (Core Rules, Pattern-Specific Rules, Platform-Specific Adaptations)
5. **Ensure differentiation** - each hook must use a unique pattern
6. **Verify natural integration** - trigger words should enhance, not distract

### 5. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification
- Verify each hook contains trigger words from the reference file

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Maximum 120 characters for X/Twitter hooks.
- Maximum 1-2 lines (40-60 characters) for video hooks.
- Lead with the most interesting element.
- Create a curiosity gap (promise value but withhold details).
- Use specific numbers when possible (not "many" but "17").
- Avoid clickbait that doesn't deliver.
- Use power words: steal, secret, mistake, never, proven, blueprint.
- No emojis unless platform-specific (Instagram/TikTok OK, LinkedIn/X avoid).
- No fluff or filler words.
- Active voice only.
- Present tense preferred.

### Pattern-Specific Rules
- For authority hooks: Lead with credible metric.
- For list hooks: Use odd numbers (7 > 6, 5 > 4).
- For story hooks: Start with unexpected outcome.
- For data hooks: Lead with surprising stat.
- For cautionary hooks: Lead with mistake/lesson.

### Platform-Specific Adaptations
- **X/Twitter**: Punchy, contrarian, data-driven, 120 char max.
- **LinkedIn**: Professional, achievement-oriented, thought leadership, 40-60 char first line.
- **Instagram**: Visual promise, lifestyle-oriented, aspirational, 125 char before "more" cutoff.
- **TikTok**: Fast-paced, relatable, trend-aware, 20-30 char on-screen text.
- **General**: Versatile, platform-agnostic.

---

## Output Format
Clean and simple. Just hooks with their pattern type as a headline.

```markdown
### [Pattern Name]
[Hook text]

### [Pattern Name]
[Hook text]

### [Pattern Name]
[Hook text]
```

**Example:**
```markdown
### Authority Credibility
I run a 23-person software agency. Here are 5 things I would never do again.

### Data-Driven Insight
I analyzed 1,000 LinkedIn posts. Here are the top 5 patterns that drove engagement.

### Contrarian
Everyone tells you to post daily. I posted 3x per week and got 10x more engagement.
```

---

## Defaults & Assumptions

Use these unless overridden.

- Number of hooks: 3
- Platform: X/Twitter (most restrictive character limit).
- Goal: Maximize engagement (likes, comments, shares).
- Audience: General business/entrepreneurship audience.
- Tone: Professional but conversational (matches most founders).
- Emotion: Curiosity (safest default for viral content).
- Format: Thread/post opener (not video hook).

---

## References

**These files MUST be read using the Read tool before generating any hooks (see Step 1 of Task Execution):**

| File | Purpose |
|------|---------|
| `./references/hook-patterns.md` | 17 proven hook patterns with templates, psychology, and Pattern Selection Matrix |
| `./references/trigger_words.md` | Viral trigger word categories (Insider, Helper, Thinker, Amplifiers) |

**Why both matter:** Hook patterns provide psychological structure. Trigger words amplify emotional impact. Patterns alone = good hook. Patterns + trigger words = viral hook (~10x more engagement).

---

## Quality Checklist (Self-Verification)

Before finalizing, verify ALL of the following:

### Pre-Generation Check
- [ ] I read `./references/hook-patterns.md` before generating hooks
- [ ] I read `./references/trigger_words.md` before generating hooks
- [ ] I have the 17 patterns and 4 trigger word categories in context

### Pattern & Structure Verification
- [ ] Each hook uses a proven pattern from hook-patterns.md (not made-up patterns)
- [ ] Each hook uses a DIFFERENT pattern (no repetition)
- [ ] Pattern templates were adapted to user context
- [ ] Hooks create genuine curiosity without being misleading

### Trigger Word Integration Verification
- [ ] Each hook contains 1-2 trigger words FROM THE FILE I READ
- [ ] Trigger words match pattern types appropriately
- [ ] Trigger words are integrated naturally (not forced)
- [ ] Trigger words enhance emotional impact

### Writing Rules Compliance
- [ ] Character limits respected for platform
- [ ] Specific numbers used (not "many" or "some")
- [ ] Active voice throughout
- [ ] No fluff or overused phrases

### Final Check
If ANY hook is missing trigger words from the reference file or uses patterns not from hook-patterns.md → revise before presenting.

---