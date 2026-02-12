"use client";

import React from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme((prev)=>{
      const next = prev === "light" ? "dark" : "light"

      if(next === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return next
    });
  };
  return (
    <Button variant={"outline"} size={"icon"} className="relative" onClick={toggleTheme}>
      <SunIcon className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute scale-0 rotate-90 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ModeToggle;
