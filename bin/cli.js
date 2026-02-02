#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const FOUNDER_CONTEXT = path.join(__dirname, '..', 'FOUNDER_CONTEXT.md');
const TARGET_DIR = path.join(os.homedir(), '.claude', 'skills');
const TARGET_CONTEXT = path.join(process.cwd(), 'FOUNDER_CONTEXT.md'); // Project root

// Available skills
function getAvailableSkills() {
  try {
    return fs.readdirSync(SKILLS_DIR).filter(name => {
      const skillPath = path.join(SKILLS_DIR, name);
      return fs.statSync(skillPath).isDirectory() &&
             fs.existsSync(path.join(skillPath, 'SKILL.md'));
    });
  } catch (err) {
    return [];
  }
}

// Copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Parse command line arguments
function parseArgs(args) {
  const result = {
    command: null,
    skills: [],
    noContext: false
  };

  let i = 0;
  while (i < args.length) {
    const arg = args[i];

    if (arg === 'install' || arg === 'list') {
      result.command = arg;
    } else if (arg === '--skill' || arg === '-s') {
      i++;
      if (i < args.length) {
        result.skills.push(args[i]);
      }
    } else if (arg === '--no-context') {
      result.noContext = true;
    } else if (!arg.startsWith('-')) {
      if (!result.command) {
        result.command = arg;
      }
    }
    i++;
  }

  return result;
}

// List available skills
function listSkills() {
  const skills = getAvailableSkills();

  console.log('\n📦 Available founder-skills:\n');

  if (skills.length === 0) {
    console.log('  No skills found.\n');
    return;
  }

  skills.forEach(skill => {
    const skillPath = path.join(SKILLS_DIR, skill, 'SKILL.md');
    const content = fs.readFileSync(skillPath, 'utf8');

    // Extract description from frontmatter
    const match = content.match(/description:\s*(.+)/);
    const description = match ? match[1].trim() : 'No description';

    console.log(`  • ${skill}`);
    console.log(`    ${description}\n`);
  });

  console.log('Install all:     npx founder-skills install');
  console.log('Install one:     npx founder-skills install --skill sop-creator\n');
}

// Install skills
function installSkills(selectedSkills, noContext = false) {
  const availableSkills = getAvailableSkills();

  // If no specific skills selected, install all
  const skillsToInstall = selectedSkills.length > 0
    ? selectedSkills.filter(s => availableSkills.includes(s))
    : availableSkills;

  // Check for invalid skill names
  if (selectedSkills.length > 0) {
    const invalid = selectedSkills.filter(s => !availableSkills.includes(s));
    if (invalid.length > 0) {
      console.log(`\n⚠️  Unknown skills: ${invalid.join(', ')}`);
      console.log(`   Available: ${availableSkills.join(', ')}\n`);
    }
  }

  if (skillsToInstall.length === 0) {
    console.log('\n❌ No valid skills to install.\n');
    listSkills();
    return;
  }

  console.log('\n🚀 Installing founder-skills...\n');

  // Ensure target directory exists
  fs.mkdirSync(TARGET_DIR, { recursive: true });

  // Copy each skill
  console.log('Skills (global ~/.claude/skills/):');
  skillsToInstall.forEach(skill => {
    const src = path.join(SKILLS_DIR, skill);
    const dest = path.join(TARGET_DIR, skill);

    try {
      copyDir(src, dest);
      console.log(`  ✅ ${skill}`);
    } catch (err) {
      console.log(`  ❌ ${skill} - ${err.message}`);
    }
  });

  // Copy FOUNDER_CONTEXT.md to project root if not skipped
  if (!noContext) {
    console.log('\nFounder Context (project root):');
    if (!fs.existsSync(TARGET_CONTEXT)) {
      try {
        fs.copyFileSync(FOUNDER_CONTEXT, TARGET_CONTEXT);
        console.log(`  ✅ Created ./FOUNDER_CONTEXT.md`);
        console.log(`     Edit this file to customize skills for your business.`);
      } catch (err) {
        console.log(`  ⚠️  Could not copy FOUNDER_CONTEXT.md - ${err.message}`);
      }
    } else {
      console.log(`  📄 ./FOUNDER_CONTEXT.md already exists (not overwritten)`);
    }
  }

  console.log('\n✨ Installation complete!\n');
  console.log('Usage in Claude Code:');
  skillsToInstall.forEach(skill => {
    console.log(`  /${skill}`);
  });
  console.log('');
}

// Show help
function showHelp() {
  console.log(`
founder-skills - Claude Code skills for founders

Usage:
  npx founder-skills <command> [options]

Commands:
  install              Install skills + FOUNDER_CONTEXT.md template
  list                 List available skills

Options:
  --skill, -s <name>   Install specific skill(s)
                       Can be used multiple times
  --no-context         Skip creating FOUNDER_CONTEXT.md

Examples:
  npx founder-skills install
  npx founder-skills install --skill sop-creator
  npx founder-skills install -s sop-creator -s linkedin-writer
  npx founder-skills install --no-context
  npx founder-skills list

Skills are installed globally to ~/.claude/skills/
FOUNDER_CONTEXT.md is created in your current directory (project root)
`);
}

// Main
function main() {
  const args = process.argv.slice(2);
  const { command, skills, noContext } = parseArgs(args);

  switch (command) {
    case 'install':
      installSkills(skills, noContext);
      break;
    case 'list':
      listSkills();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      if (!command) {
        showHelp();
      } else {
        console.log(`\n❌ Unknown command: ${command}\n`);
        showHelp();
      }
  }
}

main();
