import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ImageComponent = ({ src, alt, width, height }: Props) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default ImageComponent;
