'use client';

interface LanguageProps {
  id: number;
  title: string;
  level: string;
}

const Language: React.FC<LanguageProps> = ({ id, title, level }) => {
  let paddingClass = '';
  let borderClasses = '';
  if (id === 1) {
    paddingClass = 'pb-3';
    borderClasses = 'border-b-2 border-accent/70';
  } else if (id === 3) {
    paddingClass = 'pt-3';
  } else {
    paddingClass = 'py-3';
    borderClasses = 'border-b-2 border-accent/70';
  }
  return (
    <>
      <div
        className={`flex w-full flex-col gap-2 sm:hidden ${paddingClass} items-stretch justify-items-center ${borderClasses} `}
      >
        <p>{title}</p>
        <p className="italic">{level}</p>
      </div>
      <div
        className={`hidden w-full flex-row gap-8 sm:flex ${paddingClass} items-center justify-items-stretch ${borderClasses} `}
      >
        <p className="grow justify-self-start">{title}</p>
        <p className="justify-self-end italic">{level}</p>
      </div>
    </>
  );
};

export default Language;
