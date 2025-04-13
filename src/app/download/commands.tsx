"use client";
import { useTerminal } from "@/components/TerminalContext";
import { useEffect } from "react";
import LinkButton from "@/components/LinkButton";
import type { Step } from "@/components/TerminalBlock";

const Commands = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    const fetchDownloads = async () => {
      const response = await fetch("https://bucket.sauer.dev/");
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "application/xml");
      const contents = xmlDoc.getElementsByTagName("Contents");

      const downloadSteps: Step[] = Array.from(contents).map((content) => {
        const key = content.getElementsByTagName("Key")[0].textContent;
        const url = `https://sauer.dev/download/${key}`;
        return {
          type: "component" as const,
          content: (
            <LinkButton url={url} label={`Download: ${key}`} sameTab={true} />
          ),
        };
      });

      addSteps([
        { type: "command", content: "curl bucket.sauer.dev" },
        { type: "output", content: " ", delay: 10 },
        { type: "output", content: "Avalable Downloads:" },
        ...downloadSteps,
      ]);
    };

    fetchDownloads();
  }, []);

  return <></>;
};

export default Commands;
