---
name: sop-creator
version: v1.0.0
description: Creates detailed Standard Operating Procedures (SOPs) for business processes. Use when user needs SOPs, process documentation, operational guides, workflow documentation, or step-by-step instructions for repeatable business processes.
---

# SOP Creator

## Purpose
Transform unstructured process descriptions into clear, actionable Standard Operating Procedures written at a 5th-grade reading level.

---

## Execution Logic

**Check $ARGUMENTS first to determine execution mode:**

### If $ARGUMENTS is empty or not provided:
Respond with:
"sop-creator loaded, describe the process you want to document"

Then wait for the user to provide their process description in the next message.

### If $ARGUMENTS contains content:
Proceed immediately to Task Execution (skip the "loaded" message).

---

## Task Execution

When process description is available (either from initial $ARGUMENTS or follow-up message):

### 1. Check for Business Context
Check if `FOUNDER_CONTEXT.md` exists in the project root.
- **If it exists:** Read it and use the business context to personalize your output (company name, brand voice, industry specifics, audience, tools used).
- **If it doesn't exist:** Proceed using defaults from "Defaults & Assumptions".

### 2. Analyze Initial Input
From the user's initial description, extract what's available:
- Process name or title
- Who performs this process (role/skill level)
- Tools or systems involved
- Expected outcome or end state
- Any compliance or quality requirements
- Critical steps mentioned

### 3. Ask Clarifying Questions (If Needed)
**Use AskUserQuestion tool** to gather missing critical information. Ask a maximum of 5 questions, but fewer is better — stop as soon as you have enough to create a complete SOP.

**Question Bank (priority order):**

| # | Question | Why it matters | Skip if... |
|---|----------|----------------|------------|
| 1 | What is the exact process you want documented? | Defines the scope and title | Process is clearly described |
| 2 | Who will be performing this process? (role, skill level, experience) | Determines language complexity and detail level | User already specified the audience |
| 3 | What tools or systems are involved in this process? | Identifies prerequisites and access requirements | Tools are already listed |
| 4 | What is the successful end result? How do you know the process is done correctly? | Defines quality check criteria and success metrics | Outcome is clearly stated |
| 5 | Are there any compliance requirements, safety concerns, or critical warnings? | Ensures important cautions are included | No regulatory or safety concerns |

**Question strategy:**
- Ask 2-3 questions per batch using AskUserQuestion
- If the first batch answers provide enough detail, stop asking
- Never ask more than 5 questions total
- Only ask questions that block correct execution

### 4. Generate the SOP
Using the information gathered, create a complete SOP following the structure in **Output Format**:

1. **Write at 5th-grade reading level** — short sentences, simple words
2. **One action per step** — no compound instructions
3. **Start each step with action verbs** — "Click", "Open", "Verify", "Enter"
4. **Include expected results** — tell users what they should see
5. **Add warnings for critical steps** — prevent common mistakes
6. **Create quality checks** — define "done" explicitly

### 5. Format and Verify
- Structure output according to **Output Format** section
- Complete **Quality Checklist** self-verification before presenting output
- Ensure the SOP can be followed by someone unfamiliar with the process

---

## Writing Rules
Hard constraints. No interpretation.

### Core Rules
- Write at a 5th-grade reading level
- Use short sentences (10-15 words maximum)
- Use simple, common words — avoid jargon or explain it immediately
- One action per step — never combine multiple actions
- Start each step with an action verb (Click, Open, Enter, Verify, Check)
- Include the expected result after each critical step
- Never invent steps — only document what was described or confirmed

### SOP-Specific Rules
- Title format: "SOP: [Process Name]" (clear and searchable)
- Version info is mandatory — SOPs must be version-controlled
- Prerequisites must be explicit — no hidden requirements
- Quality checks must be measurable — avoid subjective criteria
- Common problems section is required — capture known failure modes
- Tools section must include access/permissions needed

### Audience Rules
- Assume zero prior knowledge unless specified otherwise
- Define acronyms on first use
- Explain "why" for non-obvious steps
- Include screenshots placeholders where visual guidance helps
- Add warnings before destructive or irreversible actions

---

## Output Format

The SOP follows this exact structure:

```markdown
# SOP: [Process Name]

**Version:** 1.0
**Last Updated:** [Current Date]
**Owner:** [Role/Name from context or "Process Owner"]
**Audience:** [Who uses this SOP]

---

## 1. Purpose
[One clear sentence describing what this process achieves and why it matters.]

## 2. Who Does This
[Role or skill level of person performing this process]

## 3. Tools You Need
- [Tool 1]
- [Tool 2]
- [Access/permissions required]

## 4. Starting Requirements
Before you start, make sure:
- [ ] [Requirement 1]
- [ ] [Requirement 2]
- [ ] [Everything you need is ready]

## 5. Step-by-Step Instructions

### Step 1: [Action Title]
1. [Do this specific action]
2. [Do this specific action]

**What you should see:** [Expected result or outcome]

### Step 2: [Action Title]
1. [Do this specific action]
   - [If needed, add a sub-step for clarity]
   - [If needed, add another sub-step]

**Warning:** [Important thing that could go wrong or caution]

### Step 3: [Action Title]
1. [Do this specific action]

**What you should see:** [Expected result]

[Continue with numbered steps until process completion...]

## 6. Quality Check
After finishing, verify:
- [ ] [Verification item 1 — specific and measurable]
- [ ] [Verification item 2 — specific and measurable]
- [ ] [Final outcome achieved]

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| [Specific problem] | [Root cause] | [Clear solution] |
| [Specific problem] | [Root cause] | [Clear solution] |

## 8. Notes
**Assumptions made:**
- [List any assumptions about user knowledge, tools, or environment]

**Who to ask for help:** [Role or person]

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial version |
```

---

## Quality Checklist (Self-Verification)

Before finalizing output, verify ALL of the following:

### Pre-Execution Check
- [ ] I checked for FOUNDER_CONTEXT.md and applied business context if available
- [ ] I asked clarifying questions only for genuinely missing information
- [ ] I asked 5 or fewer questions total

### Content Check
- [ ] Process title is clear and specific
- [ ] Purpose statement is one clear sentence
- [ ] All tools and access requirements are listed
- [ ] Prerequisites are explicit and checkable
- [ ] Every step starts with an action verb
- [ ] No step assumes hidden knowledge
- [ ] Expected results are included for critical steps
- [ ] Warnings are placed before risky actions

### Writing Check
- [ ] Language is at 5th-grade reading level
- [ ] Sentences are short (10-15 words)
- [ ] No jargon without explanation
- [ ] Each step contains one action only
- [ ] Steps are in correct sequential order

### Output Check
- [ ] Quality checks are specific and measurable
- [ ] Common problems section includes likely issues
- [ ] Success state is explicitly defined
- [ ] The SOP can be followed without additional context
- [ ] Version info is complete

**If ANY check fails → revise before presenting.**

---

## Defaults & Assumptions

Use these unless the user specifies otherwise:

- **Audience:** Beginner with no prior knowledge of this specific process
- **Reading level:** 5th grade (simple words, short sentences)
- **Version:** 1.0
- **Author:** From FOUNDER_CONTEXT.md if available, otherwise "Process Owner"
- **Last Updated:** Current date
- **Process type:** Repeatable business process (not one-time task)
- **Completion time:** Not specified unless mentioned
- **Permissions:** Standard user access unless specified otherwise

Document all assumptions made in the **Notes** section of the SOP.

---
