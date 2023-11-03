"use client";

import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imageLink,
  videoLink,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <div
        key={title}
        className="relative bg-cream rounded-custom w-full aspect-square"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <img
          src={imageLink}
          className={`absolute w-full h-full object-cover rounded-custom transition`}
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
            isHovered ? "block" : "hidden"
          } absolute w-full h-full object-cover rounded-custom`}
        ></video>
        <div className="absolute p-12 w-full h-full flex items-end">
          <div>
            <h4 className="text-white text-3xl leading-tight uppercase mb-2">
              {title}
            </h4>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
