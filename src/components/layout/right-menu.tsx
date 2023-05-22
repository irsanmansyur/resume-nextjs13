"use client";
import { SidebarContext } from "@/context";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import Navbar2 from "./navbar2";

export const RightMenu = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className={"right-menu lg:hidden duration-300 border border-default p-1 rounded-md relative dark:bg-slate-900 "} onClick={(e) => setIsOpen(!isOpen)}>
      <Icon className={"w-6 h-6 cursor-pointer"} icon={isOpen !== true ? "line-md:close-to-menu-transition" : "line-md:menu-to-close-transition"} />
      <Navbar2 />
    </div>
  );
};
export default RightMenu;
