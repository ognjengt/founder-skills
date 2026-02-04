# Element Audit Framework

Systematic framework for analyzing and optimizing landing page elements. Use this to audit HTML/CSS structure and provide specific recommendations.

---

## Element Extraction Checklist

When analyzing a landing page, extract and evaluate these elements:

### Typography Elements
| Element | What to Check | CRO Impact |
|---------|---------------|------------|
| H1 | One per page, clear value prop | Primary conversion driver |
| H2 | Section clarity, story when read alone | Scannability |
| H3-H6 | Hierarchy logic, not overused | Information architecture |
| Body text | Readability, sentence length | Comprehension |
| Button text | Action-oriented, specific | Click-through rate |

### Visual Elements
| Element | What to Check | CRO Impact |
|---------|---------------|------------|
| Hero image/video | Relevance, quality, load time | First impression |
| Product screenshots | Actual product, not mockups | Trust and clarity |
| Icons | Consistent style, meaningful | Scannability |
| Social proof images | Real photos, not stock | Credibility |
| Background colors | Contrast, hierarchy support | Visual flow |

### Interactive Elements
| Element | What to Check | CRO Impact |
|---------|---------------|------------|
| Primary CTA | Placement, copy, contrast | Direct conversion |
| Secondary CTA | Clear differentiation | Alternative paths |
| Forms | Field count, labels, validation | Friction level |
| Navigation | Simplicity, relevance | Distraction control |
| Sticky elements | Helpfulness vs. annoyance | Persistent conversion |

---

## H1 Audit Criteria

### Clarity Test
Score each criterion (0-2 points):
- [ ] Answers "What is this?" (0-2)
- [ ] Answers "Who is it for?" (0-2)
- [ ] Answers "Why should I care?" (0-2)
- [ ] Uses simple language (no jargon) (0-2)
- [ ] Under 10 words (0-2)

**Score interpretation:**
- 8-10: Strong H1
- 5-7: Needs refinement
- 0-4: Rewrite required

### H1 Patterns That Convert

**Outcome-focused:**
```
"[Achieve outcome] without [pain point]"
Example: "Ship projects faster without the chaos"
```

**Problem-solution:**
```
"Stop [problem]. Start [solution]."
Example: "Stop losing deals. Start closing them."
```

**Quantified benefit:**
```
"[Specific number] [outcome] in [timeframe]"
Example: "10 qualified leads per day in 30 days"
```

**Replacement:**
```
"[Product category] that actually [works/delivers]"
Example: "A CRM that salespeople actually use"
```

### H1 Anti-Patterns to Flag

| Anti-Pattern | Example | Problem |
|--------------|---------|---------|
| Jargon | "AI-powered synergy platform" | Unclear |
| Clever wordplay | "We're nuts about data" | Clarity lost |
| Multiple ideas | "Track, analyze, optimize, and grow" | No focus |
| Vague benefit | "Work smarter" | Not specific |
| Feature-first | "Cloud-based task management" | Not outcome |

---

## CTA Audit Criteria

### Button Copy Evaluation

**Strong CTA patterns:**
```
[Action verb] + [What they get]
- "Get your free report"
- "Start my free trial"
- "See how it works"
- "Claim your discount"
```

**Weak CTA patterns to flag:**
```
- "Submit" (generic, no value)
- "Sign Up" (commitment, no benefit)
- "Learn More" (vague, low intent)
- "Click Here" (meaningless)
- "Get Started" (okay, but could be stronger)
```

### CTA Placement Checklist
- [ ] Visible above the fold
- [ ] Appears after trust signal
- [ ] Repeated after new value information
- [ ] Not competing with other CTAs
- [ ] Sufficient contrast from background
- [ ] Adequate whitespace around it

### CTA Commitment Ladder

Match CTA to user awareness:

| Traffic Temperature | CTA Type | Examples |
|--------------------|----------|----------|
| Cold (unaware) | Low commitment | "See how it works", "Watch demo" |
| Warm (problem-aware) | Medium commitment | "Get free guide", "See pricing" |
| Hot (solution-aware) | Higher commitment | "Start free trial", "Book demo" |
| Ready (product-aware) | Purchase | "Buy now", "Get started for $X" |

---

## Form Audit Criteria

### Field Necessity Test
For each field, ask:
1. Do we need this to deliver value? (Yes/No)
2. Can we get this later? (Yes/No)
3. Does this increase or decrease trust? (Increase/Decrease/Neutral)

**If answers are No, Yes, Decrease → Remove the field**

