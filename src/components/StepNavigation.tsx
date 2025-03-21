import {
  Stepper,
  Step,
  StepLabel,
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface StepNavigationProps {
  sections: Array<{ title: string }>;
  activeStep: number;
  completedSteps: number[];
  onStepClick: (index: number) => void;
}

export default function StepNavigation({
  sections,
  activeStep,
  completedSteps,
  onStepClick,
}: StepNavigationProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isExpanded, setIsExpanded] = useState(false);

  const StepperContent = () => (
    <Stepper
      activeStep={activeStep}
      alternativeLabel={!isMobile}
      orientation={isMobile ? "vertical" : "horizontal"}
      sx={{
        width: "100%",
        "& .MuiStepLabel-root": {
          flexDirection: isMobile ? "row" : "column",
          alignItems: isMobile ? "center" : "center",
          minHeight: isMobile ? "auto" : "72px",
        },
        "& .MuiStepLabel-label": {
          fontSize: isMobile ? "0.875rem" : "0.75rem",
          wordBreak: "normal",
          whiteSpace: "normal",
          maxWidth: isMobile ? "none" : "120px",
          textAlign: isMobile ? "left" : "center",
          lineHeight: 1.3,
          mt: isMobile ? 0 : 1,
          display: "block",
          minHeight: isMobile ? "auto" : "36px",
          pl: isMobile ? 1 : 0,
        },
        "& .MuiStepIcon-root": {
          fontSize: isMobile ? "1.5rem" : "1.2rem",
          marginBottom: isMobile ? 0 : 1,
        },
        "& .MuiStep-root": {
          padding: { xs: 1, sm: "0 8px" },
          flex: isMobile ? "none" : "1 1 0px",
        },
        "& .MuiStepConnector-root": {
          flex: "none",
          minWidth: "16px",
          top: isMobile ? "24px" : "12px",
          ml: isMobile ? "12px" : 0,
        },
        "& .MuiStepLabel-iconContainer": {
          pr: isMobile ? 0 : "inherit",
        },
      }}
    >
      {sections.map((section, index) => (
        <Step
          key={section.title}
          completed={completedSteps.includes(index)}
          onClick={() => {
            onStepClick(index);
            if (isMobile) setIsExpanded(false);
          }}
          sx={{
            cursor: completedSteps.includes(index) ? "pointer" : "default",
            mb: isMobile ? 1 : 0,
            "& .MuiStepLabel-label": {
              color: completedSteps.includes(index) ? "limegreen" : "inherit",
              "&:hover": {
                color: completedSteps.includes(index) ? "limegreen" : "inherit",
                textDecoration: completedSteps.includes(index)
                  ? "underline"
                  : "none",
              },
            },
          }}
        >
          <StepLabel>{section.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  if (!isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        <StepperContent />
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          border: "1px solid rgba(0, 255, 0, 0.2)",
          borderRadius: 1,
          p: 1,
          mb: 1,
          "&:hover": {
            backgroundColor: "rgba(0, 255, 0, 0.05)",
          },
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Step
          active={true}
          completed={completedSteps.includes(activeStep)}
          sx={{
            flex: 1,
            p: 0,
            "& .MuiStepLabel-root": {
              alignItems: "center",
            },
            "& .MuiStepLabel-label": {
              color: "limegreen",
              pl: 1,
            },
            "& .MuiStepLabel-iconContainer": {
              pr: 0,
            },
          }}
        >
          <StepLabel>{sections[activeStep].title}</StepLabel>
        </Step>
        <IconButton
          size="small"
          sx={{
            color: "limegreen",
            transform: isExpanded ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Collapse in={isExpanded}>
        <Box
          sx={{
            border: "1px solid rgba(0, 255, 0, 0.2)",
            borderRadius: 1,
            p: 1,
            mt: 1,
          }}
        >
          <StepperContent />
        </Box>
      </Collapse>
    </Box>
  );
}
