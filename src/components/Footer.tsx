import React, { ReactNode } from "react";
import { createClient } from "@/prismicio";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

const ICONS_MAP: Record<string, ReactNode> = {
  "1": <MdOutlineEmail size={30} />,
  "2": <FaWhatsapp size={30} />,
  "3": <FaInstagram size={30} />,
  "4": <FaFacebook size={30} />,
};

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="flex w-full py-8 bg-primary-main ">
      <div className="flex flex-row justify-between md:mx-auto w-full h-full md:container p-4">
        <div className="flex flex-col w-1/2 gap-4">
          {footer.data.social.map(({ label, link, icon }, index) => (
            <PrismicNextLink
              field={link}
              className="flex items-center gap-4 text-white text-xl"
              key={index}
            >
              <div className="">{ICONS_MAP[icon]}</div>
              <div className="flex flex-row gap-5">{label}</div>
            </PrismicNextLink>
          ))}
        </div>
        <div className="hidden md:flex flex-col w-1/2 items-end justify-center">
          <Image
            src="/images/logots01.svg"
            alt="ts logo"
            height={90}
            width={90}
            className="border rounded-xl bg-gray-alt py-1 px-2"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
