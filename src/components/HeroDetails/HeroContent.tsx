import React, { useState } from 'react';
import {
  SenshiContainer,
  SenshiImage,
} from '../../styles/HeroDetails/HeroContent.styles';
import SenshiName from './SenshiName';
import { senshiImageLocation } from '../../utils/senshiImageLocation';
import { ScreenSizesType } from '../../models/types';

interface Props {
  heroImage3: string;
  heroImage4: string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
  locationEN: string;
  locationJP: string;
  locationImage: string;
  mobile: boolean;
  screenSizes: ScreenSizesType;
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
  locationImage,
  mobile,
  screenSizes,
}) => {
  const [transformation, setTransformation] = useState(false);

  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  const imageLocations = senshiImageLocation({ locationImage });

  return (
    <SenshiContainer>
      <SenshiName
        heroNameEN={transformation ? heroNameEN2 : heroNameEN1}
        heroNameJP={transformation ? heroNameJP2 : heroNameJP1}
        locationEN={locationEN}
        locationJP={locationJP}
        mobile={mobile}
        onClick={handleTransformation}
      />
      <SenshiImage
        src={heroImage3}
        alt={heroNameEN1}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        extraSmall={screenSizes.extraSmall}
        transformation={transformation}
        onClick={handleTransformation}
      />
      <SenshiImage
        src={heroImage4}
        alt={heroNameEN2}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        extraSmall={screenSizes.extraSmall}
        transformation={!transformation}
        onClick={handleTransformation}
      />
    </SenshiContainer>
  );
};
