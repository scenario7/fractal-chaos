import React from 'react';
import logo from '@/images/logo.png';

interface NavBarProps {
  white?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ white }) => {
  return (
    <div className='flex justify-between items-center w-full px-10 py-10'>
      <img src={logo.src} alt="Logo" className='h-14' />
      <div className='flex gap-10 text-lg'>
        <a className={white ? 'text-white' : 'text-stone-800'} href='/about'>about</a>
        <a className={white ? 'text-white' : 'text-stone-800'} href='/people'>people</a>
        <a className={white ? 'text-white' : 'text-stone-800'}>work</a>
        <a className={white ? 'text-white' : 'text-stone-800'}>archive</a>
        <a className={white ? 'text-white' : 'text-stone-800'} href='/contact'>contact</a>
      </div>
    </div>
  );
}

export default NavBar;
