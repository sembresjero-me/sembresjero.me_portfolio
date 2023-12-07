'use client';

import { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageLink, videoLink }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <div
        key={title}
        className="bg-cream relative aspect-[3/2] w-full rounded-lg"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <img
          src={imageLink}
          className={`absolute h-full w-full rounded-lg object-cover transition`}
          alt={`Jérôme Sembres portfolio - ${title} project`}
        />
        <video
          preload="auto"
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          width="100%"
          height="100%"
          src={videoLink}
          className={`${
            isHovered ? 'block' : 'hidden'
          } absolute h-full w-full rounded-lg object-cover`}
        ></video>
        <div className="absolute flex h-full w-full items-end p-8">
          <div>
            <h3 className="mb-2 text-2xl uppercase text-secondary md:text-3xl lg:text-2xl xl:text-3xl">
              {title}
            </h3>
            <p className="text-lg text-secondary md:text-xl lg:text-lg xl:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
