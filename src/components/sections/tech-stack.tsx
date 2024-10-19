import { title } from "@/components/primitives";
import { techIcons } from "@/config/icons";
import Image from "next/image";

type TechKey =
  | "typescript"
  | "react"
  | "tailwind"
  | "sass"
  | "node"
  | "next"
  | "next"
  | "appwrite"
  | "cloudinary";

const techs: TechKey[] = [
  "next",
  "react",
  "node",
  "tailwind",
  "appwrite",
  "node",
  "typescript",
  "cloudinary",
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
          github &lt;3.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        {techs.map((val: TechKey, key) => (
          <Image
            key={val + key}
            src={`/icons/${techIcons[val]}`}
            width={48}
            height={48}
            alt={val}
            className="size-6 md:size-12"
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
