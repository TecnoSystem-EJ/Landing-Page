import React from "react";
import SliderCard from "./SliderCard";
import { ImageField, RichTextField } from "@prismicio/client";

type Card = {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
};

interface Props {
  cards: Card[];
}

const SliderComponent = ({ cards }: Props) => {
  return (
    <div className="flex flex-row w-full lg:justify-between py-2 lg:flex-wrap gap-4 bg-gray-alt overflow-x-auto lg:overflow-hidden scroll no-scrollbar">
      {cards.map((card, index) => {
        return (
          <SliderCard
            image={card.image}
            title={card.title}
            description={card.description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SliderComponent;
