import { title } from "@/components/primitives";
import { getProjects } from "@/lib/server/utils";
import ProjectCard from "../project-card";
import SectionLayout from "../layouts/section-layout";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  images?: string[];
  source?: string;
  demo?: string;
  $id: string;
};

const ProjectSection = async () => {
  const data = await getProjects();

  let projectsData: Project[] = [];

  if (data) {
    let projects: Project[] = data.documents.map((doc: any) => ({
      title: doc.title,
      description: doc.description,
      technologies: doc.technologies,
      images: doc.images,
      source: doc.source,
      demo: doc.demo,
      $id: doc["$id"],
    }));
    projectsData = projects;
  }

  return (
    <SectionLayout id="projects" title="Projects">
      <div className="mt-8 space-y-16 w-full h-full">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.$id} project={project} />
          ))
        ) : (
          <div className="w-full h-full border-2 min-h-96 flex items-center justify-center rounded-lg dark:border-gray-600">
            <h5 className="text-center underline text-xl">Nothing here!</h5>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default ProjectSection;
