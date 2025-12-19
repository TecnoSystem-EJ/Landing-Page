// Flow
import React from "react";
// Component
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <figure className="relative w-full h-full">
      <Image
        src={src}
        fill
        objectFit="cover"
        alt={alt ?? ""}
        quality={100}
        className="rounded-3xl "
      />
    </figure>
  );
};

export default CustomImage;
