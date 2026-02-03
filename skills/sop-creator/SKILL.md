---
name: sop-creator
version: v1.0.0
description: Creates detailed Standard Operating Procedures (SOPs) for business processes. Use when user needs SOPs, process documentation, operational guides, or workflow documentation.
---

# SOP Creator

## Purpose
Convert unstructured process descriptions into clear, step-by-step SOPs written at a 5th-grade reading level.

---

## Before Task Execution
Mandatory pre-processing and checks.

### Check for Business Context
Before starting, check if `FOUNDER_CONTEXT.md` exists in the project root.
- If it exists, read it and use the business context to personalize your output (company name, brand voice, industry specifics, target audience).
- If it doesn't exist, proceed without it but note that you may need to ask clarifying questions about business context.

### Pre-Processing Checklist
- Identify the exact process to be documented.
- Identify who will perform this process (role/skill level).
- Identify tools and systems involved.
- Identify the end state ("done").
- Detect missing critical information.

### Gather Information
Ask clarifying questions **only if the information is missing or unclear**.

Possible questions include:
- What process needs to be documented?
- Who will be performing this process? (role / skill level)
- What tools or systems are involved?
- Are there any compliance or quality requirements?
- What is the desired outcome of this process?

Rules:
- Ask a maximum of **5 short questions**.
- Ask only questions that block correct execution.
- Do not ask questions if reasonable defaults can be used.
- If assumptions are made, document them in Notes.

---

## Writing Rules
Hard constraints. No interpretation.

- Write at a 5th-grade reading level.
- Use short sentences.
- Use simple words.
- One action per step.
- Start each step with an action verb.
- Avoid jargon or explain it immediately.
- Do not add strategy or optimization.
- Do not invent steps.

---

## Output Format
The output must follow this structure exactly.

**If the user provided a video:**
- Extract relevant screenshots at key moments that illustrate important steps
- Embed screenshots in the appropriate step using markdown image syntax: `![Description](path/to/screenshot.png)`
- Place screenshots immediately after the instruction they illustrate
- Name screenshots descriptively (e.g., `step-1-click-button.png`, `step-3-expected-result.png`)

```markdown
# SOP: [Process Name]

**Version:** 1.0
**Last Updated:** [Date]
**Owner:** [Role/Name]
**Audience:** [Who uses this SOP]

---

## 1. Purpose
[One sentence. What this process achieves.]

## 2. Who Does This
[Role or skill level of person performing this]

## 3. Tools You Need
- [Tool 1]
- [Tool 2]
- [Access/permissions needed]

## 4. Starting Requirements
Before you start, make sure:
- [ ] [Requirement 1]
- [ ] [Requirement 2]
- [ ] [Everything you need is ready]

## 5. Step-by-Step Instructions

### Step 1: [Action Title]
1. [Do this specific action]
2. [Do this specific action]

![Screenshot showing this step](path/to/screenshot.png)

**What you should see:** [Expected result]

### Step 2: [Action Title]
1. [Do this specific action]
   - [If needed, add a sub-step]
   - [If needed, add a sub-step]

**Warning:** [Important thing that could go wrong]

[Continue with numbered steps...]

## 6. Quality Check
After finishing, check:
- [ ] [Verification item 1]
- [ ] [Verification item 2]
- [ ] [Final outcome achieved]

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| [Problem] | [Cause] | [Solution] |
| [Problem] | [Cause] | [Solution] |

## 8. Notes
[Any assumptions made. Any additional context. Who to ask for help.]

## 9. Version Info

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | First version |
```

---

## Quality Checklist (Self-Verification)
Before finalizing, verify:

- The output solves exactly the stated purpose.
- All steps are required and ordered correctly.
- No step assumes hidden knowledge.
- The success state is explicit.
- Language is clear and unambiguous.
- The SOP can be followed without additional context.

---

## Defaults & Assumptions
Use these unless overridden.

- Audience is a beginner with no prior knowledge.
- The process should be repeatable.
- No system knowledge is assumed.

Document any assumptions in **Notes** section.

---
