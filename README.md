# Claude Code skills pack for founders, marketers, content creators and business owners

Claude Code skills for founders — SOPs, CRO, content creation, outreach, and strategic planning.

## Installation

### Quick Install (All Skills)

```bash
npx founder-skills install
```

### Install Specific Skills

```bash
npx founder-skills install --skill sop-creator
npx founder-skills install --skill sop-creator --skill linkedin-writer
```

### List Available Skills

```bash
npx founder-skills list
```

### Skip Context File

```bash
npx founder-skills install --no-context
```

### Manual Installation

```bash
git clone https://github.com/ognjengt/founder-skills
cp -r founder-skills/skills/* ~/.claude/skills/
cp founder-skills/FOUNDER_CONTEXT.md ./  # Copy to your project root
```

## Available Skills

| Skill | Description |
|-------|-------------|
| `sop-creator` | Creates detailed Standard Operating Procedures for business processes |
| `cro-optimizer` | Conversion rate optimization analysis and recommendations |
| `viral-hook-creator` | Creates viral hooks for content and marketing |
| `lead-magnet-generator` | Generates lead magnet ideas and content |
| `strategic-planning` | Strategic business planning and roadmapping |
| `x-writer` | Writes engaging X (Twitter) content |
| `linkedin-writer` | Creates professional LinkedIn posts and articles |
| `outreach-specialist` | Crafts personalized outreach messages |
| `competitor-intel` | Analyzes competitors with verified metrics, leverage strategies, and predicted next moves |
| `brand-copywriter` | Writes marketing copy using proven frameworks (AIDA, PAS, BAB, etc.) for ads, landing pages, emails, and more |

## Usage

After installation, use skills in Claude Code by typing:

```
/sop-creator create an employee onboarding process
```

```
/linkedin-writer write a post about our new product launch
```

## Customizing for Your Business

After installation, edit `FOUNDER_CONTEXT.md` in your project root:

- Company name and industry
- Target audience and value proposition
- Brand voice and tone
- Business goals
- Products/services

Skills automatically check for this file and use it to personalize outputs.
Each project can have its own context file for different businesses or clients.

## Contributing

Want to add a new skill? See [CLAUDE.md](CLAUDE.md) for development guidelines.

### Skill Structure

```
skills/
└── your-skill/
    ├── SKILL.md        # Main skill definition
    └── references/     # Additional reference materials
```

## License

MIT
