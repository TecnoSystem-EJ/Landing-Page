import React from "react";
import { NavbarDocumentData } from "../../prismicio-types";
import { PrismicLink } from "@prismicio/react";

interface props {
  ulStyles: string;
  liStyles: string;
  handleNavClick?: () => void;
  navigation: NavbarDocumentData;
}

const NavBarListMobile = ({
  ulStyles,
  liStyles,
  handleNavClick,
  navigation,
}: props) => {
  return (
    <ul className={ulStyles}>
      {navigation.navigation.map(({ label, link }, index) => {
        return (
          <li key={index} className={liStyles} onClick={handleNavClick}>
            <PrismicLink field={link}>{label}</PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarListMobile;
