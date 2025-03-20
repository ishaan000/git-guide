import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  Button,
} from "@mui/material";
import CodeSnippet from "./CodeSnippet";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ExpandableSection from "./ExpandableSection";
import { useState, ReactNode } from "react";

interface SectionContentProps {
  section: {
    title: string;
    content: ReactNode;
    code?: string;
    additionalContent?: string;
  };
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isLast: boolean;
  copiedCode: string | null;
  onCopyCode: (code: string) => void;
  onBack: () => void;
  onComplete: (index: number) => void;
}

export default function SectionContent({
  section,
  index,
  isActive,
  isCompleted,
  isFirst,
  isLast,
  copiedCode,
  onCopyCode,
  onBack,
  onComplete,
}: SectionContentProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  if (!isActive) return null;

  const handleComplete = () => {
    setShowConfetti(true);
    onComplete(index);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Split additionalContent into sections
  const sections = section.additionalContent?.split(/\n(?=🎯|💡|📚)/) || [];
  const interactiveExercise =
    sections
      .find((s) => s.startsWith("💡"))
      ?.replace("💡 Interactive Exercise:", "")
      .trim() || "";
  const keyConcepts =
    sections
      .find((s) => s.startsWith("📚"))
      ?.replace("📚", "")
      .trim() || "";

  return (
    <Box
      sx={{
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        position: "relative",
      }}
    >
      {showConfetti && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {/* Add some fun emoji confetti */}
          <Typography
            sx={{
              position: "absolute",
              animation: "fall 2s linear",
              "@keyframes fall": {
                "0%": { transform: "translateY(-100%) rotate(0deg)" },
                "100%": { transform: "translateY(100vh) rotate(360deg)" },
              },
            }}
          >
            🎉 ⭐️ 🚀 💫 ✨
          </Typography>
        </Box>
      )}

      <Typography variant="h5" sx={{ mb: 2, color: "limegreen" }}>
        {section.title}
      </Typography>

      <Box sx={{ mb: 3 }}>{section.content}</Box>

      {section.code && (
        <Box sx={{ position: "relative", mb: 3 }}>
          <CodeSnippet code={section.code} />
          <Tooltip
            title={copiedCode === section.code ? "Copied!" : "Copy code"}
          >
            <IconButton
              onClick={() => onCopyCode(section.code!)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: copiedCode === section.code ? "limegreen" : "inherit",
              }}
            >
              {copiedCode === section.code ? (
                <CheckCircleIcon />
              ) : (
                <ContentCopyIcon />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {section.additionalContent && (
        <Box sx={{ mb: 3 }}>
          <ExpandableSection
            title="Interactive Exercise"
            variant="exercise"
            content={
              <Typography
                variant="body2"
                component="pre"
                sx={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  mb: 0,
                }}
              >
                {interactiveExercise}
              </Typography>
            }
          />
          <ExpandableSection
            title="Key Concepts"
            variant="concepts"
            content={
              <Typography
                variant="body2"
                component="pre"
                sx={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  mb: 0,
                }}
              >
                {keyConcepts}
              </Typography>
            }
          />
        </Box>
      )}

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={onBack}
          disabled={isFirst}
          startIcon={<NavigateBeforeIcon />}
          sx={{
            color: "limegreen",
            borderColor: "limegreen",
            "&:hover": {
              borderColor: "limegreen",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            },
            "&.Mui-disabled": {
              color: "rgba(0, 255, 0, 0.3)",
            },
          }}
        >
          Previous
        </Button>

        <Button
          variant="outlined"
          onClick={handleComplete}
          endIcon={<NavigateNextIcon />}
          sx={{
            color: "limegreen",
            borderColor: "limegreen",
            "&:hover": {
              borderColor: "limegreen",
              backgroundColor: "rgba(0, 255, 0, 0.1)",
            },
          }}
        >
          {isLast ? "Finish" : isCompleted ? "Next" : "Complete & Continue"}
        </Button>
      </Stack>
    </Box>
  );
}
