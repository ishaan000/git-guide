import { Box } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        overflow: "auto",
        borderRadius: 1,
        border: "1px solid rgba(0, 255, 0, 0.2)",
        "& pre": {
          margin: 0,
          borderRadius: 1,
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
        },
        "&::-webkit-scrollbar": {
          height: 8,
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(0, 255, 0, 0.1)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 255, 0, 0.3)",
          borderRadius: 4,
        },
      }}
    >
      <SyntaxHighlighter
        language="bash"
        style={atomDark}
        customStyle={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "1rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
