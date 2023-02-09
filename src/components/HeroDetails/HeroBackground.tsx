import React from 'react';
import {
  SenshiBackgroundContainer,
  SenshiBackgroundImage,
} from '../../styles/HeroDetails/HeroBackground.styles';

interface Props {
  heroImage1: string;
  color: string;
  mobile: boolean;
}

const HeroBackground: React.FC<Props> = ({ heroImage1, color, mobile }) => {
  return (
    <SenshiBackgroundContainer>
      <SenshiBackgroundImage
        heroImage1={heroImage1}
        color={color}
        mobile={mobile}
      />
    </SenshiBackgroundContainer>
  );
};

export default HeroBackground;
