"use client";

import Image from "next/image";

interface StackProps {
  title: string;
  image: string;
}

const Stack: React.FC<StackProps> = ({ title, image }) => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
        <h3 className="text-2xl 2xl:text-3xl leading-tight">{title}</h3>
        <Image
          src={image}
          width={65}
          height={65}
          alt={`Jérôme Sembres Portfolio - ${title} Logo`}
          className="justify-self-end self-end"
        ></Image>
      </div>
    </>
  );
};

export default Stack;
