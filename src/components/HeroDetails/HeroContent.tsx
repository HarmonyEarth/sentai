import React, { useState } from 'react';
import {
  SenshiContainer,
  SenshiImage,
} from '../../styles/HeroDetails/HeroContent.styles';
import SenshiName from './SenshiName';
import { senshiImageLocation } from '../../utils/senshiImageLocation';
import AllHeroes from './AllHeroes';
import { Member, ScreenSizesType } from '../../models/types';

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
  members?: Member[];
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
  members,
}) => {
  const [transformation, setTransformation] = useState(false);

  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  const imageLocations = senshiImageLocation({ locationImage });

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
        src={heroImage3}
        alt={heroNameEN1}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        extraSmall={screenSizes.extraSmall}
        transformation={transformation}
      />
      <SenshiImage
        src={heroImage4}
        alt={heroNameEN2}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        extraSmall={screenSizes.extraSmall}
        transformation={!transformation}
      />

      {members && <AllHeroes members={members} />}
    </SenshiContainer>
  );
};
