import { siteConfig } from "@/config/site";
import Image from "next/image";
import NextLink from "next/link";
import { GithubIcon, LinkedInIcon } from "./icons";
import { Globe } from "lucide-react";
import { title, subtitle } from "@/components/primitives";
import { Project } from "./sections/projects-section";
import { Link, Button } from "@nextui-org/react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col md:flex-row gap-8 border-0 sm:border-2 p-0 sm:p-8 rounded-lg shadow-lg dark:border-gray-600 transition-all duration-300 hover:shadow-2xl">
    <div className="dark:border-gray-600 w-full md:w-4/6 h-full md:h-72 shadow-md border-2 rounded-lg relative overflow-hidden group hover:cursor-pointer">
      {project.images ? (
        <Image
          width={500}
          height={500}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-auto transition-transform duration-[1000ms] ease-linear group-hover:-translate-y-[calc(100%-18rem)]"
        />
      ) : (
        <Image
          width={500}
          height={500}
          src={"/placeholder.jpg"}
          alt={project.title}
          className="w-full h-auto"
        />
      )}
    </div>
    <div className="flex flex-col justify-between md:w-3/5 p-6">
      <div className="space-y-2">
        <h4 className={title({ size: "xs" })}>{project.title}</h4>
        <div className="mb-4">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 dark:bg-gray-500 dark:text-white rounded-full px-3 py-1 text-xs font-light text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 block">
        {project.description}
      </p>
      <div className="flex space-x-4">
        <Button
          href={project.demo}
          as={Link}
          isExternal
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          aria-label={`View ${project.title} project`}
        >
          <Globe className="mr-2" size={18} />
          Live Demo
        </Button>
        <Button
          href={project.source}
          as={Link}
          isExternal
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-indigo-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon className="mr-2" />
          Open Repo
        </Button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
