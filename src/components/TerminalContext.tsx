"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Step } from "./TerminalBlock";

interface TerminalContextType {
  steps: Step[];
  addStep: (step: Step) => void;
  clearSteps: () => void;
  addSteps: (newSteps: Step[]) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export const TerminalProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setSteps] = useState<Step[]>([]);

  const addStep = (step: Step) => setSteps((prev) => [...prev, step]);
  const addSteps = (newSteps: Step[]) =>
    setSteps((prev) => [...prev, ...newSteps]);
  const clearSteps = () => setSteps([]);

  return (
    <TerminalContext.Provider value={{ steps, addStep, clearSteps, addSteps }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context)
    throw new Error("useTerminal must be used within TerminalProvider");
  return context;
};
