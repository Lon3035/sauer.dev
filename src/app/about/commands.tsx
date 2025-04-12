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
    ]);
  }, []);

  return <></>;
};

export default Commands;
