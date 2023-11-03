"use client";

import Project from "@/app/components/Project";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full mb-32">
        <Project
          title="coming soon"
          description="Coming soon."
          imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/1.jpg"
          videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/zartfilmsproduction.mp4"
        />
        <Project
          title="guess the sneakers"
          description="A sneakers quiz game."
          imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
          videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-video-projet-guessthesneakers.mp4"
        />
        <Project
          title="kotag"
          description="Find your favourites influencers coupon codes."
          imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/sembresjero-me-cover-projet-test.jpg"
          videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/zartfilmsproduction.mp4"
        />
        <Project
          title="z'art films production"
          description="Audiovisual professionals based in Marseille & Paris."
          imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-cover-projet-zartfilmsproduction.webp"
          videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-video-projet-zartfilmsproduction.mp4"
        />
      </div>
    </>
  );
};

export default Projects;
