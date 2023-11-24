import Home from "@/app/components/Home";

interface HomePageProps {
  params: { lng: string };
}

const HomePage: React.FC<HomePageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <Home lng={lng} />
    </>
  );
};

export default HomePage;
