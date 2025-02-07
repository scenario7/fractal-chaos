'use client'
import home from '@/images/home.webp'
import NavBar from "@/components/NavBar";
import { DM_Sans } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';

const dmsans = DM_Sans({weight : ["100", '200', '300', '400', '500'], subsets : ["latin"]})

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home.src})` }}
    >
      <NavBar whiteLogo/>
      <div className="flex flex-col items-start w-full px-36">
        <TypeAnimation sequence={['an architecture practice in process.', 1000]} repeat={Infinity} className={`text-left text-2xl tracking-tight text-stone-400 ${dmsans.className}`}/>
      </div>
      <div>

      </div>
    </div>
  );
}
