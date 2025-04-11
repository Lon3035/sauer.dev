// pages/DownloadPage.tsx
import DownloadButton from "../components/DownloadButton";
import { useEffect } from "react";
import { useTerminal } from "../components/TerminalContext";
import { Helmet } from "react-helmet";
import ClientOnly from "../components/ClientOnly";

export default function DownloadPage() {
  const { addSteps, clearSteps } = useTerminal();

  useEffect(() => {
    fetch("/gpg_pubkey.gpg")
      .then((response) => response.text())
      .then((data) => {
        clearSteps();
        addSteps([
          { type: "command", content: "cat ./gpg_pubkey.gpg" },
          { type: "output", content: data },
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
  return (
    <ClientOnly>
      <Helmet>
        <title>GPG Public Key</title>
        <meta property="og:title" content={`GPG public key`} />
        <meta property="og:description" content={`Download public key`} />
        <meta property="og:type" content="website" />
      </Helmet>
    </ClientOnly>
  );
}
