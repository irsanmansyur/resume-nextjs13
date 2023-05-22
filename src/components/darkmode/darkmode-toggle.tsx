"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
export const DarkModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  let currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    if (theme == "system") return setTheme("dark");
    else if (theme == "dark") return setTheme("light");
    setTheme("system");
  };

  return (
    <div className="relative dark:bg-gray-600 border border-default p-1 rounded-md text-primary cursor-pointer overflow-hidden" onClick={changeTheme}>
      <div className="w-6 h-6 flex items-center">
        <div className={`duration-300 inline-flex items-center gap-3${theme === "dark" ? " -translate-x-[36px]" : theme == "light" ? " -translate-x-[70px]" : ""}`}>
          <Icon icon={"icon-park-outline:computer"} className="w-6 h-6" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-yellow-400"
          >
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
          <Icon icon={"ph:sun-light"} className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
