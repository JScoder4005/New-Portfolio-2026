"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let pos = 0;
    const intervalId = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        clearInterval(intervalId);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, SHUFFLE_TIME);
  };

  useEffect(() => {
    // Run animation on mount
    scramble();
  }, []);

  return (
    <span
      className={cn("inline-block cursor-pointer", className)}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};
