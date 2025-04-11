"use client";
import { useTerminal } from "@/components/TerminalContext";
import { useEffect } from "react";

const NotFoundCommands = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "cat 404.txt" },
      { type: "output", content: " " },
      { type: "output", content: "⚠️ 404 - Page Not Found ⚠️", delay: 700 },
      { type: "output", content: " " },
      {
        type: "output",
        content: "The page you are looking for does not exist.",
      },
      { type: "output", content: "It might have been moved or deleted." },
      { type: "output", content: " " },
      {
        type: "output",
        content: "Please check the URL or return to the homepage.",
      },
      { type: "output", content: " " },
      { type: "output", content: " " },
    ]);
  }, []);

  return <></>;
};

export default NotFoundCommands;
