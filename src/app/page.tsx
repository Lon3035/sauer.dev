import Commands from "./commands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauer.dev",
  description: "Personal Website of Leon Sauer",
  keywords: [
    "Leon Sauer",
    "Leon Gabriel Sauer",
    "Developer",
    "Software Engineer",
    "Business Informatics",
    "Homepage",
  ],
  icons: {
    icon: "./icon.svg",
  },
};

export default function Home() {
  return <Commands />;
}
