"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
export const DarkModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  let currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative bg-gray-600 w-8 h-8 rounded-full text-primary cursor-pointer overflow-hidden" onClick={changeTheme}>
      <div className={`duration-300 pt-1 pl-1 inline-flex h-6  gap-2${currentTheme === "light" ? " -translate-x-8" : ""}`}>
        <div className={`bg-default w-6 h-6 rounded-full flex justify-center items-center`}>
          <Icon icon={"ic:twotone-dark-mode"} className="h-5 w-5" />
        </div>
        <div className={`bg-default w-6 h-6 rounded-full flex justify-center items-center`}>
          <Icon icon={"ph:sun-light"} className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
