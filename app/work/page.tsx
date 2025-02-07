import React from "react";
import NavBar from "@/components/NavBar";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({weight : ["100", '200', '300', '400', '500'], subsets : ["latin"]})


const Work = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center bg-white">
      <NavBar />
      <div className="flex w-full gap-20 px-20">
        <div className="flex flex-col w-full gap-20">
          <div className="flex gap-20">
            <div
              className="w-60 h-60 bg-cover bg-center flex flex-col items-start justify-end p-3 "
              style={{
                backgroundImage: 
                  "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://fractalchaos.in/wp-content/uploads/2023/02/IMG_3202-1536x1024.jpg')"
              }}
            >
                <h1 className={`${dmsans.className} tracking-tighter font-medium text-xl`}>Project Name</h1>
                <h1 className={`${dmsans.className} tracking-tighter text-stone-300 uppercase`}>Category</h1>

            </div>
            <div
              className="w-48 h-48 bg-cover bg-center flex flex-col items-start justify-end p-3 "
              style={{
                backgroundImage: 
                  "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://fractalchaos.in/wp-content/uploads/2023/02/IMG_3202-1536x1024.jpg')"
              }}
              >
                <h1 className={`${dmsans.className} tracking-tighter font-medium text-xl`}>Project Name</h1>
                <h1 className={`${dmsans.className} tracking-tighter text-stone-300 uppercase`}>Category</h1>

            </div>
          </div>
          <div className="flex justify-end gap-20">
            <div
              className="w-80 h-36 bg-cover bg-center flex flex-col items-start justify-end p-3 "
              style={{
                backgroundImage: 
                  "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://fractalchaos.in/wp-content/uploads/2023/02/IMG_3202-1536x1024.jpg')"
              }}

            >
                <h1 className={`${dmsans.className} tracking-tighter font-medium text-xl`}>Project Name</h1>
                <h1 className={`${dmsans.className} tracking-tighter text-stone-300 uppercase`}>Category</h1>

            </div>
            <div
              className="w-72 h-72 bg-cover bg-center flex flex-col items-start justify-end p-3 "
              style={{
                backgroundImage: 
                  "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://fractalchaos.in/wp-content/uploads/2023/02/IMG_3202-1536x1024.jpg')"
              }}
            >
                <h1 className={`${dmsans.className} tracking-tighter font-medium text-xl`}>Project Name</h1>
                <h1 className={`${dmsans.className} tracking-tighter text-stone-300 uppercase`}>Category</h1>

            </div>
          </div>
        </div>
        <div
          className="w-96 h-96 bg-cover bg-center flex flex-col items-start justify-end p-3 "
          style={{
            backgroundImage: 
              "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://fractalchaos.in/wp-content/uploads/2023/02/IMG_3202-1536x1024.jpg')"
          }}
        >
            <h1 className={`${dmsans.className} tracking-tighter font-medium text-xl`}>Project Name</h1>
            <h1 className={`${dmsans.className} tracking-tighter text-stone-300 uppercase`}>Category</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Work;
