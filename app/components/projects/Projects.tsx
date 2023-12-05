"use client";

import { useTranslation } from "@/app/i18n/client";
import Project from "@/app/components/projects/Project";

interface ProjectsProps {
  lng: any;
}

const Projects: React.FC<ProjectsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");

  return (
    <>
      <div className="h-screen">
        <div className="h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center w-full h-fit">
            <Project
              title={t("first-project-title")}
              description={t("first-project-description")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/coming-soon/sembresjero-me-video-projet-coming-soon.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/coming-soon/sembresjero-me-video-projet-coming-soon.mp4"
            />
            <Project
              title={t("second-project-title")}
              description={t("second-project-description")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-video-projet-guessthesneakers.mp4"
            />
            <Project
              title={t("fourth-project-title")}
              description={t("fourth-project-description")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-cover-projet-zartfilmsproduction.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-video-projet-zartfilmsproduction.mp4"
            />
            <Project
              title={t("third-project-title")}
              description={t("third-project-description")}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/kotag/sembresjero-me-cover-projet-kotag.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/kotag/sembresjero-me-video-projet-kotag.mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
