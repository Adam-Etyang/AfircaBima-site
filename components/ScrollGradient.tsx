"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ScrollGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollable = documentHeight - windowHeight;
      const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;
      
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Light mode: #E6F0E6 (top) to #2d4536 (bottom)
  // Dark mode: #2d4536 (top) to #E6F0E6 (bottom) - reversed
  const startColor = "#E6F0E6";
  const endColor = "#2d4536";

  const gradientPosition = scrollProgress * 100;

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-all duration-300"
      style={{
        background: `linear-gradient(to bottom, ${startColor} 0%, ${endColor} 100%)`,
        opacity: 1,
        zIndex: 0,
      }}
    />
  );
};
