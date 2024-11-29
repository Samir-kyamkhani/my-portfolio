// app/projects/[id]/page.tsx

import ProjectDetail from "@/components/ProjectDetail";
import { items } from "@/lib/Index";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = params;

  // Find the project based on the ID from the items array
  const project = items.find((item) => item.id.toString() === id);

  if (!project) {
    // Handle not found
    return (
      <>
        <div>Project not found</div>;
      </>
    );
  }

  return (
    <>
      {" "}
      <div className="w-full flex justify-center min-w-[21rem] bg-[#F5F4F0] ">
        <div className="w-full max-w-[952px] px-4 py-6 sm:px-6 md:px-8 lg:px-0">
          <ProjectDetail
            title={project.title}
            description={project.description}
            img={project.images}
            rating={project.rating}
            tags={project.tags}
            year={project.year}
            client={project.client}
            services={project.services}
            project={project.project}
          />
        </div>
      </div>
    </>
  );
}
