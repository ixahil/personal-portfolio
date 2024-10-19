import { Link } from "@nextui-org/link";

import { LinkedInIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import SectionLayout from "../layouts/section-layout";

const ContactSection = async () => {
  return (
    <SectionLayout id="contact" title="Contact">
      <Link
        className="flex gap-4 text-black dark:text-white"
        isExternal
        aria-label="Email"
        href={siteConfig.links.email}
      >
        <Mail size={28} />
        <span className="font-bold text-lg">{siteConfig.email}</span>
      </Link>
      <Link
        className="flex gap-4 text-black dark:text-white"
        isExternal
        aria-label="Linkedin"
        href={siteConfig.links.linkedin}
      >
        <LinkedInIcon size={28} />
        <span className="font-bold text-lg">{siteConfig.developer}</span>
      </Link>
    </SectionLayout>
  );
};

export default ContactSection;
