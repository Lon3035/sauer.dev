import React, { useState, useEffect, useRef } from "react";
import "./TypingEffect.css";

interface TypingEffectProps {
  words: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ words }) => {
  const [displayText, setDisplayText] = useState("");
  const [textCompleted, setTextCompleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [delay, setDelay] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTypingEffect = () => {
    const word = words[wordIndex];
    const isLastWord = wordIndex === words.length - 1;

    if (!isDeleting && !textCompleted) {
      if (charIndex < word.length) {
        setDisplayText((prev) => prev + word.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        setDelay(150); // Schreibgeschwindigkeit
      } else {
        setIsDeleting(true);
        setDelay(1000); // Pause vor dem Löschen
        if (isLastWord) setTextCompleted(true);
      }
    } else if (isDeleting && displayText.length > 0) {
      setDisplayText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
      setDelay(50); // Schnell löschen
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setDelay(150);
      if (!isLastWord) {
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  };

  const handleGlobalKeyPress = (event: KeyboardEvent) => {
    if (containerRef.current && !textCompleted) {
      if (event.key.length === 1) {
        setDisplayText((prev) => prev + event.key);
      } else if (event.key === "Backspace") {
        setDisplayText((prev) => prev.slice(0, -1));
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleTypingEffect, delay);
    return () => clearTimeout(timer);
  }, [charIndex, displayText, isDeleting, textCompleted, delay]);

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => document.removeEventListener("keydown", handleGlobalKeyPress);
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="text-white text-center text-6xl md:text-8xl font-bold focus:outline-none cursor-default"
      onClick={() => containerRef.current?.focus()}
    >
      <span>{displayText}</span>
      <span className="cursor" />
    </div>
  );
};

export default TypingEffect;
