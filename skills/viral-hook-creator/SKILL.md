---
name: viral-hook-creator
version: v1.2.0
description: Creates viral social media hooks using proven psychological patterns. Use when user needs attention-grabbing openings for posts, threads, videos, or content.
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

### 1. Check for Business Context
Before generating hooks, check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize your output (industry/niche terminology, target audience pain points, brand voice and tone, company positioning and authority, key metrics/achievements).
- **If it doesn't exist:** Proceed without it, using defaults from the "Defaults & Assumptions" section.

### 2. Analyze Input
From the user's requirements, extract:
- Content topic/theme
- Target platform (X, LinkedIn, Instagram, TikTok, general)
- Goal (awareness, education, engagement, conversion)
- Target audience demographics and psychographics
- Available social proof (stats, achievements, research)

For any missing information, apply defaults from the **"Defaults & Assumptions"** section.

### 3. Generate Hooks
- Follow all **Writing Rules** (Core Rules, Pattern-Specific Rules, Platform-Specific Adaptations)
- Create 3 hook options using different psychological patterns (or number specified by user)
- Ensure each hook is differentiated and uses a unique pattern

### 4. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification

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
- **X/Twitter**: Punchy, contrarian, data-driven, 280 char max.
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

## Quality Checklist (Self-Verification)

Before finalizing, verify:

- All hooks create genuine curiosity without being misleading.
- Hooks align with the content they introduce (no bait-and-switch).
- Language matches platform norms and brand voice.
- Specific numbers/stats are used where available.
- Each hook uses a different psychological pattern.
- Hooks are differentiated enough to provide real options.
- Character limits are respected for specified platform.
- Hooks avoid overused phrases ("game changer", "secret sauce", etc.).

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

### Hook Pattern Library
**IMPORTANT:** Before generating hooks, read the `./references/hook-patterns.md` file. This file contains:
- 17 proven hook patterns with templates and examples
- Psychology behind each pattern
- Best use cases for different content types
- Pattern Selection Matrix (match goal to best patterns)
- Platform-Pattern Fit guide (which patterns work best per platform)

**How to use:**
1. Read the hook-patterns.md file to understand all available patterns
2. Based on the user's goal and platform, consult the Pattern Selection Matrix to choose appropriate patterns
3. Use the templates and examples as inspiration while maintaining the Writing Rules
4. Adapt patterns to the user's specific context and business (especially if FOUNDER_CONTEXT.md exists)

Example pattern selections:
- For LinkedIn authority building → Use patterns: Authority Credibility, Analysis-Based, Achievement with Constraint
- For X/Twitter engagement → Use patterns: Opposite/Contrarian, Data-Driven, The Unexpected
- For Instagram quick value → Use patterns: Tools/Resources, Tiny Change, Steal My Process

---
