"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1] as const,
            delay: 0.1,
          },
        }}
        exit={{
          opacity: 0,
          y: -10,
          transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1] as const,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
