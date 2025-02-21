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
import { useEffect, useState } from "react";

const HomePage = () => {
  const [text, setText] = useState("");
  const fullText = "Code, Commit, Conquer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
      <Typography
        variant="h4"
        component="h1"
        sx={{ whiteSpace: "pre", textAlign: "center", minHeight: "80px" }}
      >
        {text}
        <span className="blinking-cursor">|</span>
      </Typography>
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

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .blinking-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
    </Box>
  );
};

const sections = [
  { title: "Git Basics", link: "/guides" },
  { title: "Branching & Merging", link: "/commands" },
  { title: "Commit Message Guide", link: "/guides" },
  { title: "Professional PRs", link: "/guides" },
  { title: "GitHub Workflow", link: "/guides" },
  { title: "Interactive Learning", link: "/interact" },
];

export default HomePage;
