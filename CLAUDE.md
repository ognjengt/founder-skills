# Development Guidelines

This file provides guidance for Claude when working on the founder-skills repository.

## Repository Structure

```
founder-skills/
├── .claude-plugin/
│   └── marketplace.json    # Marketplace metadata
├── bin/
│   └── cli.js              # npx installer
├── skills/                 # All skills
│   └── <skill-name>/
│       ├── SKILL.md        # Skill definition
│       └── references/     # Additional materials
├── FOUNDER_CONTEXT.md      # Shared business context
├── package.json            # npm package config
├── README.md               # User documentation
└── CLAUDE.md               # This file
```

## Adding a New Skill

1. Create a new directory in `skills/`:
   ```
   skills/new-skill-name/
   ├── SKILL.md
   └── references/
       └── .gitkeep
   ```

2. Follow the SKILL.md format:
   ```markdown
   ---
   name: skill-name
   version: v1.0.0
   description: Brief description of what this skill does and when to use it.
   ---

   # Skill Title

   ## Purpose
   One sentence. One outcome. No context.

   ---

   ## Execution Logic

   **Check $ARGUMENTS first to determine execution mode:**

   ### If $ARGUMENTS is empty or not provided:
   Respond with:
   "skill-name loaded, proceed with additional instructions"

   Then wait for the user to provide their requirements in the next message.

   ### If $ARGUMENTS contains content:
   Proceed immediately to Task Execution (skip the "loaded" message).

   ---

   ## Task Execution

   When user requirements are available (either from initial $ARGUMENTS or follow-up message):

   ### 1. MANDATORY: Read Reference Files FIRST
   **BLOCKING REQUIREMENT — DO NOT SKIP THIS STEP**

   Before doing ANYTHING else, you MUST use the Read tool to read every file
   in `./references/`. This is non-negotiable.

   **DO NOT PROCEED** to Step 2 until you have read all reference files and have their content in context.

   ### 2. Check for Business Context
   Check if `FOUNDER_CONTEXT.md` exists in the project root.
   - **If it exists:** Read it and use the business context to personalize
     your output (company name, brand voice, industry specifics, audience).
   - **If it doesn't exist:** Proceed using defaults from
     "Defaults & Assumptions".

   ### 3. Analyze Input
   From the user's requirements, extract:
   - [Key variable 1]
   - [Key variable 2]
   - [Key variable 3]

   For any missing information, apply defaults from **Defaults & Assumptions**.

   ### 4. Execute Task
   Using the data you read in Step 1:
   - [Core action 1 — tie back to specific reference file content]
   - [Core action 2]
   - Follow all Writing Rules below
   - [Skill-specific constraints]

   ### 5. Format and Verify
   - Structure output according to **Output Format** section
   - Complete **Quality Checklist** self-verification before presenting output

   ---

   ## Writing Rules
   Hard constraints. No interpretation.

   ### Core Rules
   - [Rule 1]
   - [Rule 2]
   - [Rule 3]

   ### Task-Specific Rules
   - [Rules that apply only in certain conditions within this skill]

   ### Context-Specific Rules
   - [Rules that change based on audience, platform, tone, etc.]

   ---

   ## Output Format
   [Expected output structure — use a concrete example, not just labels]

   **Example:**
   [A filled-in example showing what good output looks like]

   ---

   ## References

   **These files MUST be read using the Read tool before task execution
   (see Step 1):**

   | File | Purpose |
   |------|---------|
   | `./references/[file-1].md` | [What it contains] |
   | `./references/[file-2].md` | [What it contains] |

   **Why these matter:** [One sentence on how the reference files connect
   to produce better output — not optional boilerplate, but the actual reason.]

   ---

   ## Quality Checklist (Self-Verification)
   Before finalizing output, verify ALL of the following:

   ### Pre-Execution Check
   - [ ] I read all reference files before starting
   - [ ] I have the reference content in context

   ### Execution Check
   - [ ] Output uses data/patterns from the reference files (not invented)
   - [ ] Each [unit of output] is distinct (no repetition)
   - [ ] Writing Rules are followed throughout

   ### Output Check
   - [ ] Output matches the Output Format exactly
   - [ ] Defaults were applied correctly for any missing input
   - [ ] Output solves exactly what the user asked for

   **If ANY check fails → revise before presenting.**

   ---

   ## Defaults & Assumptions
   Use these unless the user overrides. Be specific — list concrete values,
   not vague categories.

   - [Default 1: concrete value]
   - [Default 2: concrete value]
   - [Default 3: concrete value]

   Document any assumptions made in the output.
   ```

3. Update `marketplace.json` to include the new skill in the skills array.

4. Update `README.md` to list the new skill in the Available Skills table.

## Skill Naming Conventions

- Use lowercase with hyphens: `sop-creator`, `linkedin-writer`
- Be descriptive but concise
- The folder name becomes the command: `/sop-creator`

## Testing Skills

1. Copy the skill to your local Claude skills directory:
   ```bash
   cp -r skills/new-skill ~/.claude/skills/
   ```

2. Open Claude Code and test:
   ```
   /new-skill [test input]
   ```

## Code Style

- Keep SKILL.md files focused and actionable
- Use clear, imperative instructions for Claude
- Include example outputs where helpful
- Reference FOUNDER_CONTEXT.md for business-specific context

## CLI Development

The CLI (`bin/cli.js`) handles:
- `install` - Copies skills to `~/.claude/skills/` + FOUNDER_CONTEXT.md to project root
- `list` - Shows available skills
- `--skill` flag - Selective installation
- `--no-context` flag - Skip FOUNDER_CONTEXT.md creation

When modifying the CLI:
- Keep it dependency-free (Node.js built-ins only)
- Test both install and list commands
- Ensure error messages are helpful
