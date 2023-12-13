'use client';

import Image from 'next/image';

interface StackSkillProps {
  id: number;
  title: string;
  imageLink: string;
}

const StackSkill: React.FC<StackSkillProps> = ({ id, title, imageLink }) => {
  let paddingClass = '';
  let borderClasses = '';
  if (id === 1) {
    paddingClass = 'pb-2';
    borderClasses = 'border-b-2 border-accent/70';
  } else if (id === 4) {
    paddingClass = 'pt-2';
  } else {
    paddingClass = 'py-2';
    borderClasses = 'border-b-2 border-accent/70';
  }
  return (
    <>
      <div className={`flex w-full ${paddingClass} items-center ${borderClasses} `}>
        <p className="grow">{title}</p>
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

export default StackSkill;
