'use client'
import React, { useState } from "react";
import people from "@/images/people.webp";
import NavBar from "@/components/NavBar";
import { DM_Sans } from "next/font/google";
import rajlaxmi from '@/images/people/rajlaxmi.webp'
import indraneel from '@/images/people/indraneel.webp'
import amar from '@/images/people/amar.webp'
import shreya from '@/images/people/shreya.webp'
import arjun from '@/images/people/arjun.webp'
import atharva from '@/images/people/atharva.webp'

const dmsans = DM_Sans({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const peopleList = [
  {
    name: "Rajlaxmi Teli",
    image: rajlaxmi.src,
    designation: "Principal Architect",
    description: "",
  },
  {
    name: "Indraneel Vichare",
    image: indraneel.src,
    designation: "Assistant Architect",
    description:
      "Indraneel is an Assistant Architect at Fractal Chaos, where he combines his passion for functionality and minimalist design with a critical eye for refining and optimizing any form of design. His approach to architecture is focused on thoughtful problem-solving, ensuring that design balances aesthetics with practical, user-focused solutions. Outside the world of architecture, Indraneel’s love for motorsports, technology, and travelling drives his curiosity and fuels his creative spirit, making him a well-rounded professional with diverse interests.",
  },
  {
    name: "Atharva Naik",
    image: atharva.src,
    designation: "Assistant Architect",
    description:
      "Atharva, a junior architect at fractal chaos is keen on exploring new materials and construction techniques, combined with his love for research to pursue innovative design. He sees architecture as a process of design and critique, focusing on preserving the original concept in the final output in terms of sensibility, sustainability and aesthetics. Besides professional duties, Atharva is a visual artist and graphic designer which allows him to illustrate his ideas and transfer them into an architectural language.",
  },
  {
    name: "Shreya Lele",
    image: shreya.src,
    designation: "Assistant Architect",
    description:
      "Shreya, a curious and creative junior architect at fractal chaos who believes in instilling beauty in function. Her approach to design is focused on her design being user-oriented but unique and inspiring beyond its basic function. As a reader and an artist outside of work, Shreya tries to bridge the gap between abstract concepts and tangible ideas in her work, weaving eclectic architectural notions along with research and her own touch of innovation.",
  },
  {
    name: "Amar Rathod",
    image: amar.src,
    designation: "Contractor and Master Mason",
    description:
      "Amar, has an innate understanding of materials, construction technology and design and has grown his business as a building contractor from a single person to a team of skilled master masons. He is the owner of Aditya constructions and undertakes all kinds of alternative as well as mainstream construction projects fluently and with efficient planning.",
  },
  {
    name: "Arjun Wadhghare",
    image: arjun.src,
    designation: "Ecological Consultant",
    description:
      "Quia ut molestias ut ex molestias dicta minus aliquid pariatur et natus non consequatur doloremque. Ut velit ratione est animi non odio deserunt quis eos. Nesciunt iste non tempora. Laborum consequuntur reprehenderit beatae sit odio officiis iure inventore minima commodi ipsa iste. Qui soluta unde expedita qui magni qui ut natus alias delectus corrupti possimus. Illo fuga cupiditate minima eum at quas.",
  },
];


const People = () => {

    const [currentPerson, setCurrentPerson] = useState(0)

  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${people.src})` }}
    >
      <NavBar whiteLogo/>
      <div className="px-20 flex justify-between w-full">
        <div className="flex flex-col gap-5 items-start w-full">
          {peopleList.map((person, index) => {
            return (
              <button key={person.image} onClick={() => setCurrentPerson(index)} className={`${index === currentPerson ? 'bg-white bg-opacity-20' : 'bg-transparent'} rounded-xl px-3 py-1 transition-colors`}>
                <h1 className={`${dmsans.className} text-xl text-left`}>{person.name}</h1>
                <h1
                  className={`${dmsans.className} opacity-75 text-sm font-medium uppercase text-left`}
                >
                  {person.designation}
                </h1>
              </button>
            );
          })}
        </div>
        <div className="flex gap-10 items-start bg-transparent w-full">
          <figure>
            <img
              src={peopleList[currentPerson].image}
              alt="Shoes"
              className="h-52 w-52 object-cover"
            />
          </figure>
          <div className="w-1/2 flex flex-col gap-5">
            <h2 className={`card-title ${dmsans.className} text-stone-800`}>{peopleList[currentPerson].name}</h2>
            <p className={`${dmsans.className} text-stone-600`}>{peopleList[currentPerson].description}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default People;
