interface Section {
  title: string;
  content: string;
  code?: string;
  additionalContent?: string;
}

export const sections: Section[] = [
  {
    title: "Understanding Pull Requests",
    content: `Pull Requests (PRs) are the heart of code collaboration. They allow you to propose changes to the main codebase while enabling others to review and provide feedback. A good PR is more than just code changes - it's a conversation about improving the codebase.`,
    code: `# Creating a PR
# 1. Create a new branch
git checkout -b feature/new-feature

# 2. Make your changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push your branch
git push origin feature/new-feature

# 4. Create PR on GitHub/GitLab
# Go to repository > Pull Requests > New Pull Request`,
    additionalContent: `
📚 Key Concepts:
• Branch: Isolated changes
• PR: Change proposal
• Review: Code feedback
• Merge: Applying changes

💡 Pro Tips:
• Keep PRs focused and small
• Write clear PR descriptions
• Include testing steps
• Link related issues`,
  },
  {
    title: "Writing Great PR Descriptions",
    content: `A good PR description helps reviewers understand the context and purpose of your changes quickly. It should explain both what changed and why.`,
    code: `# Good PR Description Example
## What Changed
- Added user authentication system
- Implemented JWT token handling
- Added login/logout endpoints

## Why
To enable secure user access to the application.

## Testing Steps
1. Run \`npm install\`
2. Start the server
3. Try logging in with test credentials

## Screenshots
[Add relevant screenshots]

## Related Issues
Closes #123
Fixes #456`,
    additionalContent: `
📚 Key Elements:
• What changed
• Why it changed
• Testing steps
• Screenshots
• Related issues

💡 Pro Tips:
• Be specific and clear
• Include context
• Add visual aids
• Link related work`,
  },
  {
    title: "The Art of Code Review",
    content: `Code review is about more than finding bugs - it's about ensuring code quality, sharing knowledge, and improving the codebase as a team.`,
    code: `# Review Checklist
1. Business Context
   - Understand the purpose
   - Verify requirements
   - Check edge cases

2. Code Quality
   - Readability
   - Maintainability
   - Performance

3. Testing
   - Unit tests
   - Integration tests
   - Edge cases

4. Documentation
   - Code comments
   - API docs
   - README updates`,
    additionalContent: `
📚 Key Areas:
• Business logic
• Code quality
• Testing
• Documentation
• Security

💡 Pro Tips:
• Start with context
• Be constructive
• Focus on important issues
• Share knowledge`,
  },
  {
    title: "Effective Review Comments",
    content: `Good review comments are clear, constructive, and focused on improving the code. They should help the author understand what needs to change and why.`,
    code: `# Good Review Comments
# Instead of:
"This code is wrong"

# Say:
"Consider using a constant for the magic number 86400 to make it clearer that this represents seconds in a day"

# Instead of:
"Fix this"

# Say:
"This method could be optimized by using a Set for O(1) lookups instead of array includes"

# Instead of:
"You forgot to..."

# Say:
"We should add error handling for the database connection to prevent crashes"`,
    additionalContent: `
📚 Key Principles:
• Be constructive
• Explain the why
• Suggest solutions
• Be specific

💡 Pro Tips:
• Avoid personal language
• Focus on the code
• Provide context
• Be empathetic`,
  },
  {
    title: "Review Best Practices",
    content: `Follow these best practices to make your reviews more effective and collaborative:`,
    code: `# Review Process
1. Start with Context
   - Read the PR description
   - Understand the business case
   - Review related issues

2. Review the Code
   - Check business logic
   - Verify edge cases
   - Look for security issues

3. Provide Feedback
   - Prioritize important issues
   - Be specific and actionable
   - Include positive feedback

4. Follow Up
   - Respond to author's questions
   - Review changes promptly
   - Approve when satisfied`,
    additionalContent: `
📚 Key Practices:
• Start with context
• Review systematically
• Provide actionable feedback
• Follow up promptly

💡 Pro Tips:
• Set expectations
• Be timely
• Stay focused
• Be collaborative`,
  },
  {
    title: "Handling Review Feedback",
    content: `Receiving and addressing review feedback is an important part of the PR process. Here's how to handle it effectively:`,
    code: `# Responding to Reviews
# 1. Acknowledge feedback
"Thanks for catching that! I'll update the code to handle the edge case."

# 2. Ask for clarification
"Could you clarify what you mean by 'optimize the query'?"

# 3. Push changes
git add .
git commit -m "fix: address review feedback"
git push

# 4. Mark as resolved
# Click "Resolve conversation" on GitHub

# 5. Request re-review
# Click "Re-request review"`,
    additionalContent: `
📚 Key Steps:
• Acknowledge feedback
• Ask questions
• Make changes
• Push updates
• Request re-review

💡 Pro Tips:
• Stay professional
• Be open to feedback
• Keep changes focused
• Update PR description`,
  },
  {
    title: "Review Psychology",
    content: `Understanding the psychological aspects of code review helps create a better collaborative environment:`,
    code: `# Psychological Best Practices
# For Reviewers
- Focus on the code, not the person
- Start with positive feedback
- Be specific and constructive
- Consider the author's experience level

# For Authors
- Don't take feedback personally
- View reviews as learning opportunities
- Ask questions when unclear
- Keep an open mind`,
    additionalContent: `
📚 Key Points:
• Code vs. person focus
• Positive reinforcement
• Clear communication
• Learning mindset

💡 Pro Tips:
• Be empathetic
• Stay professional
• Focus on growth
• Build trust`,
  },
  {
    title: "Advanced Review Techniques",
    content: `Learn advanced techniques for more thorough and effective code reviews:`,
    code: `# Advanced Review Checklist
1. Architecture Review
   - System design
   - Scalability
   - Integration points

2. Security Review
   - Input validation
   - Authentication
   - Authorization
   - Data protection

3. Performance Review
   - Algorithm efficiency
   - Resource usage
   - Caching opportunities

4. Testing Review
   - Test coverage
   - Test quality
   - Edge cases`,
    additionalContent: `
📚 Key Areas:
• Architecture
• Security
• Performance
• Testing
• Documentation

💡 Pro Tips:
• Use checklists
• Review systematically
• Consider edge cases
• Look for patterns`,
  },
];
