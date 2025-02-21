"use client";

import { useState, ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";

interface ExpandableSectionProps {
  title: string;
  content: ReactNode;
}

export default function ExpandableSection({ title, content }: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ my: 2 }}>
      <Button
        fullWidth
        sx={{
          color: "limegreen",
          fontFamily: "monospace",
          textAlign: "left",
          justifyContent: "flex-start",
          "&:hover": { backgroundColor: "rgba(0, 255, 0, 0.1)" },
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? `> ${title}` : `> ${title}`}
      </Button>
      {expanded && (
        <Box sx={{ p: 2, borderLeft: "2px solid limegreen", mt: 1 }}>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            {content}
          </Typography>
        </Box>
      )}
    </Box>
  );
}