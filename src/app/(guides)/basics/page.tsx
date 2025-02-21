"use client";

import { Container, Typography, Box } from "@mui/material";
import TypingText from "@/components/TypingText";
import ExpandableSection from "@/components/ExpandableSection";

export default function Basics() {
  return (
    <Container maxWidth="md" sx={{ py: 4, color: "limegreen", fontFamily: "monospace" }}>
      <TypingText text="> GitHub Basics" variant="h3" />
      <Typography variant="body1" align="center" sx={{ opacity: 0.8 }}>
        Learn Git step by step.
      </Typography>

      <Box sx={{ border: "1px solid limegreen", p: 2, mt: 2, backgroundColor: "black" }}>
        {sections.map((section) => (
          <ExpandableSection key={section.title} title={section.title} content={section.content} />
        ))}
      </Box>
    </Container>
  );
}

const sections = [
  { title: "Getting Started", content: "Create a GitHub account and set up repositories to host your projects." },
  { title: "Creating a Repository", content: "Go to GitHub → Click 'New' → Enter details → Choose visibility → Click 'Create repository'." },
  { title: "Cloning a Repository", content: "Click 'Code' on the repository page → Copy URL → Run:\n\n```bash\ngit clone <repository-url>\n```" },
  { title: "Committing Changes", content: "Modify files → Stage using:\n\n```bash\ngit add <file>\n```\n\nCommit using:\n\n```bash\ngit commit -m 'message'\n```" },
  { title: "Pushing Changes", content: "Push commits to remote using:\n\n```bash\ngit push origin <branch-name>\n```" },
  { title: "Pull Requests", content: "Push branch → Open GitHub → Go to 'Pull Requests' → Click 'New pull request' → Add details." },
  { title: "Branching", content: "Create:\n\n```bash\ngit checkout -b <branch>\n```\n\nSwitch:\n\n```bash\ngit checkout <branch>\n```" },
  { title: "Merging Branches", content: "Switch to main:\n\n```bash\ngit checkout main\n```\n\nMerge:\n\n```bash\ngit merge <branch>\n```" },
  { title: "Issues", content: "Track tasks: Open repository → 'Issues' tab → 'New issue' → Enter details → Submit." },
  { title: "Collaborating", content: "Go to 'Settings' → 'Collaborators' → Add user → They can clone & contribute." },
  { title: "GitHub Actions", content: "Go to 'Actions' → Set up workflow → Define in YAML file." },
];