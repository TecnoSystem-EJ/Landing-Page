import React from "react";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

interface Props {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
}

const SliderCard = ({ image, title, description }: Props) => {
  return (
    <div className="lg:w-[30%] gap-4 bg-white flex flex-col items-center justify-start lg:border border-primary-main rounded-2xl shadow-md p-4">
      <div className="w-72 min-h-40 xl:min-h-52 lg lg:w-full rounded-2xl overflow-hidden">
        <figure className="relative w-full h-full lg:mb-2">
          <PrismicNextImage field={image} fill />
        </figure>
      </div>
      <div className="flex flex-col items-start lg:w-full">
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-xl normal-case font-primary">{children}</h2>
            ),
          }}
        />
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-base lowercase font-400 font-secondary mb-2">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SliderCard;
