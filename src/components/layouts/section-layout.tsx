import { title as titlePrimitive } from "@/components/primitives";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  id: string;
};

const SectionLayout = ({ children, title, id }: Props) => {
  return (
    <section
      id={id}
      className="flex flex-col items-start justify-center gap-4 pt-8 md:pt-10"
    >
      <div className="">
        <h2 className={titlePrimitive({ size: "md" })}>{title}</h2>
      </div>
      <div className="mt-8 space-y-6 justify-start self-start ml-6">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
