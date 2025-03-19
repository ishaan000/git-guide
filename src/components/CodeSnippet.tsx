import { Box } from "@mui/material";

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#111", 
        color: "limegreen", 
        p: 2,
        borderRadius: 1,
        whiteSpace: "pre-wrap",
        fontFamily: "monospace",
        overflowX: "auto",
        border: "1px solid limegreen",
      }}
    >
      {code}
    </Box>
  );
}
