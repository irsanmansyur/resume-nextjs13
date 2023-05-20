"use client";
import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};
export const RightMenu = ({ setOpenSidebar, openSidebar, ...props }: Props) => {
  return (
    <div className="right-menu lg:hidden absolute right-4 top-5 z-10" onClick={(e) => setOpenSidebar(!openSidebar)}>
      <Icon className="w-6 h-6 cursor-pointer" icon={"ri:menu-3-line"} />
    </div>
  );
};
export default RightMenu;
