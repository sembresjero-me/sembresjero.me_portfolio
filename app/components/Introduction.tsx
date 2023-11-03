"use client";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <>
      <div className="flex justify-center items-center bg-cream rounded-custom w-full min-h-[50svh] p-12 mb-32">
        <h2 className="font-instrument_serif text-[#0e100f] text-7xl text-center leading-tight">
          I'm a{" "}
          <span className="bg-gradient-to-r from-shockingly_green to-lt_green text-transparent bg-clip-text">
            freelance fullstack developer
          </span>{" "}
          always in the mood for{" "}
          <span className="bg-gradient-to-r from-lt_green to-shockingly_green text-transparent bg-clip-text">
            new challenging projects
          </span>
          .
        </h2>
      </div>
    </>
  );
};

export default Introduction;
