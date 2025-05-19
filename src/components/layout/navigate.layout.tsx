'use client';
import { SidebarContext } from '@/context';
import React, { useContext } from 'react';
import { NavLink } from './navlink';

export default function NavLayout() {
  const { setIsOpen } = useContext(SidebarContext);
  return (
    <nav className={`hidden md:flex gap-5 flex-row items-center`}>
      <NavLink targetSegment={null} href="/" onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink targetSegment="pendidikan" href="#pendidikan" onClick={() => setIsOpen(false)}>
        Pendidikan
      </NavLink>
      <NavLink targetSegment="contact" href="/contact" onClick={() => setIsOpen(false)}>
        Contact
      </NavLink>
    </nav>
  );
}
