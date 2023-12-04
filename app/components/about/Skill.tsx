"use client";

import Image from "next/image";

interface SkillProps {
  id: number;
  title: string;
  imageLink: string;
}

const Skill: React.FC<SkillProps> = ({ id, title, imageLink }) => {
  let paddingClass = "";
  let borderClasses = "";
  if (id === 1) {
    paddingClass = "pb-3";
    borderClasses = "border-b-2 border-accent/70";
  } else if (id === 5) {
    paddingClass = "pt-3";
  } else {
    paddingClass = "py-3";
    borderClasses = "border-b-2 border-accent/70";
  }
  return (
    <>
      <div
        className={`w-full flex ${paddingClass} items-center ${borderClasses} `}
      >
        <p className="grow">
          {title}
        </p>
        <Image
          src={imageLink}
          width={25}
          height={25}
          alt={`Jérôme Sembres Portfolio | ${title} Logo`}
        />
      </div>
    </>
  );
};

export default Skill;
