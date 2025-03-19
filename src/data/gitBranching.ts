interface Section {
  title: string;
  content: string;
  code?: string;
  additionalContent?: string;
}

export const sections: Section[] = [
  {
    title: "Understanding Branching",
    content: `Branches in Git are like parallel timelines for your code. They let you work on new features, bug fixes, or experiments without affecting your main code. Think of them as alternate realities where you can safely make changes!`,
    code: `# List all branches
git branch

# Create a new branch
git branch feature-login

# Switch to the new branch
git checkout feature-login

# Create and switch in one command
git checkout -b feature-login`,
    additionalContent: `
📚 Key Concepts:
• Branch: A separate line of development
• HEAD: Points to your current location
• main/master: Your primary branch

💡 Pro Tips:
• Name branches descriptively (e.g., 'feature/user-login')
• Keep branches focused on single features
• Use 'git checkout -' to switch to previous branch
• Use 'git branch -a' to see all branches including remote ones`,
  },
  {
    title: "Branch Management",
    content: `Managing branches effectively is crucial for a clean Git workflow. Let's learn how to organize and maintain your branches:`,
    code: `# List all branches (including remote)
git branch -a

# Delete a local branch
git branch -d feature-login

# Force delete a branch
git branch -D feature-login

# Rename a branch
git branch -m old-name new-name

# Show branch details
git show-branch`,
    additionalContent: `
📚 Key Concepts:
• Local branches: Only on your computer
• Remote branches: On the server (e.g., GitHub)
• Branch protection: Rules for branch access

💡 Pro Tips:
• Delete branches after merging
• Use consistent naming conventions
• Keep your branch list clean
• Use 'git branch --merged' to see merged branches`,
  },
  {
    title: "Advanced Branching",
    content: `Now let's explore some advanced branching techniques that will make you a Git pro!`,
    code: `# Create a branch from a specific commit
git checkout -b new-branch abc123

# Create a branch from a tag
git checkout -b new-branch v1.0.0

# Create a branch from another branch
git checkout -b feature-branch origin/feature-branch

# Track a remote branch
git checkout --track origin/feature-branch`,
    additionalContent: `
📚 Key Concepts:
• Commit hashes: Unique identifiers for commits
• Tags: Named references to specific commits
• Remote tracking: Links between local and remote branches

💡 Pro Tips:
• Use meaningful commit hashes for reference
• Create tags for releases
• Track remote branches explicitly
• Use 'git checkout -b' with specific points in history`,
  },
  {
    title: "Merging Strategies",
    content: `Merging is the art of combining changes from different branches. There are several ways to merge, each with its own benefits:`,
    code: `# Basic merge
git merge feature-branch

# Merge with no fast-forward
git merge --no-ff feature-branch

# Squash merge (combines all commits into one)
git merge --squash feature-branch

# Abort a merge if needed
git merge --abort`,
    additionalContent: `
📚 Key Concepts:
• Fast-forward merge: Simplest type (straight line)
• Merge commit: Created when branches diverged
• Squash merge: Combines multiple commits

💡 Pro Tips:
• Use --no-ff for important features
• Squash merge for cleanup
• Always test after merging
• Use 'git log --graph' to visualize merges`,
  },
  {
    title: "Rebasing",
    content: `Rebasing is an alternative to merging that creates a cleaner, more linear history. It's like rewriting history to make it look like your changes were built on top of the latest code:`,
    code: `# Basic rebase
git rebase main

# Interactive rebase (modify commits)
git rebase -i HEAD~3

# Rebase with conflict resolution
git rebase --continue

# Abort a rebase
git rebase --abort`,
    additionalContent: `
📚 Key Concepts:
• Rebase: Moving commits to new base
• Interactive rebase: Modify commit history
• Golden rule: Don't rebase public branches

💡 Pro Tips:
• Use rebase for local branches
• Interactive rebase for cleanup
• Be careful with shared branches
• Use 'git rebase -i' for commit surgery`,
  },
  {
    title: "Merge Conflicts",
    content: `Conflicts happen when Git can't automatically merge changes. Let's learn how to handle them like a pro:`,
    code: `# Check for conflicts
git status

# See detailed conflicts
git diff

# After fixing conflicts
git add <resolved-file>
git commit -m 'fix: resolve merge conflicts'

# Use merge tool
git mergetool`,
    additionalContent: `
📚 Key Concepts:
• Conflict markers: <<<<<<< HEAD, =======, >>>>>>>>
• Resolution: Choosing which changes to keep
• Merge tools: Visual conflict resolution

💡 Pro Tips:
• Use a good merge tool
• Communicate with team
• Test after resolving
• Keep changes small to avoid conflicts`,
  },
  {
    title: "Branch Protection",
    content: `Protecting your branches ensures code quality and prevents accidental changes. This is especially important for your main branch:`,
    code: `# Set up branch protection (GitHub)
# Go to Settings > Branches > Branch protection rules
# Add rule for 'main' branch

# Local branch protection
git update-ref refs/heads/main main@{1}

# Force push protection
git config --local receive.denyForceUpdates true`,
    additionalContent: `
📚 Key Concepts:
• Branch protection rules: GitHub settings
• Force push: Overwriting history
• Pull request: Code review process

💡 Pro Tips:
• Protect main branch
• Require reviews
• Enable status checks
• Use branch policies`,
  },
  {
    title: "Best Practices",
    content: `Let's wrap up with some best practices for branching and merging that will make your Git workflow smooth and efficient:`,
    code: `# Keep main branch clean
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Regular updates
git checkout main
git pull
git checkout feature/new-feature
git rebase main

# Clean up
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d`,
    additionalContent: `
📚 Key Concepts:
• Feature branch workflow
• Regular updates
• Clean history
• Branch cleanup

💡 Pro Tips:
• Keep branches short-lived
• Update regularly with main
• Delete merged branches
• Use meaningful names
• Write good commit messages`,
  },
];
