"use client";

import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface BentoProps {
  lng: any;
}

const Bento: React.FC<BentoProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "home");
  const router = useRouter();

  return (
    <>
      <div className="h-screen">
        <div className="h-full flex items-center">
          <div className="grid grid-cols-12 grid-rows-2 gap-4 justify-items-center items-center w-full h-[70vh]">
            <div className="col-span-5 row-span-1 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
              <div className="flex flex-col justify-items-stretch items-stretch w-full h-full">
                <h1 className="text-8xl grow">{t("intro-block-title")}</h1>
                <Button
                  variant="text"
                  className="link link--metis justify-self-end self-end"
                  onClick={() => {
                    router.push(
                      "https://youtu.be/96z1N042z20?si=DKMCMCk0Frr57pnL"
                    );
                  }}
                >
                  {t("intro-block-button")}
                </Button>
              </div>
            </div>
            <div className="col-span-3 col-start-6 row-span-1 bg-profile-picture bg-center bg-cover p-8 shadow-custom shadow-primary rounded-lg aspect-square w-full h-full"></div>
            <div className="col-span-4 col-start-9 row-span-1 bg-card p-8 rounded-lg border border-secondary w-full h-full">
              <div className="flex flex-col justify-items-stretch items-stretch w-full h-full">
                <p className="grow justify-self-start self-start text-xl 2xl:text-4xl">
                  {t("presentation-block-title")}
                </p>
                <Button
                  variant="text"
                  className="link link--metis justify-self-end self-end"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  {t("presentation-block-button")}
                </Button>
              </div>
            </div>
            <div className="col-span-3 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
              <div className="flex flex-col h-full">
                <h2 className="w-full justify-self-start self-start text-xl 2xl:text-3xl">
                  {t("music-block-title")}
                </h2>
                <Popover>
                  <PopoverTrigger className="grow">
                    <div className="grow bg-on-repeat bg-center bg-cover p-8 rounded-lg w-full h-full"></div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <h4 className="text-accent font-instrument_serif text-xl mb-4 text-center">
                      STREAM THIS ALBUM ON
                    </h4>
                    <div
                      className="w-full flex justify-center items-center mb-1"
                      onClick={() => {
                        router.push(
                          "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv"
                        );
                      }}
                    >
                      <p className="text-accent me-2">Spotify</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-spotify.svg"
                        alt="Jérôme Sembres | Spotify Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push(
                          "https://music.apple.com/fr/album/currents/1440838039"
                        );
                      }}
                    >
                      <p className="text-accent me-2">Apple Music</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-apple.svg"
                        alt="Jérôme Sembres | Apple Music Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push("https://www.deezer.com/album/10709540");
                      }}
                    >
                      <p className="text-accent me-2">Deezer</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-deezer.svg"
                        alt="Jérôme Sembres | Deezer Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push(
                          "https://youtube.com/playlist?list=OLAK5uy_lYdwxvfKoDIiUba2_Dh1Pc-zOLLANCwKY"
                        );
                      }}
                    >
                      <p className="text-accent me-2">YouTube</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/streaming/sembresjero-me-streaming-logo-youtube.svg"
                        alt="Jérôme Sembres | YouTube Logo"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      className="w-full flex justify-center items-center mt-1"
                      onClick={() => {
                        router.push("https://listen.tidal.com/album/47696788");
                      }}
                    >
                      <p className="text-accent me-2">Tidal</p>
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
            <div className="col-span-4 col-start-4 bg-card p-8 rounded-lg border border-secondary w-full h-full shadow-custom shadow-primary">
              <div className="flex flex-col items-center w-full h-full">
                <h2 className="w-full text-xl 2xl:text-3xl">
                  {t("stack-block-title")}
                </h2>
                <div className="grow flex flex-col w-full h-full">
                  <div className="w-full flex pb-4 items-center border-b-2 border-accent/70">
                    <p className="grow">{t("stack-first-item")}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t(
                        "stack-first-item"
                      )} Logo`}
                    />
                  </div>
                  <div className="w-full flex py-4 items-center border-b-2 border-accent/70">
                    <p className="grow">{t("stack-second-item")}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t(
                        "stack-second-item"
                      )} Logo`}
                    />
                  </div>
                  <div className="w-full flex py-4 items-center border-b-2 border-accent/70">
                    <p className="grow">{t("stack-third-item")}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t(
                        "stack-third-item"
                      )} Logo`}
                    />
                  </div>
                  <div className="w-full flex py-4 items-center border-b-2 border-accent/70">
                    <p className="grow">{t("stack-fourth-item")}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-mongodb.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t(
                        "stack-fourth-item"
                      )} Logo`}
                    />
                  </div>
                  <div className="w-full flex pt-4 items-center">
                    <p className="grow">{t("stack-fifth-item")}</p>
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-express-js.svg"
                      width={20}
                      height={20}
                      alt={`Jérôme Sembres Portfolio | ${t(
                        "stack-fifth-item"
                      )} Logo`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 col-start-8 bg-card p-8 rounded-lg border border-secondary w-full h-full">
              <div className="flex flex-col h-full">
                <div className="flex mb-4">
                  <h2 className="grow justify-self-start self-start mb-0 text-xl 2xl:text-3xl">
                    {t("last-project-block-title")}
                  </h2>
                  <Button
                    variant="text"
                    className="justify-self-end self-end"
                    onClick={() => {
                      router.push("/about");
                    }}
                  >
                    {t("last-project-block-button")}
                  </Button>
                </div>
                <div className="grow relative rounded-lg group overflow-hidden w-full h-full">
                  <img
                    src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp"
                    className="absolute w-full h-full object-cover rounded-lg transition group-hover:cursor-pointer group-hover:ease-in-out group-hover:duration-500 group-hover:scale-110"
                    alt="Jérôme Sembres portfolio - Last project"
                  />
                  <div className="absolute group-hover:cursor-pointer flex p-8 items-end h-full">
                    <h3 className="text-2xl text-secondary mb-0">
                      {t("last-project-title")}
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
