import React from "react";
import contact from "@/images/contact.webp";
import NavBar from "@/components/NavBar";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contact.src})` }}
    >
      <NavBar white />
      <div className="flex flex-col gap-7 items-start w-full px-20">
        <div className="flex flex-col gap-3 w-1/4">
          <h1
            className={`${dmsans.className} uppercase text-xl text-stone-400 font-medium`}
          >
            Direct Contact
          </h1>
          <div className="flex flex-col items-start">
            <p className={`${dmsans.className} text-white`}>
              103 Minerva Apartments, Bhosalenagar, Range Hills Road,
              Pune 411007
            </p>
            <a
              href="https://maps.app.goo.gl/3hG8jS58ap2f8rvF7"
              target="_blank"
              className={`${dmsans.className} text-white underline`}
            >
              Location
            </a>
            <a
              href="tel:+917030100223"
              target="_blank"
              className={`${dmsans.className} text-white `}
            >
              +91 7030100223
            </a>
            <a
              href="mailto:studio@fractalchaos.in"
              target="_blank"
              className={`${dmsans.className} text-white `}
            >
              studio@fractalchaos.in
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1
            className={`${dmsans.className} uppercase text-xl text-stone-400 font-medium`}
          >
            Office Hours
          </h1>
          <div className="flex flex-col items-start">
            <p className={`${dmsans.className} text-white`}>
              Monday to Friday, 10AM to 6PM
              <br />
              Weekend Closed
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1
            className={`${dmsans.className} uppercase text-xl text-stone-400 font-medium`}
          >
            Jobs
          </h1>
          <div className="flex flex-col items-start w-1/2">
            <p className={`${dmsans.className} text-white`}>
              For work and internship applications please send your resume and portfolio to
            </p>
            <a
              href="mailto:careers@fractalchaos.in"
              target="_blank"
              className={`${dmsans.className} text-white`}
            >
              careers@fractalchaos.in
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
