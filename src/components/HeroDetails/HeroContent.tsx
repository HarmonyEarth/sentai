import React, { useState } from 'react';
import {
  SenshiContainer,
  SenshiImage,
  SenshiNameJP,
  SenshiNameEN,
} from '../../styles/HeroDetails/HeroContent.styles';

interface Props {
  heroImage3: string;
  heroImage4: string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
}

export const HeroContent: React.FC<Props> = ({
  heroImage3,
  heroImage4,
  heroNameEN1,
  heroNameEN2,
  heroNameJP1,
  heroNameJP2,
}) => {
  const [transformation, setTransformation] = useState(false);

  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  return (
    <SenshiContainer onClick={handleTransformation}>
      <SenshiNameEN>{transformation ? heroNameEN2 : heroNameEN1}</SenshiNameEN>
      <SenshiNameJP>{transformation ? heroNameJP2 : heroNameJP1}</SenshiNameJP>
      <SenshiImage
        src={transformation ? heroImage4 : heroImage3}
        alt={transformation ? heroNameEN2 : heroNameEN1}
      />
    </SenshiContainer>
  );
};
