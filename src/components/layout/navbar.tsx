'use client';
import { TUser } from '@/interfaces';
import { NavLink } from './navlink';
import RightMenu from './right-menu';
import NavLayout from './navigate.layout';
// import { DarkModeToggle } from '../darkmode';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = { user: TUser };
export const Navbar = ({ user }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`font-bold fixed top-0 left-0 right-0 z-50 py-1 md:py-5 border-b md:border-b-0 ease-in-out transition-all duration-500  border-default ${isScrolled ? 'bg-slate-200/20 backdrop-blur dark:bg-slate-900/80' : 'md:!bg-transparent'}`}>
      <div className="container flex flex-row justify-between items-center">
        <div className="flex items-center justify-between">
          <NavLink targetSegment="/" href="/" className="flex gap-2 items-center">
            <Image alt="Icon Portfolio irsan mansyur" src="/favicon/android-chrome-512x512.png" width={40} height={40} />
            <span className="font-bolder text-2xl uppercase tracking-widest text-primary "> {user.name.split(' ')[0]}</span>
          </NavLink>
        </div>
        <NavLayout />
        <div className="flex gap-3">
          {/* <DarkModeToggle /> */}
          <RightMenu />
        </div>
      </div>
    </header>
  );
};
