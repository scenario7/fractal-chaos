import home from '@/images/home.webp'
import NavBar from "@/components/NavBar";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({weight : ["100", '200', '300', '400', '500'], subsets : ["latin"]})

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home.src})` }}
    >
      <NavBar/>
      <div className="flex flex-col items-start w-full px-36">
          <h1 className={`text-left text-xl tracking-tight text-stone-400 ${dmsans.className}`}>an architecture<br/> practice in process</h1>
      </div>
      <div>

      </div>
    </div>
  );
}
