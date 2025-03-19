import { Container } from "@mui/material";
import Header from "@/components/Header";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 4, color: "limegreen", fontFamily: "monospace" }}
    >
      <Header />
      {children}
    </Container>
  );
}
