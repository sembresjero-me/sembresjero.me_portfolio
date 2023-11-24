"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      max-w-screen-2xl
      h-full
        mx-auto
        xl:px-16 
        md:px-12
        sm:px-8
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
