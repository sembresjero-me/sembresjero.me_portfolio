import PrivacyPolicy from "@/app/components/PrivacyPolicy";

interface PrivacyPolicyPageProps {
  params: { lng: string };
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = async ({
  params: { lng },
}) => {
  return (
    <>
      <PrivacyPolicy lng={lng} />
    </>
  );
};

export default PrivacyPolicyPage;
