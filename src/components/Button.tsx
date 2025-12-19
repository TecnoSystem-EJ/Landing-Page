import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

type Props = {
  href: LinkField;
  styles: "primary" | "secondary";
  name: KeyTextField;
  buttonSecundary?: boolean;
};

const Button = ({ href, styles, name, buttonSecundary }: Props) => {
  const buttonClass =
    styles === "primary" ? "primary-button" : "secondary-button";

  return (
    <PrismicNextLink field={href}>
      <div
        className={`flex px-4 normal-case font-secondary
        rounded-lg items-center ${buttonClass}
        ${buttonSecundary ? "justify-center py-3 text-sm font-normal" : "py-1 text-xl border border-separate"} `}
      >
        {name}
      </div>
    </PrismicNextLink>
  );
};

export default Button;
