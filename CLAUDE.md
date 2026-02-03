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

   ## Execution Logic

   **Check $ARGUMENTS first to determine execution mode:**

   ### If $ARGUMENTS is empty or not provided:
   Respond with:
   "skill-name loaded, proceed with additional instructions"

   Then wait for the user to provide their requirements in the next message.

   ### If $ARGUMENTS contains content:
   Proceed immediately to Task Execution (skip the "loaded" message).

   ## Task Execution

   When user requirements are available (either from initial $ARGUMENTS or follow-up message):

   1. **Check for Business Context**
      - Look for FOUNDER_CONTEXT.md in the project root
      - If it exists, read it and use the business context to personalize your output
      - If it doesn't exist, proceed using defaults

   2. **Process Input**
      - Extract key information from user requirements
      - Apply defaults for any missing information
      - Document assumptions in output

   3. **Execute Task**
      - [Specific task instructions]

   4. **Format Output**
      - Follow Output Format exactly
      - Include verification checks

   ## Output Format
   [Expected output structure]

   ## References
   [Links to files in ./references/ if applicable]
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
