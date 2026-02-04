"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 500, translateX: 500, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-transparent",
        className
      )}
    >
      {beams.map((beam, index) => (
        <motion.div
          key={`beam-${index}`}
          initial={{
            translateY: "0%",
            translateX: beam.initialX,
          }}
          animate={{
            translateY: "-200%",
            translateX: beam.translateX,
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            repeatDelay: beam.repeatDelay,
            delay: beam.delay || 0,
            ease: "linear",
          }}
          className={cn(
            "absolute top-0 h-10 w-px rounded-full bg-gradient-to-t from-primary via-secondary to-transparent",
            beam.className
          )}
        />
      ))}
    </div>
  );
};
