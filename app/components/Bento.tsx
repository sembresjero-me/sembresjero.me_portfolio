'use client';

import { Button } from '@/app/components/ui/button';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { usePageTransition } from '@/app/hooks/usePageTransition';

import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

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
          <div className="grid h-fit w-full grid-cols-12 items-center justify-items-center gap-4">
            <div className="col-span-12 row-auto h-full min-h-[350px] w-full rounded-lg border border-secondary bg-card p-8 shadow-custom shadow-primary md:col-span-6 lg:col-span-8 xl:col-span-5 xl:min-h-fit">
              <div className="flex h-full w-full flex-col items-stretch justify-items-stretch">
                <h1 className="grow text-7xl lg:text-8xl">{t('intro-block-title')}</h1>
                <Button variant="text" className="link link--metis self-end justify-self-end">
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
            <div className="col-span-12 row-auto aspect-square h-full min-h-[350px] w-full rounded-lg bg-profile-picture bg-cover bg-center shadow-custom shadow-primary md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-6 xl:aspect-auto xl:min-h-fit"></div>
            <div className="col-span-12 row-auto h-full min-h-[350px] w-full rounded-lg border border-secondary bg-card p-8 md:col-span-6 md:col-start-7 lg:col-span-8 lg:col-start-5 xl:col-span-4 xl:col-start-9 xl:min-h-fit">
              <div className="flex h-full w-full flex-col items-stretch justify-items-stretch">
                <p className="mb-8 grow self-start justify-self-start text-3xl lg:text-4xl">
                  {t('presentation-block-title')}
                </p>
                <Button
                  variant="text"
                  className="link link--metis self-end justify-self-end"
                  onClick={() => {
                    setCount(count + 1);
                    setTimeout(() => {
                      router.push(`/${lng}/about`);
                    }, 500);
                  }}
                >
                  {t('presentation-block-button')}
                </Button>
              </div>
            </div>
            <div className="col-span-12 row-auto h-full min-h-[350px] w-full rounded-lg border border-secondary bg-card p-8 shadow-custom shadow-primary md:col-span-6 md:row-start-2 lg:col-span-4 xl:col-span-3 xl:min-h-fit">
              <div className="flex h-full flex-col">
                <h2 className="w-full self-start justify-self-start text-2xl xl:text-3xl">
                  {t('music-block-title')}
                </h2>
                <Popover>
                  <PopoverTrigger className="grow">
                    <div className="h-full w-full grow rounded-lg bg-on-repeat bg-cover bg-center p-8"></div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <h4 className="mb-4 text-center font-instrument_serif text-xl text-accent">
                      STREAM THIS ALBUM ON
                    </h4>
                    <div
                      className="mb-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv');
                      }}
                    >
                      <p className="me-2 text-accent">Spotify</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-spotify.svg"
                        alt="Jérôme Sembres | Spotify Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="my-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://music.apple.com/fr/album/currents/1440838039');
                      }}
                    >
                      <p className="me-2 text-accent">Apple Music</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-apple.svg"
                        alt="Jérôme Sembres | Apple Music Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="my-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://www.deezer.com/album/10709540');
                      }}
                    >
                      <p className="me-2 text-accent">Deezer</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-deezer.svg"
                        alt="Jérôme Sembres | Deezer Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="my-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push(
                          'https://youtube.com/playlist?list=OLAK5uy_lYdwxvfKoDIiUba2_Dh1Pc-zOLLANCwKY',
                        );
                      }}
                    >
                      <p className="me-2 text-accent">YouTube</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-youtube.svg"
                        alt="Jérôme Sembres | YouTube Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="mt-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://listen.tidal.com/album/47696788');
                      }}
                    >
                      <p className="me-2 text-accent">Tidal</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-tidal.svg"
                        alt="Jérôme Sembres | Tidal Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="col-span-12 row-auto h-full min-h-[350px] w-full rounded-lg border border-secondary bg-card p-8 shadow-custom shadow-primary md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9 xl:col-start-4 xl:min-h-fit">
              <div className="flex h-full w-full flex-col items-center">
                <div className="flex w-full items-center justify-items-stretch">
                  <h2 className="grow justify-self-start text-2xl xl:text-3xl">
                    {t('stack-block-title')}
                  </h2>
                  <Button
                    variant="text"
                    className="link link--metis mb-4 justify-self-end"
                    onClick={() => {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push(`/${lng}/about`);
                      }, 500);
                    }}
                  >
                    {t('stack-block-button')}
                  </Button>
                </div>
                <div className="flex h-full w-full grow flex-col">
                  <div className="flex w-full items-center border-b-2 border-accent/70 pb-3">
                    <p className="grow">{t('stack-first-item')}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t('stack-first-item')} Logo`}
                    />
                  </div>
                  <div className="flex w-full items-center border-b-2 border-accent/70 py-3">
                    <p className="grow">{t('stack-second-item')}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t('stack-second-item')} Logo`}
                    />
                  </div>
                  <div className="flex w-full items-center border-b-2 border-accent/70 py-3">
                    <p className="grow">{t('stack-third-item')}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t('stack-third-item')} Logo`}
                    />
                  </div>
                  <div className="flex w-full items-center border-b-2 border-accent/70 py-3">
                    <p className="grow">{t('stack-fourth-item')}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-mongodb.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t('stack-fourth-item')} Logo`}
                    />
                  </div>
                  <div className="flex w-full items-center pt-3">
                    <p className="grow">{t('stack-fifth-item')}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-express-js.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t('stack-fifth-item')} Logo`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 col-start-1 row-auto h-full min-h-[350px] w-full rounded-lg border border-secondary bg-card p-8 md:col-span-6 md:row-start-3 lg:col-span-8 xl:col-span-5 xl:col-start-8 xl:row-start-2 xl:min-h-fit">
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center">
                  <h2 className="mb-0 grow justify-self-start text-2xl xl:text-3xl">
                    {t('last-project-block-title')}
                  </h2>
                  <Button
                    variant="text"
                    className="justify-self-end"
                    onClick={() => {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push(`/${lng}/projects`);
                      }, 500);
                    }}
                  >
                    {t('last-project-block-button')}
                  </Button>
                </div>
                <div className="group relative aspect-video h-full w-full grow overflow-hidden rounded-lg md:aspect-square lg:aspect-video">
                  <img
                    src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
                    className="absolute h-full w-full rounded-lg object-cover transition group-hover:scale-110 group-hover:cursor-pointer group-hover:duration-500 group-hover:ease-in-out"
                    alt="Jérôme Sembres portfolio - Last project"
                  />
                  <div className="absolute flex h-full items-end p-4 group-hover:cursor-pointer sm:p-8">
                    <h3 className="mb-0 text-xl text-secondary sm:text-2xl">
                      {t('last-project-title')}
                    </h3>
                  </div>
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
