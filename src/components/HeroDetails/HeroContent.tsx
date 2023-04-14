import React, { useState } from 'react';
import {
  SenshiContainer,
  SenshiImage,
} from '../../styles/HeroDetails/HeroContent.styles';
import SenshiName from './SenshiName';

interface Props {
  heroImage3: string;
  heroImage4: string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
  locationEN: string;
  locationJP: string;
  mobile: boolean;
}

export const HeroContent: React.FC<Props> = ({
  heroImage3,
  heroImage4,
  heroNameEN1,
  heroNameEN2,
  heroNameJP1,
  heroNameJP2,
  locationEN,
  locationJP,
  mobile,
}) => {
  const [transformation, setTransformation] = useState(false);

  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  if (!heroImage3 || !heroImage4) {
    return <h1>Loading...</h1>;
  }

  return (
    <SenshiContainer onClick={handleTransformation}>
      <SenshiName
        heroNameEN={transformation ? heroNameEN2 : heroNameEN1}
        heroNameJP={transformation ? heroNameJP2 : heroNameJP1}
        locationEN={locationEN}
        locationJP={locationJP}
        mobile={mobile}
      />
      <SenshiImage
        src={transformation ? heroImage4 : heroImage3}
        alt={transformation ? heroNameEN2 : heroNameEN1}
        mobile={mobile}
      />
    </SenshiContainer>
  );
};
