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
| `cro-optimization` | Analyzes landing pages against 13 CRO principles and provides detailed optimization recommendations with before/after examples |
| `viral-hook-creator` | Creates viral hooks for content and marketing |
| `lead-magnet-generator` | Creates viral lead magnet posts with CTAs that drive comments and DMs — produces quick and detailed formats for Twitter/X and LinkedIn |
| `strategic-planning` | Analyzes your business to deliver 3 specific, high-impact next moves for growth (marketing/sales) — asks diagnostic questions when needed to uncover bottlenecks and opportunities |
| `go-to-market-plan` | Delivers 3 best go-to-market strategies tailored to your product, stage, and market — asks diagnostic questions about product readiness, ICP, competitive positioning, and distribution channels |
| `x-writer` | Creates 3 viral X (Twitter) posts in different proven formats with creator voice matching (Hormozi, Naval, Gazdecki, Dakota, Machina, Ognjen) — uses 51+ post templates and 8 format structures |
| `linkedin-writer` | Creates professional LinkedIn posts and articles |
| `outreach-specialist` | Crafts personalized outreach messages |
| `competitor-intel` | Analyzes competitors with verified metrics, leverage strategies, and predicted next moves |
| `brand-copywriter` | Writes marketing copy using proven frameworks (AIDA, PAS, BAB, etc.) for ads, landing pages, emails, and more |
| `pricing-strategist` | Builds comprehensive pricing strategies with tiered plans, price justifications, and revenue optimization through interactive Q&A |
| `prd-generator` | Generates professional PRD documents optimized for AI coding tools — asks clarifying questions and outputs PDF to `./prd_outputs/` |
| `product-hunt-launch-plan` | Creates comprehensive, personalized Product Hunt launch plans to rank #1 — includes hour-by-hour battle plan, templates, and 20+ alternative launch platforms |
| `marketing-ideas` | Produces the 5 best marketing ideas for your business from a curated database of 160+ proven strategies — tailored to your industry, audience, and goals |

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
