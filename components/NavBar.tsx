import React from 'react';
import logo from '@/images/logo.png';
import logo2 from '@/images/logo.webp'
import Link from 'next/link';

interface NavBarProps {
  white?: boolean;
  whiteLogo? : boolean;
}

const NavBar: React.FC<NavBarProps> = ({ white, whiteLogo }) => {
  return (
    <div className='flex justify-between items-center w-full px-10 py-10'>
      <Link href='/'><img src={whiteLogo ? logo.src : logo2.src} alt="Logo" className='h-14' /></Link>
      <div className='flex gap-10 text-lg'>
        <Link className={white ? 'text-white' : 'text-stone-800'} href='/about'>about</Link>
        <Link className={white ? 'text-white' : 'text-stone-800'} href='/people'>people</Link>
        <Link className={white ? 'text-white' : 'text-stone-800'} href='/work'>work</Link>
        <Link className={white ? 'text-white' : 'text-stone-800'} href='/archive'>archive</Link>
        <Link className={white ? 'text-white' : 'text-stone-800'} href='/contact'>contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
