'use client';

interface WorkExperienceProps {
  id: number;
  title: string;
  date: string;
  location: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ id, title, date, location }) => {
  let paddingClass = '';
  let borderClasses = '';
  if (id === 1) {
    paddingClass = 'pb-3';
    borderClasses = 'border-b-2 border-accent/70';
  } else if (id === 4) {
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
        <p className="italic">
          {date} ~ {location}
        </p>
      </div>
      <div
        className={`hidden w-full flex-row gap-8 sm:flex ${paddingClass} items-center justify-items-stretch ${borderClasses} `}
      >
        <p className="grow justify-self-start">
          {title} @ {location}
        </p>
        <p className="justify-self-end italic">{date}</p>
      </div>
    </>
  );
};

export default WorkExperience;
