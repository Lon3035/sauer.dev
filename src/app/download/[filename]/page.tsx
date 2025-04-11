import DownloadClient from "./DownloadClient";
import type { Metadata } from "next";

type DownloadPageProps = {
  params: Promise<{ filename: string }>;
};

export async function generateMetadata({
  params,
}: DownloadPageProps): Promise<Metadata> {
  const { filename } = await params;
  const fileURL = `https://bucket.sauer.dev/${encodeURIComponent(filename)}`;
  let sizeInfo = "";

  try {
    const response = await fetch(fileURL, { method: "HEAD" });
    if (response.ok) {
      const contentLength = response.headers.get("Content-Length");
      if (contentLength) {
        const sizeMB = (parseInt(contentLength, 10) / (1024 * 1024)).toFixed(2);
        sizeInfo = ` ${sizeMB} MB`;
      }
    }
  } catch (error) {
    console.error("Error fetching file size:", error);
  }

  return {
    title: filename || "Download",
    description: `Download ${filename} • ${sizeInfo}`,
    keywords: [
      "Leon Sauer",
      "Leon Gabriel Sauer",
      "Developer",
      "Software Engineer",
      "Business Informatics",
      "Download",
    ],
    icons: {
      icon: "./icon.svg",
    },
    openGraph: {
      title: `📁 ${filename}`,
      description: `Download ${filename} • ${sizeInfo}`,
      url: fileURL,
      type: "website",
    },
  };
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { filename } = await params;
  return <DownloadClient filename={filename} />;
}
