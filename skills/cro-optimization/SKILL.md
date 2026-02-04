---
name: cro-optimization
version: v1.0.0
description: Analyzes landing pages and provides detailed CRO (Conversion Rate Optimization) recommendations. Use when user provides a landing page URL or HTML/CSS code and needs optimization advice to maximize conversions, signups, or sales. Extracts page elements, audits against proven CRO principles, and delivers actionable recommendations in report format.
---

# CRO Optimization

## Purpose
Analyze a landing page and deliver a comprehensive CRO audit with specific, actionable recommendations to maximize conversions.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"cro-optimization loaded, provide your landing page URL or paste your HTML/CSS code"

Then wait for the user to provide their landing page in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When landing page is available (either from initial $ARGUMENTS or follow-up message):

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, you MUST use the Read tool to read ALL three reference files:

```
Read: ./references/cro_principles.md
Read: ./references/landing_page_patterns.md
Read: ./references/element_audit_framework.md
```

**What you will find:**
- **cro_principles.md**: 13 core CRO principles with detection criteria and fix patterns
- **landing_page_patterns.md**: Real patterns from high-converting pages (ClickUp, Notion, Stripe, Apple, etc.) organized by category
- **element_audit_framework.md**: Systematic framework for auditing HTML elements, CTAs, forms, and visual hierarchy

**DO NOT PROCEED** to Step 2 until you have read all files and have the principles, patterns, and audit framework loaded in context.

### 2. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize recommendations (industry, target audience, product type, competitors).
- **If it doesn't exist:** Proceed with analysis based on page content alone.

### 3. Fetch and Extract Landing Page
If user provided a URL:
- Use WebFetch to retrieve the landing page content
- Extract and catalog key elements (see Element Extraction below)

If user provided HTML/CSS directly:
- Analyze the provided code directly
- Note any missing context (live styling, images, etc.)

### 4. Element Extraction
Extract and catalog these elements from the page:

**Typography:**
- H1 (should be exactly one)
- H2s (section headers)
- Body text samples
- CTA button copy

**Visual Structure:**
- Above-the-fold content
- Section sequence
- Image/visual placement
- Color scheme and contrast

**Conversion Elements:**
- Primary CTA (copy, placement, design)
- Secondary CTAs
- Forms (field count, labels)
- Trust signals (logos, testimonials, badges)
- Social proof (metrics, reviews, case studies)

**Technical:**
- Mobile responsiveness indicators
- Load speed concerns (large images, etc.)

### 5. Audit Against CRO Principles
For each of the 13 principles in cro_principles.md:
1. Check if the page violates the principle
2. Note specific violations with evidence
3. Determine severity (High/Medium/Low)
4. Draft specific recommendations

**Prioritize by impact:**
- High: Above-fold clarity, CTA effectiveness, major trust gaps
- Medium: Objection handling, visual hierarchy, scannability
- Low: Minor copy tweaks, nice-to-have additions

### 6. Compare to High-Converting Patterns
Using landing_page_patterns.md:
1. Identify the most relevant category (B2B SaaS, E-commerce, etc.)
2. Compare page structure to proven patterns
3. Note missing elements that top performers include
4. Identify opportunities to adopt successful patterns

### 7. Generate Recommendations
For each issue found, provide:
1. **What to change** — specific element and action
2. **Why it matters** — principle violated and expected impact
3. **How to implement** — concrete example or rewrite
4. **Priority** — High/Medium/Low with reasoning

### 8. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification
- Ensure recommendations are specific and actionable (not generic advice)

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Every recommendation must be specific and actionable
- Include before/after examples for copy changes
- Reference the specific principle violated
- Prioritize by conversion impact, not ease of implementation
- Frame changes as testable hypotheses when possible
- Never recommend changes without explaining the "why"

### Analysis Rules
- Audit systematically — don't skip principles
- Note what's working well, not just problems
- Consider the page's apparent target audience
- Account for likely traffic sources
- Distinguish between critical issues and optimizations

### Recommendation Rules
- Lead with highest-impact changes
- Group related recommendations together
- Provide specific copy rewrites, not just "make it clearer"
- Include placement suggestions, not just content suggestions
- Consider mobile experience separately

