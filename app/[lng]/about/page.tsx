import About from "@/app/components/About";

interface BentoPageProps {
  params: { lng: string };
}

const BentoPage: React.FC<BentoPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <About lng={lng} />
    </>
  );
};

export default BentoPage;
