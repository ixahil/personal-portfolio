import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subScript?: string;
  subTitle?: string;
  CTA?: string;
  Link?: string;
  image?: string;
  className?: string;
};

const GridOption = ({
  title,
  subScript,
  subTitle,
  CTA,
  Link: link,
  image,
  className,
}: Props) => {
  // text-base sm:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl
  return (
    <div
      className={`${className} rounded-2xl grid-option bg-night flex flex-col items-center gap-2 justify-center cursor-default select-none p-4 xl:p-8 h-full border-2 dark:border-gray-600`}
    >
      <div className="">
        <h4 className="text-2xl font-medium">
          {title}
          <sub className="text-xs">{subScript}</sub>
        </h4>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-base">{subTitle}</p>
      {link && (
        <Link
          className="text-lg text-slateblue pt-4 hover-underline-animation"
          href={link}
        >
          {CTA}
        </Link>
      )}
      {image && (
        <div className="">
          <Image
            src={image}
            alt={title}
            className="w-full rounded-t-2xl mb-[-50px]"
            width={500}
            height={500}
          />
          {/* <Image
            src={image}
            alt={title}
            layout={"fill"}
            className="object-cover opacity-45"
          /> */}
        </div>
      )}
    </div>
  );
};

export default GridOption;
