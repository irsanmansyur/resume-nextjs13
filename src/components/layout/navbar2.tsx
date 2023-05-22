"use client";
import { SidebarContext } from "@/context";
import { Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { NavLink } from "./navlink";

export default function Navbar2() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75 "
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div
        className={`absolute top-[calc(100%+10px)] right-0 z-50 mt-1 lg:mt-2 w-64 rounded-lg border border-slate-200 bg-default px-5 py-3 shadow-sm dark:shadow-md focus:outline-none dark:border-slate-800 transform duration-300`}
      >
        <div className="relative">
          <div className="arrow-border !border-b-slate-200 dark:!border-b-slate-800 absolute top-[-22px] right-[-15px]" />
          <div className="arrow-border !border-b-white dark:!border-b-slate-900 absolute top-[-21px] right-[-15px]" />
          <NavLink
            targetSegment={null}
            href="/"
            onClick={() => setIsOpen(false)}
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight transition px-0 hover:bg-red-800"
          >
            Home
          </NavLink>
          <NavLink
            targetSegment={"about"}
            href="/about"
            onClick={() => setIsOpen(false)}
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight transition px-0"
          >
            About
          </NavLink>
          <NavLink
            targetSegment={"education"}
            href="/education"
            onClick={() => setIsOpen(false)}
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight transition px-0"
          >
            Education
          </NavLink>
          <NavLink
            targetSegment={"skill"}
            href="/skill"
            onClick={() => setIsOpen(false)}
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight transition px-0"
          >
            Skill
          </NavLink>
          <NavLink
            targetSegment={"contact"}
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight transition px-0"
          >
            Contact
          </NavLink>

          <div className="my-2 h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800" role="none" />
          <a
            className="group w-full flex items-center gap-x-1.5 py-1.5 text-sm tracking-tight text-slate-600 transition [&>svg]:stroke-[1.25] [&>svg]:w-4 [&>svg]:h-4"
            id="headlessui-menu-item-:rq:"
            role="menuitem"
            tabIndex={-1}
            data-headlessui-state
            href="/register"
          >
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
              className="h-4 w-4"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
            Daftar
          </a>
        </div>
      </div>
    </Transition>
  );
}
