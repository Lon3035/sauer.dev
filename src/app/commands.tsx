"use client";
import AsciiArt from "@/components/AsciiArt";
import { useTerminal } from "@/components/TerminalContext";
import { useEffect } from "react";

const Commands = () => {
  const { addSteps } = useTerminal();

  useEffect(() => {
    addSteps([
      { type: "command", content: "go run ./cmd/app/main.go" },
      { type: "output", content: "Hello World!" },
      { type: "output", content: " ", delay: 10 },
      {
        type: "component",
        content: <AsciiArt art={["  /\\_/\\  ", " ( o.o ) ", "  > ^ <  "]} />,
      },
      { type: "output", content: " ", delay: 10 },
      { type: "output", content: "Hi, I'm Leon ^^" },
      {
        type: "output",
        content: "Welcome to my little corner of the internet!",
      },
      { type: "output", content: " ", delay: 10 },
      {
        type: "output",
        content:
          "Feel free to look around and reach out if you’d like to connect!",
      },
    ]);
  }, []);

  return <></>;
};

export default Commands;
