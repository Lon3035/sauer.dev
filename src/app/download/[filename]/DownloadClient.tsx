"use client";

import React, { useEffect } from "react";
import DownloadButton from "@/components/DownloadButton";
import { useTerminal } from "@/components/TerminalContext";

type DownloadClientProps = {
  filename: string;
};

export default function DownloadClient({ filename }: DownloadClientProps) {
  const { addSteps, clearSteps } = useTerminal();

  useEffect(() => {
    clearSteps();

    if (!filename) {
      addSteps([
        { type: "command", content: "curl --head <invalid-url>" },
        { type: "output", content: "❌ Filename is required." },
      ]);
      return;
    }

    const fileURL = `https://bucket.sauer.dev/${encodeURIComponent(filename)}`;

    addSteps([
      {
        type: "command",
        content: `curl --head ${fileURL}`,
      },
    ]);

    const fetchFileSize = async () => {
      try {
        const response = await fetch(fileURL, { method: "HEAD" });

        if (!response.ok) {
          throw new Error("File not found or error fetching metadata");
        }

        const contentLength = response.headers.get("Content-Length");
        const sizeInMB = contentLength
          ? `${(parseInt(contentLength, 10) / (1024 * 1024)).toFixed(2)} MB`
          : "Unknown size";
        addSteps([
          { type: "output", content: `📁 ${filename}`, delay: 400 },
          { type: "output", content: `Size: ${sizeInMB}`, delay: 400 },
          { type: "loading", content: `Downloading...`, delay: 2000 },
          {
            type: "component",
            content: (
              <DownloadButton
                fileName={"If the download doesn't start, click here"}
                downloadUrl={fileURL}
              />
            ),
            delay: 400,
          },
        ]);

        setTimeout(() => {
          window.location.href = fileURL;
        }, 3000);
      } catch (err: unknown) {
        if (err instanceof Error) {
          addSteps([{ type: "output", content: `❌ Error: ${err.message}` }]);
        } else {
          addSteps([
            { type: "output", content: "❌ An unknown error occurred." },
          ]);
        }
      }
    };

    fetchFileSize();
  }, []);

  return null;
}
