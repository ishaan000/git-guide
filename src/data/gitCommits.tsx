import React from "react";
import { Typography } from "@mui/material";

interface Section {
  title: string;
  content: React.ReactNode;
  code?: string;
  additionalContent?: string;
}

export const sections: Section[] = [
  {
    title: "Why Commit Messages Matter",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Imagine you&apos;re working on a project with a team. You come across
          a commit that says &quot;fix bug&quot; or &quot;update code&quot;. How
          helpful is that? Not very! Good commit messages are like a time
          machine - they help you and your team understand what changed and why.
        </Typography>
        <Typography variant="body1" paragraph>
          In this guide, you&apos;ll learn how to write commit messages that:
        </Typography>
        <ul>
          <li>Make your code history clear and searchable</li>
          <li>Help your team understand changes quickly</li>
          <li>Make debugging easier</li>
          <li>Create a professional development history</li>
        </ul>
      </>
    ),
    additionalContent: `🎯 Learning Goals:
• Understand why good commit messages are crucial
• Learn the impact of poor commit messages
• Identify key elements of effective commit messages

💡 Interactive Exercise:
Think about your last commit message. Write it down and analyze:
1. Does it explain WHAT changed?
2. Does it explain WHY it changed?
3. Is it easy to understand for others?

📚 Key Concepts:
• Commit messages are documentation
• They serve as a project&apos;s history
• They help with debugging and maintenance
• They reflect professional standards`,
  },
  {
    title: "Anatomy of a Great Commit Message",
    content: (
      <>
        <Typography variant="body1" paragraph>
          A great commit message has a clear structure. Think of it like a good
          email - it has a subject line and a body. Let&apos;s break it down:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Subject Line (First Line):</strong>
        </Typography>
        <ul>
          <li>Keep it under 50 characters</li>
          <li>Start with a verb (Add, Fix, Update, etc.)</li>
          <li>Don&apos;t end with a period</li>
          <li>
            Use imperative mood (&quot;Add feature&quot; not &quot;Added
            feature&quot;)
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>Body:</strong>
        </Typography>
        <ul>
          <li>Separate from subject with blank line</li>
          <li>Wrap at 72 characters</li>
          <li>Explain the WHY, not just the WHAT</li>
          <li>Include any breaking changes or deprecations</li>
        </ul>
      </>
    ),
    code: `Add user authentication system

Implement JWT-based authentication with refresh tokens.
- Add login/register endpoints
- Set up token refresh mechanism
- Add password hashing with bcrypt
- Include rate limiting for security

Breaking changes:
- New environment variables required
- Database schema updated

Closes #123`,
    additionalContent: `🎯 Learning Goals:
• Master the structure of commit messages
• Learn to write clear subject lines
• Understand when and how to use commit bodies

💡 Interactive Exercise:
Write a commit message for this scenario:
You just fixed a bug where users couldn&apos;t log in on mobile devices.
The issue was caused by incorrect viewport handling in the login form.

📚 Key Concepts:
• Subject line: Brief summary
• Body: Detailed explanation
• Breaking changes: Must be highlighted
• Issue references: Link to tickets/tasks`,
  },
  {
    title: "Common Patterns and Best Practices",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Let&apos;s look at some common patterns that make commit messages more
          effective and easier to work with:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1. Type Prefixes:</strong>
        </Typography>
        <ul>
          <li>feat: New feature</li>
          <li>fix: Bug fix</li>
          <li>docs: Documentation changes</li>
          <li>style: Code style changes (formatting, etc.)</li>
          <li>refactor: Code changes that neither fix bugs nor add features</li>
          <li>test: Adding or modifying tests</li>
          <li>chore: Maintenance tasks</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>2. Scope (Optional):</strong>
        </Typography>
        <ul>
          <li>feat(auth): Add OAuth login</li>
          <li>fix(api): Handle rate limiting</li>
          <li>style(ui): Update button colors</li>
        </ul>
      </>
    ),
    code: `feat(auth): Add OAuth login support

- Implement Google OAuth integration
- Add OAuth configuration options
- Update login page with OAuth buttons
- Add OAuth callback handling

Closes #456
Related to #789`,
    additionalContent: `🎯 Learning Goals:
• Learn common commit message patterns
• Understand type prefixes and their usage
• Master scope usage in commit messages

💡 Interactive Exercise:
Categorize these commits using type prefixes:
1. "Update README with new setup instructions"
2. "Fix login button not working on Safari"
3. "Add new user profile page"
4. "Format code according to style guide"

📚 Key Concepts:
• Type prefixes: Categorize changes
• Scope: Specify affected area
• Breaking changes: Must be marked
• Issue references: Link to tickets`,
  },
  {
    title: "Advanced Techniques",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Now that you&apos;ve mastered the basics, let&apos;s look at some
          advanced techniques that can make your commit messages even more
          powerful:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1. Multiple Paragraphs:</strong>
        </Typography>
        <ul>
          <li>Use blank lines between paragraphs</li>
          <li>First paragraph: What and why</li>
          <li>Subsequent paragraphs: Additional context</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>2. Bullet Points:</strong>
        </Typography>
        <ul>
          <li>Use hyphens or asterisks</li>
          <li>Keep items focused and specific</li>
          <li>Start with verbs</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>3. Breaking Changes:</strong>
        </Typography>
        <ul>
          <li>Start with &quot;BREAKING CHANGE:&quot;</li>
          <li>Explain what changed and how to migrate</li>
          <li>Include in both subject and body</li>
        </ul>
      </>
    ),
    code: `refactor(api): Migrate to GraphQL

BREAKING CHANGE: API endpoints now use GraphQL instead of REST

This change improves our API&apos;s flexibility and reduces over-fetching.
The migration includes:

- Replace REST endpoints with GraphQL schema
- Add GraphQL resolvers for all entities
- Update API documentation
- Add GraphQL client utilities

Migration guide:
1. Update API client to use GraphQL
2. Replace REST calls with GraphQL queries
3. Update error handling for GraphQL responses

Closes #101
Related to #102`,
    additionalContent: `🎯 Learning Goals:
• Master advanced commit message formatting
• Learn to handle breaking changes
• Understand multi-paragraph commit messages

💡 Interactive Exercise:
Write a commit message for this scenario:
You&apos;re removing an old feature that&apos;s no longer needed.
This will require users to update their code.
Include:
1. Breaking change notice
2. Migration steps
3. Reason for removal

📚 Key Concepts:
• Breaking changes: Must be clearly marked
• Migration guides: Help users transition
• Multiple paragraphs: For complex changes
• Bullet points: For clear, scannable lists`,
  },
  {
    title: "Interactive Practice",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Now it&apos;s your turn to practice! Below are some real-world
          scenarios. Write commit messages for each one, following all the best
          practices we&apos;ve covered.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Scenario 1:</strong>
        </Typography>
        <ul>
          <li>You just fixed a critical security vulnerability</li>
          <li>The issue was in the password reset functionality</li>
          <li>
            It affected all users who requested password resets in the last week
          </li>
          <li>You&apos;ve added additional security measures</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>Scenario 2:</strong>
        </Typography>
        <ul>
          <li>You&apos;re adding a new payment integration</li>
          <li>It supports multiple currencies</li>
          <li>Includes new environment variables</li>
          <li>Requires database schema updates</li>
        </ul>
      </>
    ),
    additionalContent: `🎯 Learning Goals:
• Apply commit message best practices
• Handle real-world scenarios
• Write clear, professional messages

💡 Interactive Exercise:
For each scenario:
1. Write a subject line
2. Write a detailed body
3. Include any necessary references
4. Mark any breaking changes

Compare your answers with the examples in the next section.

📚 Key Concepts:
• Security issues: Require immediate attention
• Breaking changes: Must be clearly marked
• Environment changes: Need documentation
• Database changes: Require migration steps`,
  },
  {
    title: "Example Solutions",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Let&apos;s look at how we could write commit messages for our practice
          scenarios:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Scenario 1 Solution:</strong>
        </Typography>
      </>
    ),
    code: `fix(security): Patch password reset vulnerability

Critical security fix for password reset functionality that could
allow unauthorized access to user accounts.

- Fix token validation in reset endpoint
- Add rate limiting to reset requests
- Implement additional security checks
- Add audit logging for reset attempts

Security advisory: SEC-2024-001
Closes #789`,
    additionalContent: `🎯 Learning Goals:
• Review example commit messages
• Compare with your solutions
• Identify areas for improvement

💡 Interactive Exercise:
Compare your solutions with these examples:
1. What did you do well?
2. What could you improve?
3. What did you miss?

📚 Key Concepts:
• Security fixes: Require immediate attention
• Breaking changes: Must be clearly marked
• Issue references: Link to tickets
• Audit logging: Track security events`,
  },
  {
    title: "Tools and Automation",
    content: (
      <>
        <Typography variant="body1" paragraph>
          There are several tools that can help you maintain consistent commit
          messages:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1. Commit Linters:</strong>
        </Typography>
        <ul>
          <li>commitlint: Enforces commit message conventions</li>
          <li>husky: Git hooks for pre-commit checks</li>
          <li>commitizen: Interactive commit message creation</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>2. Git Hooks:</strong>
        </Typography>
        <ul>
          <li>pre-commit: Validate commit messages</li>
          <li>commit-msg: Check message format</li>
          <li>prepare-commit-msg: Suggest message templates</li>
        </ul>
      </>
    ),
    code: `# .commitlintrc.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert'
      ]
    ],
    'subject-case': [2, 'always', 'sentence-case']
  }
};

# .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1`,
    additionalContent: `🎯 Learning Goals:
• Learn about commit message tools
• Understand Git hooks
• Set up automated checks

💡 Interactive Exercise:
Set up commitlint in your project:
1. Install required packages
2. Create configuration file
3. Add Git hooks
4. Test with a commit

📚 Key Concepts:
• Commit linters: Enforce conventions
• Git hooks: Automate checks
• Configuration: Customize rules
• Automation: Reduce human error`,
  },
  {
    title: "Review and Best Practices Summary",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Let&apos;s review what we&apos;ve learned and create a final checklist
          for writing great commit messages:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Essential Elements:</strong>
        </Typography>
        <ul>
          <li>Clear subject line (under 50 characters)</li>
          <li>Detailed body when needed</li>
          <li>Proper formatting and spacing</li>
          <li>Issue references when applicable</li>
          <li>Breaking change notices when needed</li>
        </ul>
        <Typography variant="body1" paragraph>
          <strong>Common Pitfalls to Avoid:</strong>
        </Typography>
        <ul>
          <li>Vague or unclear messages</li>
          <li>Missing context or explanation</li>
          <li>Inconsistent formatting</li>
          <li>Missing breaking change notices</li>
          <li>Overly long subject lines</li>
        </ul>
      </>
    ),
    additionalContent: `🎯 Learning Goals:
• Review key concepts
• Create personal checklist
• Identify common mistakes

💡 Interactive Exercise:
Create your own commit message checklist:
1. List essential elements
2. Note common pitfalls
3. Add personal reminders
4. Include team-specific rules

📚 Key Concepts:
• Clear communication: Essential for collaboration
• Consistency: Makes history searchable
• Breaking changes: Must be highlighted
• Issue tracking: Links code to tickets`,
  },
];
