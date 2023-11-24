"use client";

import Image from "next/image";

interface WebDevelopmentSkillProps {
  title: string;
  imageLink: string;
}

const WebDevelopmentSkill: React.FC<WebDevelopmentSkillProps> = ({
  title,
  imageLink,
}) => {
  return (
    <>
      <div className="w-full flex items-center">
        <p className="me-2">{title}</p>
        <Image
          src={imageLink}
          width={20}
          height={20}
          alt={`Jérôme Sembres Portfolio | ${title} Logo`}
          className="mb-2"
        />
      </div>
    </>
  );
};

export default WebDevelopmentSkill;
