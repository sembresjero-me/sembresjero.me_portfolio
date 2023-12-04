"use client";

interface WorkExperienceProps {
  id: number;
  title: string;
  date: string;
  location: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  id,
  title,
  date,
  location,
}) => {
  let paddingClass = "";
  let borderClasses = "";
  if (id === 1) {
    paddingClass = "pb-3";
    borderClasses = "border-b-2 border-accent/70";
  } else if (id === 4) {
    paddingClass = "pt-3";
  } else {
    paddingClass = "py-3";
    borderClasses = "border-b-2 border-accent/70";
  }
  return (
    <>
      <div
        className={`w-full grid grid-cols-12 gap-4 ${paddingClass} justify-items-stretch items-center ${borderClasses} `}
      >
        <p className="col-span-6 justify-self-start grow">
          {title}
        </p>
        <p className="col-span-2 justify-self-center italic">
          {date}
        </p>
        <p className="col-span-4 justify-self-end">{location}</p>
      </div>
    </>
  );
};

export default WorkExperience;
