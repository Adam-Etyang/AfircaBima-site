"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-lg bg-light-bg dark:bg-dark-card text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-[#2a3a2a] transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" || resolvedTheme === "dark" ? <AiOutlineSun size={20} /> : <AiOutlineMoon size={20} />}
    </button>
  );
};

export default ThemeSwitch;
