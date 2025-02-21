"use client";

import { useState, useEffect } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TypingTextProps {
  text: string;
  variant?: TypographyProps["variant"];
}

export default function TypingText({ text, variant = "h3" }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setTypingComplete(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography
      variant={variant}
      align="center"
      sx={{ fontWeight: "bold", textShadow: "0 0 10px limegreen" }}
    >
      {displayText}
      <span className={`blinking-cursor ${typingComplete ? "show" : ""}`}>_</span>
      
      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .blinking-cursor {
          animation: blink 1s infinite;
          opacity: ${typingComplete ? 1 : 0}; /* Show only after typing is complete */
        }
      `}</style>
    </Typography>
  );
}