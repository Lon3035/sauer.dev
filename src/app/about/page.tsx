import Commands from "./commands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About me page of Leon Sauer",
  keywords: [
    "Leon Sauer",
    "Leon Gabriel Sauer",
    "Developer",
    "Software Engineer",
    "Business Informatics",
    "About me",
  ],
  icons: {
    icon: "./icon.svg",
  },
};

export default function AboutPage() {
  return <Commands />;
}
