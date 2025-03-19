interface Section {
  title: string;
  content: string;
  code?: string;
  additionalContent?: string;
}

export const sections: Section[] = [
  {
    title: "Getting Started",
    content: `Git is a version control system that helps you track changes in your code - think of it like a time machine for your project! Before you start, you'll need to set up Git on your computer and configure your identity.

Here are the essential commands to get started:`,
    code: `# Check if Git is installed
git --version

# Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Get help anytime
git --help`,
    additionalContent: `
📚 Key Concepts:
• Repository (repo): A folder containing your project and its history
• Commit: A snapshot of your changes at a specific point in time
• Branch: A separate line of development

💡 Pro Tips:
• Download Git from git-scm.com if not installed
• Use a consistent email across all your Git projects
• Consider using a Git GUI client if you prefer visual tools`,
  },
  {
    title: "Initializing a Repository",
    content: `A Git repository is where your project lives. When you initialize a repository, Git creates a hidden .git folder to track all changes to your project. Let's create your first repository:`,
    code: `# Create a new project directory
mkdir my-project
cd my-project

# Initialize Git in this directory
git init

# Check what Git is tracking
git status

# Create a .gitignore file for files you don't want to track
echo "node_modules/" > .gitignore`,
    additionalContent: `
📚 Key Concepts:
• Working directory: Your project's files that you can see and edit
• .git folder: The hidden directory where Git stores all tracking information
• .gitignore: Tells Git which files to ignore

💡 Pro Tips:
• Initialize Git in your project's root folder only
• Add .gitignore before your first commit
• Use 'git status' frequently to check your repository state
• Find template .gitignore files online for your project type`,
  },
  {
    title: "Your First Commit",
    content: `A commit is like taking a snapshot of your project. Each commit captures the state of your files at that moment, along with a message describing what changed. Let's make your first commit:`,
    code: `# Create a new file
echo 'Hello, Git!' > hello.txt

# See what changed
git status
git diff

# Stage and commit the file
git add hello.txt
git commit -m 'feat: add initial hello world file'

# View your commit history
git log --oneline`,
    additionalContent: `
📚 Key Concepts:
• Staging area: Where you prepare changes for commit
• Commit message: Description of what changed and why
• Commit hash: Unique identifier for each commit

💡 Pro Tips:
• Make small, focused commits
• Write clear commit messages (start with feat:, fix:, docs:, etc.)
• Review changes with 'git diff' before committing
• Use 'git add -p' to stage specific parts of files`,
  },
  {
    title: "Understanding Branches",
    content: `Branches are like parallel universes for your code. They let you work on new features or fixes without affecting your main code. The default branch is usually called 'main' or 'master'.`,
    code: `# See what branch you're on
git branch

# Create and switch to a new branch
git checkout -b feature-branch

# Alternative way (two commands)
git branch feature-branch
git checkout feature-branch

# List all branches
git branch --all`,
    additionalContent: `
📚 Key Concepts:
• main/master: Your primary branch
• feature branch: A separate line of development
• HEAD: Points to your current location

💡 Pro Tips:
• Name branches descriptively (e.g., 'feature/user-login')
• Keep branches focused on single features
• Delete branches after merging with 'git branch -d'
• Use 'git checkout -' to switch to previous branch`,
  },
  {
    title: "Merging Changes",
    content: `Merging combines changes from different branches. When your feature is ready, you'll want to merge it back into your main branch. Here's how:`,
    code: `# Switch to main branch
git checkout main

# Get latest changes
git pull origin main

# Merge your feature branch
git merge feature-branch

# Clean up: delete the merged branch
git branch -d feature-branch`,
    additionalContent: `
📚 Key Concepts:
• Merge: Combining changes from different branches
• Fast-forward: Simplest type of merge (straight line of commits)
• Merge commit: Created when branches diverged

💡 Pro Tips:
• Always update main before merging
• Test your changes after merging
• Use 'git log --graph' to visualize merges
• Consider using 'git merge --no-ff' for important features`,
  },
  {
    title: "Remote Repositories",
    content: `Remote repositories (like those on GitHub) are hosted versions of your project that enable collaboration. They serve as a central place where team members can share code:`,
    code: `# Add a remote repository
git remote add origin <repository-url>

# View your remotes
git remote -v

# Push your code to remote
git push -u origin main

# Get an existing project
git clone <repository-url>`,
    additionalContent: `
📚 Key Concepts:
• Remote: A hosted version of your repository
• Origin: The conventional name for your main remote
• Push/Pull: Commands to send/receive changes

💡 Pro Tips:
• Set up SSH keys for secure authentication
• Always pull before pushing new changes
• Use meaningful remote names
• Check remote URLs with 'git remote -v'`,
  },
  {
    title: "Pulling Changes",
    content: `When working with others, you'll need to get their changes from the remote repository. Pulling updates your local code with any new changes:`,
    code: `# Get and merge remote changes
git pull origin main

# Alternative: fetch first to review
git fetch origin
git status
git merge origin/main

# Pull with rebase
git pull --rebase origin main`,
    additionalContent: `
📚 Key Concepts:
• Pull = Fetch + Merge
• Fetch: Downloads changes without applying
• Remote tracking: Links between local and remote

💡 Pro Tips:
• Pull regularly to stay up to date
• Use fetch first if unsure about changes
• Set up branch tracking with '-u' flag
• Use 'git pull --rebase' to keep history clean`,
  },
  {
    title: "Resolving Conflicts",
    content: `Conflicts occur when Git can't automatically merge changes. This happens when different people modify the same part of a file. Don't worry - conflicts are normal and resolvable:`,
    code: `# Check for conflicts
git status

# The conflict markers in your files look like this:
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>>>

# After fixing conflicts
git add <resolved-file>
git commit -m 'fix: resolve merge conflicts'

# If things go wrong
git merge --abort`,
    additionalContent: `
📚 Key Concepts:
• Conflict markers: Show where changes conflict
• Resolution: Process of choosing which changes to keep
• Manual merge: When you need to edit files directly

💡 Pro Tips:
• Use a merge tool for complex conflicts
• Communicate with team about changes
• Test thoroughly after resolving conflicts
• Consider using 'git rebase' instead of merge`,
  },
];
