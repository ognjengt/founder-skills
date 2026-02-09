---
name: prd-generator
description: Generates professional PRD (Product Requirements Document) files optimized for AI coding tools. Takes a rough product idea, asks clarifying questions, and outputs a structured PDF ready to feed into AI coding assistants.
---

# PRD Generator

## Purpose
Transform a rough product idea into a comprehensive, AI-ready Product Requirements Document (PDF) through targeted questions and structured output.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"prd-generator loaded, describe your product idea"

Then wait for the user to provide their product concept in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

### 1. MANDATORY: Read Reference Files FIRST
**BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

Before doing ANYTHING else, use the Read tool to read:
- `./references/prd_template.md`

This template defines the exact structure your PRD must follow. **DO NOT PROCEED** to Step 2 until you have read this file.

### 2. Skip Business Context
**This skill intentionally DOES NOT read FOUNDER_CONTEXT.md.** PRDs are standalone documents that should contain all necessary context within them.

### 3. Analyze Initial Input
From the user's initial description, extract what's available:
- Product name or working title
- Core problem being solved
- Target users/audience
- Key features mentioned
- Technical preferences (if any)
- Constraints or requirements (if any)

### 4. Ask Clarifying Questions
**Use AskUserQuestion tool** to gather missing information. Ask up to 7 questions maximum, but fewer is better — stop as soon as you have enough to build a comprehensive PRD.

**Question Bank (priority order):**

| # | Question | Why it matters | Skip if... |
|---|----------|----------------|------------|
| 1 | Who is the primary user? What's their role and technical level? | Shapes all UX decisions and feature complexity | User persona is clearly described |
| 2 | What's the core problem this solves? What happens if users don't have this? | Defines the value proposition and success metrics | Problem statement is explicit |
| 3 | What are the 3-5 must-have features for launch (P0)? | Prevents scope creep, focuses MVP | Features are already listed with clear priority |
| 4 | What technology preferences or constraints exist? (Language, framework, hosting) | Determines technical architecture section | Tech stack is specified |
| 5 | Are there any integrations required? (Auth providers, APIs, third-party services) | Identifies dependencies and integration complexity | No external services mentioned or user says standalone |
| 6 | What does success look like? Any specific metrics to track? | Defines goals and success metrics section | Metrics or goals are already stated |
| 7 | Any design preferences or existing brand guidelines to follow? | Shapes UI/UX requirements section | Design is flexible or already described |

**Question strategy:**
- Ask 2-4 questions per batch using AskUserQuestion
- If the first batch answers provide enough detail, stop asking
- Never ask more than 7 questions total
- Group related questions when possible

### 5. Generate the PRD
Using the template structure from `./references/prd_template.md`, create a complete PRD:

1. **Fill every applicable section** from the template
2. **Be specific** — vague requirements produce vague code
3. **Write acceptance criteria** for every feature — make them testable
4. **Prioritize ruthlessly** — P0 should be 30-40% of features
5. **The "Implementation Notes for AI" section is mandatory** — this is what makes it AI-ready

### 6. Save and Convert to PDF

**Step 6a: Create output folder**
```bash
mkdir -p ./prd_outputs/[Project Name]/
```
Use the product name with spaces, e.g., `./prd_outputs/Churn Prevention Tool/`

**Step 6b: Save markdown file**
Write the PRD content to:
```
./prd_outputs/[Project Name]/[project_name]_PRD.md
```
Use snake_case for the filename, e.g., `churn_prevention_tool_PRD.md`

**Step 6c: Convert to PDF**
Run:
```bash
npx md-to-pdf "./prd_outputs/[Project Name]/[project_name]_PRD.md"
```
This creates `[project_name]_PRD.pdf` in the same folder.

### 7. Confirm Output
Tell the user:
- Where the PDF is saved (full path)
- Where the markdown source is saved
- Brief summary of what's in the PRD

---

## Writing Rules

### Core Rules
- Every feature MUST have testable acceptance criteria
- Use specific numbers, not vague terms ("loads in <2s" not "loads quickly")
- P0 features should be 30-40% of total features — if everything is P0, nothing is
- Data models must include field types and relationships
- API specs must include request/response examples

