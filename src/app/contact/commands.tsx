"use client";
import LinkButton from "@/components/LinkButton";
import { useTerminal } from "@/components/TerminalContext";
import { useEffect } from "react";

const Commands = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "cat ./sauer/leon/contact_info.txt" },
      { type: "output", content: " ", delay: 10 },
      { type: "output", content: "Leon Gabriel Sauer" },
      { type: "output", content: " ", delay: 10 },
      { type: "output", content: "E-Mail:" },
      { type: "output", content: "sauer.leongabriel@gmail.com" },
      { type: "output", content: " ", delay: 10 },
      { type: "output", content: "Socials:" },
      {
        type: "component",
        content: <LinkButton url="https://github.com/Lon3035" label="Github" />,
      },
      {
        type: "component",
        content: (
          <LinkButton
            url="https://www.linkedin.com/in/leon-gabriel-sauer-242b73225/"
            label="LinkedIn"
          />
        ),
      },
    ]);
  }, []);

  return <></>;
};

export default Commands;
