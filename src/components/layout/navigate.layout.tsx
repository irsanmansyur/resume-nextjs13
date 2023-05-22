"use client";
import { SidebarContext } from "@/context";
import React, { useContext } from "react";
import { NavLink } from "./navlink";

export default function NavLayout() {
  const { setIsOpen } = useContext(SidebarContext);
  return (
    <nav className={`hidden md:flex gap-5 flex-row items-center`}>
      <NavLink targetSegment={null} href="/" onClick={(e) => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink targetSegment="about" href="/about" onClick={(e) => setIsOpen(false)}>
        About
      </NavLink>
      <NavLink targetSegment="education" href="/education" onClick={(e) => setIsOpen(false)}>
        Education
      </NavLink>
      <NavLink targetSegment="skill" href="/skill" onClick={(e) => setIsOpen(false)}>
        Skills
      </NavLink>
      <NavLink targetSegment="contact" href="/contact" onClick={(e) => setIsOpen(false)}>
        Contact
      </NavLink>
    </nav>
  );
}
