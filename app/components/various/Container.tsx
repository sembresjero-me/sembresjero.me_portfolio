'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto h-full max-w-screen-2xl px-4 md:px-8 xl:px-12">{children}</div>
    </>
  );
};

export default Container;
