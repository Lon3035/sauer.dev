import Commands from "./commands";
import type { Metadata } from "next";
import ContactStaticContent from "./ContactStaticContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Leon Sauer Contact Information",
  keywords: [
    "Leon Sauer",
    "Leon Gabriel Sauer",
    "Developer",
    "Software Engineer",
    "Business Informatics",
    "Contact",
  ],
  icons: {
    icon: "./icon.svg",
  },
};

export default function DownloadPage() {
  return (
    <div>
      <ContactStaticContent />
      <Commands />
    </div>
  );
}
