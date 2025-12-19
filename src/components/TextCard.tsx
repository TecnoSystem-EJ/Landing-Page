import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface Props {
  title: RichTextField;
  subtitle: RichTextField;
}

const TextCard = ({ title, subtitle }: Props) => {
  return (
    <div className="uppercase flex h-16">
      <div className="font-secondary flex items-right text-base lg:text-xl justify-center h-16 flex-grow flex-col text-black font-secondary pl-2 border-l-[3px] border-primary-main border-solid">
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="font-semibold">{children}</h3>
            ),
          }}
        />
        <PrismicRichText field={subtitle} />
      </div>
    </div>
  );
};

export default TextCard;
