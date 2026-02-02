---
name: sop-creator
description: Creates detailed Standard Operating Procedures (SOPs) for business processes. Use when user needs SOPs, process documentation, operational guides, or workflow documentation.
---

# SOP Creator

## Founder Context
{{file:../../FOUNDER_CONTEXT.md}}

## Purpose

Create comprehensive, actionable Standard Operating Procedures (SOPs) that document business processes clearly enough for any team member to follow. SOPs reduce errors, ensure consistency, and make training easier.

## Instructions

When the user requests an SOP, follow these steps:

### 1. Gather Information
Ask clarifying questions if needed:
- What process needs to be documented?
- Who will be performing this process? (role/skill level)
- What tools or systems are involved?
- Are there any compliance or quality requirements?
- What's the desired outcome of this process?

### 2. Structure the SOP
Create a document with these sections:

#### Header Information
- **Title**: Clear, descriptive name of the process
- **Version**: Start with 1.0
- **Last Updated**: Current date
- **Owner**: Who maintains this SOP
- **Audience**: Who should follow this SOP

#### Overview
- **Purpose**: Why this SOP exists
- **Scope**: What this SOP covers and doesn't cover
- **Prerequisites**: What's needed before starting

#### Procedure
- Numbered steps with clear action verbs
- Sub-steps where needed
- Decision points with clear criteria
- Screenshots/diagrams placeholders where helpful
- Warnings or notes for critical steps

#### Quality Checks
- How to verify the process was done correctly
- Common errors and how to avoid them

#### Troubleshooting
- Common issues and their solutions
- When to escalate and to whom

#### References
- Related SOPs
- Tools and systems mentioned
- Contact information for questions

### 3. Writing Guidelines
- Use active voice and imperative mood ("Click the button" not "The button should be clicked")
- One action per step when possible
- Be specific about locations, names, and values
- Include expected outcomes after key steps
- Use consistent terminology throughout
- Assume the reader has no prior knowledge of the process

## Input

$ARGUMENTS

## Output Format

```markdown
# SOP: [Process Name]

**Version:** 1.0
**Last Updated:** [Date]
**Owner:** [Role/Name]
**Audience:** [Who uses this SOP]

---

## 1. Purpose

[Why this process exists and what it achieves]

## 2. Scope

**Includes:**
- [What this SOP covers]

**Excludes:**
- [What this SOP does not cover]

## 3. Prerequisites

- [ ] [Requirement 1]
- [ ] [Requirement 2]
- [ ] [Access/permissions needed]

## 4. Procedure

### Step 1: [Action Title]

1. [Specific action]
2. [Specific action]
   - [Sub-step if needed]
   - [Sub-step if needed]

> **Note:** [Important information]

**Expected Result:** [What should happen]

### Step 2: [Action Title]

[Continue with numbered steps...]

> **Warning:** [Critical information that could cause issues]

## 5. Quality Checklist

- [ ] [Verification item 1]
- [ ] [Verification item 2]
- [ ] [Final outcome achieved]

## 6. Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| [Problem] | [Why it happens] | [How to fix] |

## 7. References

- [Related SOP or document]
- [Tool documentation]
- [Contact for questions]

---

**Revision History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author] | Initial version |
```

## References

Add any additional SOP templates or examples to the `./references/` folder.
