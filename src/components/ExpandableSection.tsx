"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Collapse } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface ExpandableSectionProps {
  title: string;
  content: React.ReactNode;
  variant: "concepts" | "tips";
  defaultExpanded?: boolean;
}

export default function ExpandableSection({
  title,
  content,
  variant = "concepts",
  defaultExpanded = false,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const getIcon = () => {
    switch (variant) {
      case "concepts":
        return <MenuBookIcon fontSize="small" />;
      case "tips":
        return <LightbulbIcon fontSize="small" />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          p: 1,
          borderRadius: 1,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 255, 0, 0.05)",
          },
        }}
      >
        <IconButton
          size="small"
          sx={{
            color: "limegreen",
            transform: expanded ? "rotate(90deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            ml: 1,
            fontFamily: "monospace",
            color: "limegreen",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {getIcon()} {title}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Box
          sx={{
            ml: 4,
            pl: 2,
            borderLeft: "2px solid limegreen",
            mt: 1,
          }}
        >
          {content}
        </Box>
      </Collapse>
    </Box>
  );
}
