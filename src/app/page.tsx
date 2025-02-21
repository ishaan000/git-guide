"use client";

import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" textAlign="center">
        <Typography variant="h3" gutterBottom>
          Git Guide
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Master Git and GitHub with best practices and workflows.
        </Typography>
      </Box>
    </Container>
  );
}
