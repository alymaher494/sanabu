"use client";

import { forwardRef, type ReactNode, useEffect, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "transition" | "whileInView" | "viewport">;

// Props to exclude from the SSR fallback div (motion-specific props)
const motionPropKeys = new Set([
  "initial", "animate", "exit", "transition", "whileInView", "viewport",
  "whileHover", "whileTap", "whileFocus", "whileDrag", "drag", "dragConstraints",
  "dragElastic", "dragMomentum", "dragPropagation", "dragSnapToOrigin",
  "onDragStart", "onDrag", "onDragEnd", "onDragEnter", "onDragLeave",
  "onMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate",
  "style", "variants", "custom", "inherit", "layout", "layoutId",
  "layoutDependency", "transformTemplate", "transformValues",
]);

function filterMotionProps(props: Record<string, unknown>): Record<string, unknown> {
  const filtered: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!motionPropKeys.has(key) && !key.startsWith("onAnimation") && !key.startsWith("onDrag")) {
      filtered[key] = value;
    }
  }
  return filtered;
}

export const ScrollAnimation = forwardRef<HTMLDivElement, ScrollAnimationProps>(
  ({ children, className, delay = 0, direction = "up", duration = 0.6, once = true, ...props }, ref) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);

    const directionMap = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { x: 50, y: 0 },
      right: { x: -50, y: 0 },
    };

    const initial = { opacity: 0, ...directionMap[direction] };
    const animate = { opacity: 1, x: 0, y: 0 };

    // During SSR, render children without animation to avoid hydration mismatch
    if (!isMounted) {
      const safeProps = filterMotionProps(props as Record<string, unknown>);
      return <div ref={ref} className={className} {...safeProps}>{children}</div>;
    }

    return (
      <motion.div
        ref={ref}
        initial={initial}
        animate={animate}
        transition={{ duration, delay, ease: "easeOut" }}
        whileInView={animate}
        viewport={{ once, margin: "0px" }}
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
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return <div ref={ref} className={className}>{children}</div>;
    }

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
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      const safeProps = filterMotionProps(props as Record<string, unknown>);
      return <div ref={ref} className={className} {...safeProps}>{children}</div>;
    }

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