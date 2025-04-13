import Commands from "./commands";
import type { Metadata } from "next";
import HomeStaticContent from "./HomeStaticContent";

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
  icons: "./icon.svg",
};

export default function Home() {
  return (
    <>
      <HomeStaticContent />
      <Commands />
    </>
  );
}
