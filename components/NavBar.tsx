"use client";

import React from 'react';
import logo from '@/images/logo.png';
import logo2 from '@/images/logo.webp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({weight : ["100", '200', '300', '400', '500'], subsets : ["latin"]})


interface NavBarProps {
  white?: boolean;
  whiteLogo?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ white, whiteLogo }) => {
  const pathname = usePathname(); // Get the current route

  const linkClass = (path: string) =>
    `${white ? 'text-white border-white' : 'text-stone-800 border-black'} ${
      pathname === path ? 'font-bold border-l-2 border-black pl-3' : 'font-normal'
    }`;

  return (
    <div className="flex justify-between items-center w-full px-10 py-10">
      <Link href="/">
        <img src={whiteLogo ? logo.src : logo2.src} alt="Logo" className="h-14" />
      </Link>
      <div className={`flex gap-10 text-lg ${dmsans.className}`}>
        <Link className={linkClass('/about')} href="/about">about</Link>
        <Link className={linkClass('/people')} href="/people">people</Link>
        <Link className={linkClass('/work')} href="/work">work</Link>
        <Link className={linkClass('/archive')} href="/archive">archive</Link>
        <Link className={linkClass('/contact')} href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
