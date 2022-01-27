import React from "react";
import { SenshiCard } from "../../styles/Series/HeroCard.styles";
import { randomColor, randomColor2 } from "../../utils/randomColor";
interface Props {
  heroImageUrl: string;
}

const HeroCard = ({ heroImageUrl }: Props) => {
  return (
    <SenshiCard
      randomColor={randomColor()}
      randomColor2={randomColor2()}
      heroImageUrl={heroImageUrl}
    />
  );
};

export default HeroCard;
