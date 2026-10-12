"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "transition" | "whileInView" | "viewport">;

export const ScrollAnimation = forwardRef<HTMLDivElement, ScrollAnimationProps>(
  ({ children, className, delay = 0, direction = "up", duration = 0.6, once = true, ...props }, ref) => {
    const directionMap = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { x: 50, y: 0 },
      right: { x: -50, y: 0 },
    };

    const initial = { opacity: 0, ...directionMap[direction] };
    const animate = { opacity: 1, x: 0, y: 0 };

    return (
      <motion.div
        ref={ref}
        initial={initial}
        animate={animate}
        transition={{ duration, delay, ease: "easeOut" }}
        whileInView={animate}
        viewport={{ once, margin: "-100px" }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollAnimation.displayName = "ScrollAnimation";

export const StaggerContainer = forwardRef<HTMLDivElement, { children: ReactNode; className?: string; staggerDelay?: number }>(
  ({ children, className, staggerDelay = 0.1 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            transition: { staggerChildren: staggerDelay },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";

export const StaggerItem = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";