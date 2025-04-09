import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import DownloadButton from "./components/DownloadButton";
import { useTerminal } from "./components/TerminalContext";

const Download: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filename = params.get("filename");

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
  }, [filename]);

  return (
    <>
      <Helmet>
        <title>{filename || "Download"}</title>
        <meta property="og:title" content={`📁 ${filename}`} />
        <meta property="og:description" content={`Download file ${filename}`} />
        <meta
          property="og:url"
          content={`https://bucket.sauer.dev/${filename}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
};

export default Download;
