"use client";
import { FloatingNav } from "./ui/floating-navbar";
import {
  House,
  User,
  Mail,
} from "lucide-react";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <FloatingNav navItems={navItems} className="" />
  );
}
