import React from "react";
import about from "@/images/about.webp";
import { DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";

const dmsans = DM_Sans({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <div
      className="flex flex-col items-start justify-between min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${about.src})` }}
    >
      <NavBar white />
      <div className="flex flex-col items-start gap-10 w-1/2 px-20">
        <div className="collapse collapse-arrow bg-transparent">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div
            className={`collapse-title text-xl font-medium ${dmsans.className} font-medium tracking-tighter`}
          >
            Practice
          </div>
          <div className="divider"></div>
          <div className={`collapse-content ${dmsans.className}`}>
            <p>
              The practice believes in the multidisciplinary nature of any
              profession in constantly evolving, interconnected surroundings.
              While exploring diverse contexts of projects, we explore the
              urban, rural and transient environments through methods of theory,
              hands on research applications and other media. The loop is
              completed with onsite communicative relations oriented towards
              skill development in the construction industry.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-transparent">
          <input type="radio" name="my-accordion-2" />
          <div
            className={`collapse-title text-xl font-medium ${dmsans.className} font-medium tracking-tighter`}
          >
            Process
          </div>
          <div className="divider"></div>

          <div className={`collapse-content ${dmsans.className}`}>
            <p>
              Design process has been an integral part of this practice which we
              like to elaborate upon during presentation. The story of
              approaching the solution is more important and revelatory for us
              to understand the spectrum of context, culture, ecology and the
              imprint of design solutions on these whether they evolve, are
              timeless or stagnant. Every project is a learning experience
              navigating relations of built and unbuilt.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-transparent">
          <input type="radio" name="my-accordion-2" />
          <div
            className={`collapse-title text-xl font-medium ${dmsans.className} font-medium tracking-tighter`}
          >
            Philosophy
          </div>
          <div className="divider"></div>
          <div className={`collapse-content ${dmsans.className}`}>
            <p>
              Our work pursues methods, explorations and critique within the
              resources of a project. Design is explored understanding layers of
              analysis peculiar to the project. The studio work environment
              encourages independent thinking for design processes and evolution
              with exchange of experiences. These processes are completed with
              people on site about building processes and details.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
