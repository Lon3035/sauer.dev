"use client";
import { ReactNode, useEffect, useState } from "react";
import { useTerminal } from "./TerminalContext";

interface TerminalBlockProps {
  typingSpeed?: number;
}

export interface Step {
  type: "command" | "output" | "component" | "loading";
  content: string | ReactNode;
  delay?: number;
}

export default function GlobalTerminalBlock({
  typingSpeed = 40,
}: TerminalBlockProps) {
  const { steps } = useTerminal();
  const [renderedSteps, setRenderedSteps] = useState<Step[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let stepIndex = 0;
    let cancelled = false;

    setRenderedSteps([]);

    const renderNextStep = () => {
      if (cancelled || stepIndex >= steps.length) return;

      const step = steps[stepIndex];

      if (step.type === "command") {
        setIsTyping(true);
        let i = 0;
        let current = "";
        const type = () => {
          if (cancelled) return;
          if (typeof step.content === "string" && i < step.content.length) {
            current += step.content[i];
            setRenderedSteps((prev) => [
              ...prev.slice(0, -1),
              { ...step, content: current },
            ]);
            i++;
            setTimeout(type, typingSpeed);
          } else {
            setIsTyping(false);
            stepIndex++;
            setTimeout(renderNextStep, step.delay ?? 500);
          }
        };
        setRenderedSteps((prev) => [...prev, { ...step, content: "" }]);
        type();
      } else if (step.type === "loading") {
        setRenderedSteps((prev) => [...prev, step]);
        setTimeout(() => {
          setRenderedSteps((prev) =>
            prev.filter((_, idx) => idx !== prev.length - 1)
          );
          stepIndex++;
          renderNextStep();
        }, step.delay ?? 500);
      } else {
        setRenderedSteps((prev) => [...prev, step]);
        stepIndex++;
        setTimeout(renderNextStep, step.delay ?? 500);
      }
    };

    renderNextStep();

    return () => {
      cancelled = true;
    };
  }, [steps, typingSpeed]);

  return (
    <div className="h-[90vh] w-screen flex flex-col bg-[#1e1e1e] text-white font-mono overflow-hidden border border-gray-700 max-w-5xl mx-auto rounded-2xl shadow-2xl mt-[-35px]">
      <div className="flex items-center space-x-2 bg-[#2c2c2c] px-4 py-2 border-b border-gray-700">
        <span className="h-3 w-3 rounded-full bg-purple-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 whitespace-pre-wrap leading-relaxed text-lg md:text-2xl space-y-1 terminal-scroll">
        {renderedSteps.map((step, idx) => {
          switch (step.type) {
            case "command":
              return (
                <div key={idx} className="flex flex-wrap">
                  <span className="text-purple-400 mr-2">user@web:~$</span>
                  <span>{step.content}</span>
                  {idx === renderedSteps.length - 1 && isTyping && (
                    <span className="animate-pulse">█</span>
                  )}
                </div>
              );
            case "output":
              return (
                <div key={idx} className="text-gray-200">
                  {step.content}
                </div>
              );
            case "component":
              return <div key={idx}>{step.content}</div>;
            case "loading":
              return (
                <div key={idx} className="flex items-center space-x-2">
                  <span>{step.content}</span>
                  <span className="animate-pulse">█</span>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
