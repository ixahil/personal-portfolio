import { title } from "@/components/primitives";
import { techIcons } from "@/config/icons";
import { Heart } from "lucide-react";
import Image from "next/image";

type TechKey =
  | "Typescript"
  | "React"
  | "Tailwind"
  | "Sass"
  | "Node"
  | "Next"
  | "Appwrite"
  | "Cloudinary";

const techs: TechKey[] = [
  "Next",
  "React",
  "Node",
  "Tailwind",
  "Appwrite",
  "Typescript",
  "Cloudinary",
];

const TechStack = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <div className="inline-block max-w-xl text-center justify-center space-y-4">
        <h3 className={title({ size: "xs" })}>
          Technologies used in this portfolio&nbsp;
        </h3>
        <p>
          You can copy/clone this portfolio and change the settings, voila you
          have your own portfolio crafted - Don't forget to give me a star on
          github.
        </p>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap items-center justify-center">
        {techs.map((val: TechKey, key) => (
          <div className="flex flex-col items-center gap-2" key={val + key}>
            <Image
              src={`/icons/${techIcons[val]}`}
              width={48}
              height={48}
              alt={val}
              className="size-6 md:size-12"
            />
            <span className="font-medium">{val}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
