import { Box, LinearProgress, Typography } from "@mui/material";

interface ProgressBarProps {
  completedSteps: number;
  totalSteps: number;
}

export default function ProgressBar({
  completedSteps,
  totalSteps,
}: ProgressBarProps) {
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <Box sx={{ mb: 2 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(0, 255, 0, 0.1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "limegreen",
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "right", mt: 1 }}
      >
        {completedSteps} of {totalSteps} sections completed
      </Typography>
    </Box>
  );
}
