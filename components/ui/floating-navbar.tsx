"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "components/lib/utils";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "components/ui/dropdown-menu";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#d3ded3] dark:bg-[#111816] px-3 py-2.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 transition-colors">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          {/* <div className="h-5 w-px bg-neutral-300 dark:bg-white/10" /> */}

          {/* Theme Toggle Button */}
          {/* {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" || resolvedTheme === "dark" ? <AiOutlineSun size={18} /> : <AiOutlineMoon size={18} />}
            </button>
          )} */}

          {/* Divider */}
          {/* <div className="h-5 w-px bg-neutral-300 dark:bg-white/10" /> */}

          {/* Login Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-teal-400 relative rounded-full px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:shadow-lg dark:text-white">
                <span>Login</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#d3ded3] dark:bg-[#1a1f1a] border-1 border-[#2d4536] mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <DropdownMenuItem asChild className="focus:bg-teal-800 dark:focus:bg-teal-900/30 transition-colors">
                <a href="/login/customer" className="cursor-pointer">
                  Login as Customer
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-teal-800 dark:focus:bg-teal-900/30 transition-colors border-0">
                <a href="/login/agent" className="cursor-pointer">
                  Login as Agent
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
