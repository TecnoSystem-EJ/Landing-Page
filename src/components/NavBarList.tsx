import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const NavBarList = async () => {
  const client = createClient();
  const navbar = await client.getSingle("navbar");
  return (
    <ul className="hidden md:flex justify-between gap-6 lg:text-[20px] md:text-sm font-secondary font-[600] uppercase">
      {navbar.data.navigation.map(({ label, link }) => {
        return (
          <li
            key={label}
            className="flex justify-center items-center px-4 rounded-2xl hover:border-red-600 border border-transparent"
          >
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarList;
