import React, { ReactNode } from "react";
import { createClient } from "@/prismicio";
import { FaWhatsapp } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

const ICON: Record<string, ReactNode> = {
  "1": <FaWhatsapp size={30} />,
};
const FloatIcon = async () => {
  const client = createClient();
  const floatwpp = await client.getSingle("floatwpp");
  const whatsappArray = floatwpp.data.whatsapp;

  return (
    <div className="flex flex-col w-1/2 gap-5">
      {whatsappArray.map((item, index) => (
        <PrismicNextLink
          key={index}
          field={item.link}
          className="text-white bg-green-600 rounded-full text-xl fixed bottom-14 right-7 p-1 text-center z-50  font-black hover:bg-[#029e3b] hover:text-white"
        >
          {ICON[item.icon]}
        </PrismicNextLink>
      ))}
    </div>
  );
};

export default FloatIcon;
