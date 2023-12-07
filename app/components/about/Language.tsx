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
      <div className={`flex w-full ${paddingClass} items-center ${borderClasses} `}>
        <p className="grow">{title}</p>
        <p>{level}</p>
      </div>
    </>
  );
};

export default Language;
