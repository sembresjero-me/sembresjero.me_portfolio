'use client';

import { useTranslation } from '@/app/i18n/client';
import Project from '@/app/components/projects/Project';

interface ProjectsProps {
  lng: any;
}

const Projects: React.FC<ProjectsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'projects');

  return (
    <>
      <div className="my-[calc(100px)] h-full xl:my-0 xl:h-screen">
        <h1 className="mb-4 block text-6xl text-secondary xl:hidden">{t('projects-page-title')}</h1>
        <p className="mb-8 block text-secondary xl:hidden">{t('projects-page-description')}</p>
        <div className="flex h-full items-center">
          <div className="grid h-fit w-full grid-cols-1 items-center justify-items-center gap-4 lg:grid-cols-2">
            <Project
              title={t('first-project-title')}
              description={t('first-project-description')}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/coming-soon/sembresjero-me-video-projet-coming-soon.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/coming-soon/sembresjero-me-video-projet-coming-soon.mp4"
            />
            <Project
              title={t('second-project-title')}
              description={t('second-project-description')}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-video-projet-guessthesneakers.mp4"
            />
            <Project
              title={t('fourth-project-title')}
              description={t('fourth-project-description')}
              imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-cover-projet-zartfilmsproduction.webp"
              videoLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/zartfilmsproduction/sembresjero-me-video-projet-zartfilmsproduction.mp4"
            />
            <Project
              title={t('third-project-title')}
              description={t('third-project-description')}
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
