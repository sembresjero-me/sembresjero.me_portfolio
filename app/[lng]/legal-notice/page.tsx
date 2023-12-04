import LegalNotice from "@/app/components/LegalNotice";

interface LegalNoticePageProps {
  params: { lng: string };
}

const LegalNoticePage: React.FC<LegalNoticePageProps> = async ({
  params: { lng },
}) => {
  return (
    <>
      <LegalNotice lng={lng} />
    </>
  );
};

export default LegalNoticePage;
