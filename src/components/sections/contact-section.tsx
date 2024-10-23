import { Link } from "@nextui-org/link";

import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import SectionLayout from "../layouts/section-layout";
import Image from "next/image";

const icons = {
  linkedin: <LinkedInIcon size={28} />,
  email: <Mail size={28} />,
  github: <GithubIcon size={28} />,
  medium: <Image src="/icons/medium.svg" width="30" height="30" alt="medium" />,
};

type LinkKeys = keyof typeof siteConfig.links;

const ContactSection = async () => {
  return (
    <SectionLayout id="contact" title="Contact">
      {(Object.keys(siteConfig.links) as LinkKeys[]).map(
        (linkKey: LinkKeys) => (
          <Link
            key={linkKey}
            className="flex gap-4 text-black dark:text-white"
            isExternal
            aria-label={linkKey}
            href={
              linkKey === "email"
                ? `mailto:${siteConfig.links[linkKey]}`
                : siteConfig.links[linkKey]
            }
          >
            {icons[linkKey] || null}
            <span className="font-bold text-xs lg:text-lg">
              {siteConfig.links[linkKey]}
            </span>
          </Link>
        )
      )}
    </SectionLayout>
  );
};

export default ContactSection;
