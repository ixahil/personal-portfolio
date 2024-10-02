import { Link } from "@nextui-org/link";

import { LinkedInIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

const ContactSection = async () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <h2 className={title({ size: "sm" })}>Contact&nbsp;</h2>
      </div>

      <div className="mt-8 space-y-6 justify-start self-start">
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
      </div>
    </section>
  );
};

export default ContactSection;
