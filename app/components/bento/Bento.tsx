'use client';

import { Button } from '@/app/components/ui/button';
import Skill from '@/app/components/various/StackSkill';
import { usePageTransition } from '@/app/hooks/usePageTransition';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n';

interface BentoProps {
  lng: any;
}

const Bento: React.FC<BentoProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');
  const router = useRouter();
  const { count, setCount } = usePageTransition();

  return (
    <>
      <div className="mb-8 mt-24 h-full xl:mb-0 xl:mt-0 xl:h-screen">
        <div className="flex h-full items-center">
          <div className="grid h-full w-full auto-rows-max grid-cols-12 grid-rows-6 items-center justify-items-center gap-4 md:grid-rows-3 xl:grid-rows-2 xl:py-24 2xl:max-h-[85vh]">
            <div className="col-span-12 row-span-1 h-full w-full rounded-lg border border-secondary bg-card p-6 shadow-custom shadow-primary md:col-span-6 lg:col-span-8 xl:col-span-5 2xl:p-8">
              <div className="flex h-full w-full flex-col items-stretch justify-items-stretch">
                <h1 className="grow text-7xl lg:text-8xl xl:text-7xl 2xl:text-8xl">
                  {t('intro-block-title')}
                </h1>
                <Button variant="text" className="self-end justify-self-end">
                  <a
                    href="https://youtu.be/96z1N042z20?si=DKMCMCk0Frr57pnL"
                    className="text-primary"
                    target="_blank"
                  >
                    {t('intro-block-button')}
                  </a>
                </Button>
              </div>
            </div>
            <div className="col-span-12 row-span-1 h-full w-full rounded-lg bg-profile-picture bg-cover bg-center shadow-custom shadow-primary md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-6"></div>
            <div className="col-span-12 row-span-1 h-full w-full rounded-lg border border-secondary bg-card p-6 md:col-span-6 md:col-start-7 lg:col-span-8 lg:col-start-5 xl:col-span-4 xl:col-start-9 2xl:p-8">
              <div className="flex h-full w-full flex-col items-stretch justify-items-stretch">
                <p className="mb-8 grow self-start justify-self-start text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  {t('presentation-block-title')}
                </p>
                <Button
                  variant="text"
                  className="self-end justify-self-end"
                  onClick={() => {
                    setCount(count + 1);
                    router.push(`/${lng}/about`);
                  }}
                >
                  {t('presentation-block-button')}
                </Button>
              </div>
            </div>
            <div className="col-span-12 row-span-1 h-full w-full rounded-lg border border-secondary bg-card p-6 shadow-custom shadow-primary md:col-span-6 md:row-start-2 lg:col-span-4 xl:col-span-3 2xl:p-8">
              <div className="flex h-full w-full flex-col items-center">
                <div className="flex w-full items-center justify-items-stretch">
                  <h2 className="mb-2 grow justify-self-start text-2xl 2xl:mb-4 2xl:text-3xl">
                    {t('front-end-stack-block-title')}
                  </h2>
                  <Button
                    variant="text"
                    className="mb-2 justify-self-end 2xl:mb-4"
                    onClick={() => {
                      setCount(count + 1);
                      router.push(`/${lng}/about`);
                    }}
                  >
                    {t('front-end-stack-block-button')}
                  </Button>
                </div>
                <div className="flex h-full w-full grow flex-col lg:mb-8 xl:mb-4 2xl:mb-0">
                  <Skill
                    id={1}
                    title={t('front-end-stack-block-first-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
                  />
                  <Skill
                    id={2}
                    title={t('front-end-stack-block-second-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
                  />
                  <Skill
                    id={3}
                    title={t('front-end-stack-block-third-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
                  />
                  <Skill
                    id={4}
                    title={t('front-end-stack-block-fourth-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 col-start-1 row-span-1 h-full w-full rounded-lg border border-secondary bg-card p-6 md:col-span-6 md:row-start-3 lg:col-span-8 xl:col-span-6 xl:col-start-4 xl:row-start-2 2xl:p-8">
              <div className="flex h-full flex-col">
                <div className="flex items-center">
                  <h2 className="mb-2 grow justify-self-start text-2xl 2xl:mb-4 2xl:text-3xl">
                    {t('last-project-block-title')}
                  </h2>
                  <Button
                    variant="text"
                    className="mb-2 justify-self-end 2xl:mb-4"
                    onClick={() => {
                      setCount(count + 1);
                      router.push(`/${lng}/projects`);
                    }}
                  >
                    {t('last-project-block-button')}
                  </Button>
                </div>
                <div
                  className="group relative h-full w-full grow overflow-hidden rounded-lg"
                  onClick={() => {
                    router.push('https://www.guessthesneakers.com');
                  }}
                >
                  <Image
                    src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
                    className="absolute h-full w-full rounded-lg object-cover transition group-hover:scale-110 group-hover:cursor-pointer group-hover:duration-500 group-hover:ease-in-out"
                    alt="Jérôme Sembres Portfolio - Last Project"
                    fill={true}
                  />
                  <div className="absolute flex h-full items-end p-4 group-hover:cursor-pointer sm:p-8">
                    <h3 className="mb-0 text-xl text-secondary sm:text-2xl">
                      {t('last-project-title')}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 row-span-1 h-full w-full rounded-lg border border-secondary bg-card p-6 shadow-custom shadow-primary md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10 2xl:p-8">
              <div className="flex h-full w-full flex-col items-center">
                <div className="flex w-full items-center justify-items-stretch">
                  <h2 className="mb-2 grow justify-self-start text-2xl 2xl:mb-4 2xl:text-3xl">
                    {t('back-end-stack-block-title')}
                  </h2>
                  <Button
                    variant="text"
                    className="mb-2 justify-self-end 2xl:mb-4"
                    onClick={() => {
                      setCount(count + 1);
                      router.push(`/${lng}/about`);
                    }}
                  >
                    {t('back-end-stack-block-button')}
                  </Button>
                </div>
                <div className="mb-8 flex h-full w-full grow flex-col xl:mb-4 2xl:mb-0">
                  <Skill
                    id={1}
                    title={t('back-end-stack-block-first-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-mongodb.svg"
                  />
                  <Skill
                    id={2}
                    title={t('back-end-stack-block-second-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-express-js.svg"
                  />
                  <Skill
                    id={3}
                    title={t('back-end-stack-block-third-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-prisma.svg"
                  />
                  <Skill
                    id={4}
                    title={t('back-end-stack-block-fourth-item')}
                    imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-vercel.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bento;