### PRD-Specific Rules
- Executive summary: 3-5 sentences maximum
- Problem statement: Must include current state, pain points, and business impact
- User personas: Maximum 3 primary personas — more creates confusion
- Tech architecture: Describe data flow in plain English — AI tools interpret this better than complex diagrams
- Implementation Notes for AI section: This is mandatory, never skip it

### Format Rules
- Use markdown headers consistently (# for title, ## for sections, ### for subsections)
- Use tables for structured data (metrics, data models, API specs)
- Use code blocks for JSON examples and technical specs
- Use checkboxes for acceptance criteria

---

## Output Format

The PRD follows the structure in `./references/prd_template.md`. Here's a condensed example:

```markdown
# TaskFlow — Product Requirements Document

**Version:** 1.0
**Date:** 2024-01-15
**Author:** PRD Generator
**Status:** Draft

## Executive Summary
TaskFlow is a task management tool for remote engineering teams...

## Problem Statement
**Current state:** Teams use disconnected tools...
**Pain points:**
1. Context switching between tools
2. No visibility into team workload
3. Async communication gaps

**Impact:** 5+ hours/week lost per engineer...

## Goals & Success Metrics
| Goal | Metric | Target | Measurement |
|------|--------|--------|-------------|
| Reduce context switching | Tool switches/day | < 10 | Analytics |

## User Personas
### Engineering Manager
- **Role:** Manages 5-10 engineers
- **Goals:** Visibility into sprint progress...

## Functional Requirements

### FR-001: Task Creation
**Description:** Users can create tasks with title, description, assignee, and due date.

**User story:** As an engineer, I want to create tasks quickly so that I capture work items without friction.

**Acceptance criteria:**
- [ ] Task creation completes in < 500ms
- [ ] Title field is required, minimum 3 characters
- [ ] Due date defaults to end of current sprint

**Priority:** P0

...

## Implementation Notes for AI

### Build Order
1. Database schema (PostgreSQL)
2. API endpoints (Express.js)
3. Frontend components (React)
4. Auth integration (Clerk)

### Libraries to Use
- Prisma for ORM — type-safe, great DX
- TanStack Query for data fetching — handles caching
- Tailwind CSS for styling — utility-first, fast iteration

### Critical Implementation Details
- All dates stored as UTC, converted to user timezone on display
- Use optimistic updates for task status changes
- Implement soft deletes for all user-generated content
```

---

## References

**This file MUST be read using the Read tool before task execution (see Step 1):**

| File | Purpose |
|------|---------|
| `./references/prd_template.md` | Complete PRD structure with all 15 sections, format examples, and usage notes |

**Why this matters:** The template ensures every PRD follows a consistent, comprehensive structure that AI coding tools can parse and implement. Skipping the template results in incomplete PRDs that miss critical sections.

---

## Quality Checklist (Self-Verification)

### Pre-Execution Check
- [ ] I read `./references/prd_template.md` before starting
- [ ] I have the template structure in context

### Question Check
- [ ] I asked 7 or fewer questions total
- [ ] I only asked questions where information was genuinely missing
- [ ] Questions were batched (2-4 per AskUserQuestion call)

### PRD Content Check
- [ ] Executive summary is 3-5 sentences
- [ ] Every feature has acceptance criteria (checkboxes)
- [ ] P0 features are ~30-40% of total (not everything)
- [ ] Data models include field types
- [ ] API specs include request/response examples
- [ ] "Implementation Notes for AI" section is complete

### Output Check
- [ ] Markdown file saved to `./prd_outputs/[Project Name]/`
- [ ] PDF generated via `npx md-to-pdf`
- [ ] User informed of file locations

**If ANY check fails → fix before completing.**

---

## Defaults & Assumptions

Use these unless the user specifies otherwise:

- **Document version:** 1.0
- **Status:** Draft
- **Author:** PRD Generator
- **Tech stack:** Modern web (React + Node.js + PostgreSQL) unless specified
- **Hosting:** Cloud-native (Vercel/Railway/AWS) unless specified
- **Auth:** Third-party (Clerk/Auth0) unless building custom
- **Priority split:** ~35% P0, ~40% P1, ~25% P2
- **User personas:** Maximum 3 unless complexity demands more
- **API style:** REST unless GraphQL is specified

Document any assumptions made in the PRD output.
