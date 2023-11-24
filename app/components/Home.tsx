"use client";

import { useEffect } from "react";

import Certifications from "@/app/components/certifications/Certifications";
import Educations from "@/app/components/educations/Educations";
import Introduction from "@/app/components/Introduction";
import Projects from "@/app/components/projects/Projects";
import Stacks from "@/app/components/Stacks";

interface HomeProps {
  lng: string;
}

const Home: React.FC<HomeProps> = ({ lng }) => {
  return (
    <>
      <main>
        <div className="grid grid-cols-2 justify-items-center items-center w-full min-h-[70svh] mb-16">
          <h1 className="text-9xl leading-tight">
            Yes it's me,
            <br />
            <span className="italic ">Jérôme</span>.
          </h1>
          <p>
            I'm a freelance fullstack developer always in the mood for learning
            new skills.
          </p>
        </div>
        <Introduction lng={lng} />
        <Projects lng={lng} />
        <Stacks />
        <Educations lng={lng} />
        <Certifications lng={lng} />
      </main>
    </>
  );
};

export default Home;