### Field Count Benchmarks
| Form Type | Max Fields | Ideal Fields |
|-----------|------------|--------------|
| Newsletter signup | 1 | Email only |
| Free trial | 2 | Email + Password |
| Demo request | 4 | Name, Email, Company, Role |
| Contact form | 5 | Name, Email, Company, Message, Phone (optional) |

### Form Friction Reducers
- [ ] "No credit card required" near submit
- [ ] Privacy assurance near email field
- [ ] Social login option (Google, LinkedIn)
- [ ] Progress indicator for multi-step
- [ ] Inline validation (not just on submit)

---

## Social Proof Audit

### Types by Strength
| Type | Strength | Best Use |
|------|----------|----------|
| Specific testimonial with result | Highest | Near CTA, objection handling |
| Case study with metrics | High | Mid-page, consideration stage |
| Customer logos | Medium | Early, credibility establishment |
| User count | Medium | Hero area, scale proof |
| Third-party ratings (G2, etc.) | High | Trust section, footer |
| Media mentions | Medium | Above fold or trust section |

### Testimonial Quality Checklist
- [ ] Real name (not just initials)
- [ ] Real photo (not stock)
- [ ] Role/company
- [ ] Specific outcome or metric
- [ ] Addresses a likely objection
- [ ] Length appropriate (2-4 sentences)

### Social Proof Placement Rules
1. Logo bar: Immediately after hero
2. Testimonials: Next to features they validate
3. Metrics: Near CTAs to reduce risk perception
4. Ratings: Trust section or footer
5. Case studies: Mid-page, after features

---

## Trust Signal Audit

### Trust Element Checklist
- [ ] Security badges (SSL, payment security)
- [ ] Compliance certifications (SOC 2, GDPR, HIPAA)
- [ ] Third-party ratings/reviews
- [ ] Money-back guarantee
- [ ] Customer count or metrics
- [ ] Partner/integration logos
- [ ] Press/media logos
- [ ] Industry awards

### Trust Signal Placement
| Signal Type | Best Position | Rationale |
|-------------|---------------|-----------|
| Security badges | Near forms/payment | Reduces friction |
| Guarantees | Near CTA | Risk reversal |
| Customer logos | After hero | Early credibility |
| Compliance | Footer or enterprise section | B2B concerns |
| Awards | Social proof section | Third-party validation |

---

## Visual Hierarchy Audit

### Eye Flow Test
Trace the natural eye path on the page:
1. Where does the eye land first?
2. Where does it go second?
3. Where does it go third?

**Ideal flow:** Headline → Value prop → CTA

### Hierarchy Violations to Flag
- [ ] Multiple elements with same visual weight
- [ ] CTA less prominent than decorative elements
- [ ] Important info in low-contrast areas
- [ ] No clear focal point above the fold
- [ ] Text competing with busy background

### Color Contrast Checks
- [ ] CTA button stands out from background
- [ ] Text readable on all backgrounds
- [ ] Links distinguishable from body text
- [ ] Form fields clearly defined

---

## Mobile Audit Checklist

### Above Fold (Mobile)
- [ ] H1 visible without scrolling
- [ ] CTA visible without scrolling
- [ ] Text readable without zooming
- [ ] Touch targets 44px minimum
- [ ] No horizontal scroll required

### Mobile-Specific Issues
| Issue | Detection | Fix |
|-------|-----------|-----|
| Tiny tap targets | Button < 44px | Increase padding |
| Text too small | Body < 16px | Increase font size |
| Form friction | Many fields visible | Progressive disclosure |
| Slow load | Large images | Compress, lazy load |
| Hidden CTA | Below fold | Sticky CTA bar |

---

## Page Speed Impact

### Critical Metrics
| Metric | Target | CRO Impact |
|--------|--------|------------|
| First Contentful Paint | < 1.8s | Bounce rate |
| Largest Contentful Paint | < 2.5s | Engagement |
| Cumulative Layout Shift | < 0.1 | User frustration |
| Time to Interactive | < 3.8s | Conversion rate |

### Common Speed Issues to Flag
- [ ] Uncompressed images
- [ ] No lazy loading
- [ ] Render-blocking scripts
- [ ] Too many fonts
- [ ] No image CDN
- [ ] Large JavaScript bundles

---

## Output Format for Element Audit

When auditing elements, structure findings as:

```
## [Element Type] Audit

### Current State
[Description of current implementation]

### Issues Found
1. [Specific issue] - [Principle violated]
2. [Specific issue] - [Principle violated]

### Recommendations
1. [Specific change] - [Expected impact]
2. [Specific change] - [Expected impact]

### Priority
[High/Medium/Low] - [Reasoning]
```
