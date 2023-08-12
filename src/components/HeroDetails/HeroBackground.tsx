import React from 'react';
import {
  SenshiBackgroundBlur,
  SenshiBackgroundColor,
  SenshiBackgroundContainer,
  SenshiBackgroundImage,
} from '../../styles/HeroDetails/HeroBackground.styles';

interface Props {
  heroImage1: string;

  color: string;
  mobile: boolean;
}

const HeroBackground: React.FC<Props> = ({
  heroImage1,

  color,
  mobile,
}) => {
  return (
    <SenshiBackgroundContainer>
      <SenshiBackgroundColor color={color} mobile={mobile}>
        <SenshiBackgroundImage src={heroImage1} mobile={mobile} />
        <SenshiBackgroundBlur mobile={mobile} />
      </SenshiBackgroundColor>
    </SenshiBackgroundContainer>
  );
};

export default HeroBackground;
