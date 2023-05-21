"use client";
import { SidebarContext } from "@/context";
import { Icon } from "@iconify/react";
import { useContext } from "react";

export const RightMenu = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className={"right-menu lg:hidden duration-300" + (isOpen === true ? " rotate-45" : "")} onClick={(e) => setIsOpen(!isOpen)}>
      <Icon className={"w-8 h-8 cursor-pointer" + (isOpen === true ? " rotate-45" : "")} icon={isOpen !== true ? "ri:menu-3-line" : "gg:close"} />
    </div>
  );
};
export default RightMenu;
