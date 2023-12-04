import Bento from "@/app/components/Bento";

interface BentoPageProps {
  params: { lng: string };
}

const BentoPage: React.FC<BentoPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <Bento lng={lng} />
    </>
  );
};

export default BentoPage;
