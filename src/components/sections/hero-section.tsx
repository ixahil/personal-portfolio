import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { technologies } from "@/config/icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import GridOption from "../grid-options";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 my-0"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Full-Stack&nbsp;</span>
        <span className={title({ color: "blue" })}>Developer&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Hi, I'm <span className="underline">Sahil Shaikh</span>. Full Stack
          Web & Mobile Engineer based in India.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.linkedin}
        >
          Linkedin
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <BentoGrids />
      </div>

      <div className="mt-8 w-full h-12">
        <div className="flex items-center gap-8 border-1 p-2 rounded-lg divide-x-2 select-none shadow-md dark:border-gray-600">
          <h2 className="text-sm md:text-2xl font-semibold text-center">
            Skills & Techs
          </h2>
          <div className="overflow-hidden relative scrolling-wrapper dark:border-gray-600">
            <div className="scrolling-items cursor-pointer">
              {technologies.concat(technologies).map((t, k) => (
                <Image
                  key={t.name + k}
                  src={`/icons/${t.icon}`}
                  width={48}
                  height={48}
                  alt={t.name}
                  className="size-6 md:size-12"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoGrids = () => {
  return (
    <>
      <div className="lg:grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 hidden grid-rows-2">
        <GridOption
          title="5+"
          subScript=""
          subTitle="Completed Projects"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="Specialized in MERN Stack"
          subScript=""
          subTitle=""
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="Your ultimate all in one Developer"
          subScript=""
          subTitle="I am a backend developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer."
          Link={"#contact"}
          CTA="Get in touch >"
          image=""
          className="col-span-2 row-span-2"
        />
        <GridOption
          title="10+"
          subScript=""
          subTitle="Satisfied Clients"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="1"
          subScript=" Years+"
          subTitle="Developement Experience"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
      </div>

      <div className="grid gap-4 h-full grid-cols-2 lg:hidden">
        <GridOption
          title="10+"
          subScript=""
          subTitle="Completed Projects"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="Specialized in MERN Stack"
          subScript=""
          subTitle=""
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />

        <GridOption
          title="50+"
          subScript=""
          subTitle="Satisfied Clients"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="1+"
          subScript="Years"
          subTitle="Developement Experiece"
          Link={""}
          CTA=""
          image=""
          className="col-span-1 row-span-1"
        />
        <GridOption
          title="Your ultimate all in one Developer"
          subScript=""
          subTitle="I am a backend developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer."
          Link={"#contact"}
          CTA="Get in touch >"
          image=""
          className="col-span-2 row-span-1"
        />
      </div>
    </>
  );
};

export default HeroSection;
