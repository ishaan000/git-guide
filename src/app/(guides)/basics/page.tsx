"use client";

import { Typography, Box, Paper } from "@mui/material";
import CompletionSummary from "@/components/CompletionSummary";
import SectionContent from "@/components/SectionContent";
import ProgressBar from "@/components/ProgressBar";
import StepNavigation from "@/components/StepNavigation";
import { sections } from "@/data/gitBasics";
import { useState } from "react";

export default function Basics() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStepComplete = (step: number) => {
    if (step === activeStep && !completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
    if (step === sections.length - 1) {
      setIsCompleted(true);
    } else {
      setActiveStep(step + 1);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = (index: number) => {
    if (completedSteps.includes(index)) {
      setActiveStep(index);
    }
  };

  return (
    <>
      <Typography variant="body1" align="center" sx={{ opacity: 0.8, mb: 4 }}>
        Master Git fundamentals through interactive learning
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: "black",
          border: "1px solid limegreen",
          borderRadius: 2,
        }}
      >
        {!isCompleted ? (
          <>
            <ProgressBar
              completedSteps={completedSteps.length}
              totalSteps={sections.length}
            />

            <StepNavigation
              sections={sections}
              activeStep={activeStep}
              completedSteps={completedSteps}
              onStepClick={handleStepClick}
            />

            <Box sx={{ mt: 4 }}>
              {sections.map((section, index) => (
                <SectionContent
                  key={section.title}
                  section={section}
                  index={index}
                  isActive={activeStep === index}
                  isCompleted={completedSteps.includes(index)}
                  isFirst={index === 0}
                  isLast={index === sections.length - 1}
                  copiedCode={copiedCode}
                  onCopyCode={handleCopyCode}
                  onBack={handleBack}
                  onComplete={handleStepComplete}
                />
              ))}
            </Box>
          </>
        ) : (
          <CompletionSummary
            sections={sections}
            guideName="Basics"
            nextGuide={{
              name: "Branching and Merging",
              path: "/branching",
            }}
          />
        )}
      </Paper>
    </>
  );
}
