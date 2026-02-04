"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const animateStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const distance = 1000;

      setStar({
        left: `${x}px`,
        top: `${y}px`,
        width: `${starWidth}px`,
        height: `${starHeight}px`,
        opacity: 0,
        background: `linear-gradient(to right, ${starColor}, ${trailColor})`,
        transform: `rotate(${angle}deg)`,
        animation: `shooting ${speed}s linear`,
      });

      setTimeout(() => {
        setStar(null);
      }, speed * 1000);
    };

    const randomDelay = () =>
      Math.random() * (maxDelay - minDelay) + minDelay;

    const scheduleNextStar = () => {
      setTimeout(() => {
        animateStar();
        scheduleNextStar();
      }, randomDelay());
    };

    scheduleNextStar();
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starColor, trailColor, starWidth, starHeight]);

  return (
    <>
      <style>{`
        @keyframes shooting {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(var(--angle));
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(300px) translateY(300px) rotate(var(--angle));
          }
        }
      `}</style>
      {star && (
        <span
          className={cn("absolute z-[2] rounded-full", className)}
          style={star}
        />
      )}
    </>
  );
};
