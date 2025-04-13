import Commands from "./commands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads",
  description: `All avalable Downloads from my public Bucket`,
  keywords: [
    "Leon Sauer",
    "Leon Gabriel Sauer",
    "Developer",
    "Software Engineer",
    "Business Informatics",
    "Downloads",
  ],
  robots: "noindex",
  icons: "./icon.svg",
};

export default async function Page() {
  return <Commands />;
}
