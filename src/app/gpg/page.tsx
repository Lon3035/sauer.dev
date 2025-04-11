import Commands from "./commands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPG Public Key",
  description: "GPG Key of Leon Sauer",
  keywords: [
    "Leon Sauer",
    "Leon Gabriel Sauer",
    "Developer",
    "Software Engineer",
    "Business Informatics",
    "GPG",
  ],
  icons: {
    icon: "./icon.svg",
  },
};

export default function DownloadPage() {
  return <Commands />;
}
