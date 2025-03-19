import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";

interface CompletionSummaryProps {
  sections: Array<{ title: string }>;
}

export default function CompletionSummary({
  sections,
}: CompletionSummaryProps) {
  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <CheckCircleIcon sx={{ fontSize: 80, color: "limegreen", mb: 2 }} />
      <Typography variant="h4" sx={{ mb: 3, color: "limegreen" }}>
        Congratulations!
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
        You&apos;ve completed the Git Basics guide!
      </Typography>

      <Paper sx={{ p: 3, mb: 4, backgroundColor: "rgba(0, 255, 0, 0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2, color: "limegreen" }}>
          What you&apos;ve learned:
        </Typography>
        <List>
          {sections.map((section) => (
            <ListItem key={section.title}>
              <ListItemIcon>
                <CheckIcon sx={{ color: "limegreen" }} />
              </ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Button
        variant="outlined"
        href="/branching"
        sx={{
          color: "limegreen",
          borderColor: "limegreen",
          "&:hover": {
            borderColor: "limegreen",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
          },
        }}
      >
        Continue to Git Branching and Merging →
      </Button>
    </Box>
  );
}
