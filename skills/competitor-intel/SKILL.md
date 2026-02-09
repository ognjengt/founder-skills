---
name: competitor-intel
description: Analyzes competitors using web research to provide verified business metrics, actionable leverage strategies, and predicted next moves. Use when user needs competitive intelligence, competitor analysis, market positioning insights, or strategic leverage opportunities.
---

# Competitor Intel

## Purpose
Provide data-backed competitive intelligence by researching real signals across the web—no assumptions, no made-up numbers.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"competitor-intel loaded, proceed with competitor name and any context (website, industry, etc.)"

Then wait for the user to provide their requirements in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When user requirements are available (either from initial $ARGUMENTS or follow-up message):

### 1. Check for Business Context (Optional)
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it to understand your company's positioning, strengths, and goals—this informs the leverage strategies.
- **If it doesn't exist:** Proceed with analysis focused purely on competitor weaknesses.

### 2. Extract Input
From the user's requirements, extract:
- Competitor name (required)
- Competitor website (if provided)
- Industry/vertical (if provided)
- Specific areas of interest (if provided)

### 3. Research Phase — MANDATORY WEB SEARCH
**This skill REQUIRES web search. Do not proceed without searching.**

Execute web searches across these sources:

#### Business Metrics Research
Search for verified data only. Query patterns:
- `"[Competitor]" revenue OR MRR OR ARR site:crunchbase.com`
- `"[Competitor]" funding raised valuation site:crunchbase.com`
- `"[Competitor]" employees headcount site:linkedin.com`
- `"[Competitor]" revenue growth OR metrics`
- `"[Competitor]" pricing customers`
- `"[Competitor]" CEO OR founder interview revenue`
- `"[Competitor]" Series A OR Series B OR funding`

#### Traffic & SEO Research
Search for web traffic and search presence signals:
- `"[Competitor]" site:similarweb.com` (traffic estimates, top pages, traffic sources)
- `"[Competitor]" site:ahrefs.com` (backlinks, domain rating, organic keywords)
- `"[Competitor]" site:semrush.com` (traffic, keyword rankings, ad spend)
- `"[Competitor]" site:trends.google.com` (search interest over time)
- `[Competitor website domain] site:builtwith.com` (tech stack, tools used)

#### Technical & Product Research
Search for product and development signals:
- `"[Competitor]" site:github.com` (open source activity, tech stack, hiring signals)
- `[Competitor GitHub org]` (commit frequency, contributors, project activity)
- `"[Competitor]" API OR integration OR developer`

#### Advertising Research
Search for ad strategy and spend signals:
- Search Meta Ads Library: `https://www.facebook.com/ads/library/` for [Competitor]
- `"[Competitor]" ads site:facebook.com/ads/library`
- `"[Competitor]" advertising spend OR ad budget`
- `"[Competitor]" marketing campaign`

#### Weakness & Sentiment Research
Search for complaints, issues, and struggles:
- `"[Competitor]" reviews site:g2.com`
- `"[Competitor]" reviews site:capterra.com`
- `"[Competitor]" reviews site:trustpilot.com`
- `"[Competitor]" complaints OR issues OR problems`
- `"[Competitor]" "doesn't work" OR "broken" OR "terrible"`
- `"[Competitor]" layoffs OR firing OR cuts`
- `"[Competitor]" lawsuit OR sued`

#### Signal Research (for predictions)
Search for hiring, product, and strategic signals:
- `"[Competitor]" hiring site:linkedin.com`
- `"[Competitor]" job openings`
- `"[Competitor]" new feature OR launch OR release`
- `"[Competitor]" roadmap OR upcoming`
- `"[Competitor]" partnership OR integration`
- `"[Competitor]" site:twitter.com OR site:x.com` (founder/company posts)

### 4. Compile Verified Metrics
From research, extract ONLY verified numbers with sources:
- MRR/ARR (if disclosed)
- Funding raised (total and rounds)
- Valuation (if known)
- Employee count
- Customer count
- Churn rate (if disclosed)
- Growth rate (if disclosed)
- Pricing tiers

**CRITICAL RULE:** If a metric cannot be found with a source, mark it as "Not publicly available" — DO NOT estimate or assume.

### 5. Identify Leverage Opportunities
Analyze collected data to find 3 actionable weak spots:

Look for patterns in:
- **Product gaps**: Features users complain about, missing integrations
- **Service failures**: Support complaints, response times, bugs
- **Pricing friction**: Users complaining about cost, hidden fees, poor value
- **Trust issues**: Security concerns, data breaches, broken promises
- **Operational struggles**: Layoffs, leadership changes, funding difficulties
- **Marketing weaknesses**: Poor ad execution, weak positioning, low engagement

For each weakness, formulate an actionable strategy your company can execute.

### 6. Predict Next Moves
Based on all signals, predict what the competitor will likely do next:

