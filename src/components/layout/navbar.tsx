"use client";
import { UserType } from "@/interfaces";
import { NavLink } from "./navlink";
import RightMenu from "./right-menu";
import { useState } from "react";

type Props = { user: UserType };
export const Navbar = ({ user, ...props }: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <header className="bg-slate-800 md:bg-transparent container flex flex-col md:flex-row justify-between md:items-center text-white font-bold fixed top-0 left-0 right-0 z-50 ">
      <div className="border-b md:border-b-0 py-4 md:pb-0 bg-slate-800 md:bg-transparent z-10 -mx-4 px-4">
        <NavLink targetSegment="/" className="text-xl " href="/">
          {user.name}
        </NavLink>
      </div>
      <nav
        className={`flex md:gap-5  flex-col md:flex-row md:items-center pt-4 md:pt-0 -z-[1] ${
          !openSidebar ? "-translate-y-full md:translate-y-0 fixed md:relative" : "translate-y-0"
        }`}
      >
        <NavLink targetSegment={null} href="/" onClick={(e) => setOpenSidebar(false)}>
          Home
        </NavLink>
        <NavLink targetSegment="about" href="/about" onClick={(e) => setOpenSidebar(false)}>
          About
        </NavLink>
        <NavLink targetSegment="education" href="/education" onClick={(e) => setOpenSidebar(false)}>
          Education
        </NavLink>
        <NavLink targetSegment="skill" href="/skill" onClick={(e) => setOpenSidebar(false)}>
          Skills
        </NavLink>
        <NavLink targetSegment="contact" href="/contact" onClick={(e) => setOpenSidebar(false)}>
          Contact
        </NavLink>
      </nav>
      <RightMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </header>
  );
};
