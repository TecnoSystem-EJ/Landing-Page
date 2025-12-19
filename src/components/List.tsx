import { KeyTextField } from "@prismicio/client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface Props {
  text: KeyTextField;
}

const List = ({ text }: Props) => {
  return (
    <li className="flex flex-row gap-2 items-center ">
      <IoIosCheckmarkCircle className="text-primary-main text-sm lg-text-xl" />
      <p className="uppercase font-secondary text-sm font-normal">{text}</p>
    </li>
  );
};

export default List;