Signals to interpret:
- **Hiring patterns**: Engineering = product push, Sales = growth mode, Support = scaling issues
- **Job postings**: Reveal technology bets, market expansion, new products
- **Funding status**: Recent raise = aggressive expansion, No raise in 2+ years = potential trouble
- **Content/PR**: Topics they're pushing indicate strategic focus
- **Partnership announcements**: Reveal market positioning and gaps
- **Founder activity**: Where they speak, what they post, who they meet

### 7. Format Output
Structure findings according to **Output Format** section.

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Every metric MUST include a source link or be marked "Not publicly available"
- No estimations, assumptions, or "likely" numbers for metrics
- Strategies must be actionable (specific steps, not vague advice)
- Predictions must cite the signals that support them
- Use neutral, analytical tone—not competitive trash talk
- Date all findings (data freshness matters)

### Source Rules
- Prioritize primary sources (company announcements, founder interviews, SEC filings)
- Crunchbase, LinkedIn, G2, Capterra are acceptable secondary sources
- News articles are acceptable if they cite primary sources
- Avoid unverified Twitter/X claims unless from official company accounts

### Strategy Rules
- Each strategy must exploit a verified weakness
- Each strategy must include concrete next steps
- Strategies should be achievable within 30-90 days
- Avoid strategies that require significant capital unless user has it

---

## Output Format

```markdown
# Competitor Intel: [Competitor Name]
**Generated:** [Date]
**Sources searched:** [Count] sources across Crunchbase, LinkedIn, G2, Capterra, news, social

---

## 1. Verified Business Metrics

| Metric | Value | Source | Date |
|--------|-------|--------|------|
| Funding Raised | $X | [Source](url) | [Date] |
| Valuation | $X | [Source](url) | [Date] |
| Employee Count | X | [Source](url) | [Date] |
| MRR/ARR | Not publicly available | — | — |
| Customer Count | ~X | [Source](url) | [Date] |
| Churn Rate | Not publicly available | — | — |

**Key Observations:**
- [Insight about their financial health]
- [Insight about their growth trajectory]

---

## 2. Leverage Strategies

### Strategy 1: [Name]
**Weakness exploited:** [What you found]
**Evidence:** [Quote or data point with source]

**Action steps:**
1. [Specific action]
2. [Specific action]
3. [Specific action]

**Expected outcome:** [What this achieves]

---

### Strategy 2: [Name]
**Weakness exploited:** [What you found]
**Evidence:** [Quote or data point with source]

**Action steps:**
1. [Specific action]
2. [Specific action]
3. [Specific action]

**Expected outcome:** [What this achieves]

---

### Strategy 3: [Name]
**Weakness exploited:** [What you found]
**Evidence:** [Quote or data point with source]

**Action steps:**
1. [Specific action]
2. [Specific action]
3. [Specific action]

**Expected outcome:** [What this achieves]

---

## 3. Predicted Next Moves

### Prediction 1: [What they'll likely do]
**Confidence:** High/Medium/Low
**Supporting signals:**
- [Signal 1 with source]
- [Signal 2 with source]

**Implication for you:** [How to prepare/respond]

### Prediction 2: [What they'll likely do]
**Confidence:** High/Medium/Low
**Supporting signals:**
- [Signal 1 with source]
- [Signal 2 with source]

**Implication for you:** [How to prepare/respond]

---

## 4. Information Gaps
Metrics and data that could not be verified:
- [Item 1]
- [Item 2]

**Suggested next steps to fill gaps:**
- [How to find this information]
```

---

## Quality Checklist (Self-Verification)

Before finalizing, verify ALL of the following:

### Research Check
- [ ] I performed web searches (did not rely on training data alone)
- [ ] I searched Crunchbase, LinkedIn, G2/Capterra, and news sources
- [ ] I searched traffic/SEO sources (Similarweb, Ahrefs, Semrush, Google Trends)
- [ ] I checked BuiltWith for tech stack and GitHub for development signals
- [ ] I searched Meta Ads Library for advertising activity
- [ ] I searched for both positive and negative signals

### Metrics Check
- [ ] Every metric has a source URL or is marked "Not publicly available"
- [ ] No numbers are estimated or assumed
- [ ] Dates are included for data freshness

### Strategy Check
- [ ] All 3 strategies exploit verified weaknesses (not assumptions)
- [ ] Each strategy has concrete, actionable steps
- [ ] Strategies are realistic for a startup to execute

### Prediction Check
- [ ] Each prediction cites specific signals
- [ ] Confidence levels are honest (not all "High")
- [ ] Implications are actionable

### Output Check
- [ ] Output matches the Output Format exactly
- [ ] Tone is analytical, not inflammatory
- [ ] Information gaps are acknowledged

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless overridden:
- Assume user is a startup founder analyzing a direct competitor
- Focus on actionable intelligence (not academic analysis)
- Prioritize recent data (< 12 months old)
- Default confidence for predictions: Medium (unless strong signals exist)
- If industry unknown, infer from competitor's website/positioning

Document any assumptions made in the output.

---
