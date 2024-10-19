import { Link } from "@nextui-org/react";
import { GithubIcon, LinkedInIcon } from "../icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3 bg-primary/85 h-20 px-2 sm-px-0">
      <div className="container text-white font-medium text-xl flex justify-between items-center">
        <p className="text-xs sm:text-sm">
          Copyright © sahildev.pro. All rights are reserved
        </p>
        <div className="flex gap-2 sm:gap-4">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon className="text-white size-4 sm:size-8" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-white size-4 sm:size-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
