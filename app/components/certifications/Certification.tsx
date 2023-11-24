"use client";

interface CertificationProps {
  title: string;
  date: string;
  location: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  date,
  location,
}) => {
  return (
    <>
      <div className="bg-cream rounded-custom p-12 w-full h-full">
        <h3 className="text-2xl 2xl:text-3xl leading-tight mb-4">{title}</h3>
        <h4 className="italic text-lg 2xl:text-xl leading-tight mb-4">
          {date}
        </h4>
        <p>{location}</p>
      </div>
    </>
  );
};

export default Certification;
