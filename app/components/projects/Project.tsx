'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  imageLink: string;
  videoLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, imageLink, videoLink }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <div
        key={title}
        className="relative aspect-[3/2] w-full rounded-lg bg-card hover:cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={() => {
          router.push(link ? link : '#');
        }}
      >
        <Image
          src={imageLink}
          className="absolute h-full w-full rounded-lg object-cover transition"
          alt={`Jérôme Sembres portfolio - ${title} project`}
          fill={true}
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