---

## Output Format

```markdown
# CRO Audit Report: [Page Name/URL]

## Executive Summary
[2-3 sentences: Overall assessment, biggest opportunities, expected impact]

---

## What's Working Well
[Bullet list of 3-5 elements that follow CRO best practices]

---

## Critical Issues (Fix First)

### Issue 1: [Specific Problem]
**Principle Violated:** [Principle name and number]
**Current State:** [What exists now]
**Problem:** [Why this hurts conversions]
**Recommendation:** [Specific fix]
**Example:**
```
BEFORE: [Current copy/element]
AFTER: [Recommended copy/element]
```
**Expected Impact:** [What improvement to expect]

### Issue 2: [Specific Problem]
[Same structure]

---

## High-Impact Optimizations

### Optimization 1: [Improvement Area]
**Current State:** [What exists]
**Opportunity:** [What could be better]
**Recommendation:** [Specific change]
**Example:**
```
BEFORE: [Current]
AFTER: [Recommended]
```
**Priority:** [High/Medium] — [Reasoning]

[Continue for each optimization]

---

## Section-by-Section Analysis

### Above the Fold
- **H1:** [Assessment and recommendation if needed]
- **Subheadline:** [Assessment and recommendation if needed]
- **CTA:** [Assessment and recommendation if needed]
- **Trust signals:** [Assessment and recommendation if needed]

### [Section Name]
[Analysis and recommendations]

[Continue for each major section]

---

## Quick Wins (Easy Implementations)
1. [Simple change with good impact]
2. [Simple change with good impact]
3. [Simple change with good impact]

---

## Testing Roadmap
1. **Test First:** [Highest impact hypothesis]
2. **Test Second:** [Next priority]
3. **Test Third:** [Following priority]

---

## Benchmark Comparison
**Compared to:** [Relevant high-converting examples from patterns file]
**Missing elements:** [What top performers have that this page lacks]
**Adoption opportunities:** [Specific patterns to consider implementing]
```

---

## References

**All three files MUST be read using the Read tool before analysis (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/cro_principles.md` | 13 CRO principles with detection criteria, fix patterns, and violation symptoms |
| `./references/landing_page_patterns.md` | Real patterns from ClickUp, Notion, Stripe, Apple, Shopify, etc. organized by category |
| `./references/element_audit_framework.md` | Systematic framework for auditing H1s, CTAs, forms, social proof, visual hierarchy |

**Why all three matter:** Principles tell you what's wrong. Patterns show you what good looks like. The audit framework ensures you check everything systematically. Together they produce specific, evidence-based recommendations instead of generic CRO advice.

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Analysis Check
- [ ] I read `./references/cro_principles.md` before analyzing
- [ ] I read `./references/landing_page_patterns.md` before analyzing
- [ ] I read `./references/element_audit_framework.md` before analyzing
- [ ] I have all 13 principles, category patterns, and audit criteria in context

### Extraction Check
- [ ] I identified the H1 and assessed its clarity
- [ ] I catalogued all CTAs and their copy
- [ ] I noted social proof elements and placement
- [ ] I evaluated above-the-fold content
- [ ] I assessed the section sequence

### Analysis Check
- [ ] Each principle was evaluated against the page
- [ ] Issues cite specific principles violated
- [ ] Recommendations include before/after examples
- [ ] Priority is assigned based on conversion impact
- [ ] I compared to relevant high-converting patterns

### Output Check
- [ ] Executive summary captures key findings
- [ ] Critical issues are listed first
- [ ] Every recommendation is specific and actionable
- [ ] Testing roadmap provides clear next steps
- [ ] "What's working well" section is included

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless context indicates otherwise:

- **Page type:** SaaS landing page (most common)
- **Traffic temperature:** Mixed (cold to warm)
- **Primary goal:** Signups or demo requests
- **Audience:** Business decision-makers
- **Device split:** 60% desktop, 40% mobile
- **Conversion definition:** Primary CTA click

If the page type is clearly different (e-commerce, content site, etc.), adjust analysis accordingly.

Document any assumptions made in the Executive Summary.

---
