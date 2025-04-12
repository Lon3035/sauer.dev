"use client";

import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";
import { useTerminal } from "@/components/TerminalContext";

export default function Commands() {
  const { addSteps, clearSteps } = useTerminal();

  useEffect(() => {
    fetch("/gpg_pubkey.gpg")
      .then((response) => response.text())
      .then((data) => {
        clearSteps();
        addSteps([
          { type: "command", content: "cat ./gpg_pubkey.gpg" },
          { type: "output", content: data, style: "text-sm md:text-xl" },
          {
            type: "component",
            content: (
              <DownloadButton
                fileName="gpg_pubkey.gpg"
                downloadUrl="/gpg_pubkey.gpg"
              />
            ),
          },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching GPG key:", error);
      });
  }, []);

  return <></>;
}
