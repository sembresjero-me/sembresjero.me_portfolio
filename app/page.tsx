import Image from "next/image";
import Introduction from "@/app/components/Introduction";
import Projects from "@/app/components/Projects";
import Stack from "@/app/components/Stack";

export default function Home() {
  return (
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
      <Introduction />
      <Projects />
      <Stack />
    </main>
  );
}
