import Projects from "@/app/components/projects/Projects";

interface ProjectsPageProps {
  params: { lng: string };
}

const ProjectsPage: React.FC<ProjectsPageProps> = async ({
  params: { lng },
}) => {
  return (
    <>
      <Projects lng={lng} />
    </>
  );
};

export default ProjectsPage;
