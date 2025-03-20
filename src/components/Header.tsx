import Link from "next/link";
import TypingText from "./TypingText";

export default function Header() {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
      <TypingText text="> Git Guide" variant="h3" />
    </Link>
  );
}
