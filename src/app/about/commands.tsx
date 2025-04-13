"use client";
import Neofetch from "@/components/Neofetch";
import { useTerminal } from "@/components/TerminalContext";
import { useEffect } from "react";
const Commands = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "neofetch" },
      { type: "output", content: " " },
      {
        type: "component",
        content: <Neofetch />,
      },
      { type: "output", content: " " },
      {
        type: "output",
        content:
          "Business informatics student and software engineer based in Hamburg, Germany.",
      },
      {
        type: "output",
        content:
          "Interested in building cloud native applications, exploring new technologies, and working with databases.",
      },
    ]);
  }, []);

  return <></>;
};

export default Commands;
