import { Stepper, Step, StepLabel } from "@mui/material";

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
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
      {sections.map((section, index) => (
        <Step
          key={section.title}
          completed={completedSteps.includes(index)}
          onClick={() => onStepClick(index)}
          sx={{
            cursor: completedSteps.includes(index) ? "pointer" : "default",
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
}
