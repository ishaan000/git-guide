"use client";

import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import TypingText from "@/components/TypingText";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#00ff00",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <TypingText text="> Code Commit Conquer" variant="h3" />

      <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
        Your guide to mastering Git.
      </Typography>

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          {sections.map(({ title, link }, index) => (
            <Grid size={6} key={index}>
              <Link href={link} passHref>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    backgroundColor: "#0a0a0a",
                    color: "#00ff00",
                    border: "1px solid #00ff00",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const sections = [
  { title: "Git Basics", link: "/basics" },
  { title: "Branching & Merging", link: "/branching" },
  { title: "Commit Message Guide", link: "/commits" },
  { title: "Professional PRs", link: "/prs" },
  { title: "GitHub Workflow", link: "/workflows" },
  { title: "Interactive Learning", link: "/interact" },
];

export default HomePage;
