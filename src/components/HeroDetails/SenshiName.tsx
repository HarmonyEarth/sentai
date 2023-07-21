import React from 'react';
import {
  SenshiNameContainer,
  SenshiNameMainText,
  SenshiNameSecondaryText,
  SenshiNameTextContainer,
} from '../../styles/HeroDetails/SenshiName.styles';
import { senshiNameLocation } from '../../utils/senshiNameLocation';
import { locationText } from '../../utils/constants';

interface Props {
  heroNameEN: string;
  heroNameJP: string;
  locationEN: string;
  locationJP: string;
  mobile: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | undefined;
}

const SenshiName: React.FC<Props> = ({
  heroNameEN,
  heroNameJP,
  locationEN,
  locationJP,
  mobile,
  onClick,
}) => {
  if (mobile) {
    switch (locationEN) {
      case locationText.topLeft:
        locationEN = locationText.bottomLeft;
        break;
      case locationText.topRight:
        locationEN = locationText.bottomRight;
        break;
      default:
        break;
    }
    switch (locationJP) {
      case locationText.topLeft:
        locationJP = locationText.bottomLeft;
        break;
      case locationText.topRight:
        locationJP = locationText.bottomRight;
        break;
      default:
        break;
    }
  }
  const mainTextLocation = senshiNameLocation({
    location: locationEN,
  });

  const secondaryTextLocation = senshiNameLocation({
    location: locationJP,
  });

  return (
    <SenshiNameContainer mobile={mobile} onClick={mobile ? onClick : undefined}>
      <SenshiNameTextContainer
        top={mainTextLocation.top}
        bottom={mainTextLocation.bottom}
        left={mainTextLocation.left}
        right={mainTextLocation.right}
        marginBottom={
          locationEN === locationJP
            ? '96px'
            : locationEN === locationText.bottomRight &&
              locationJP === locationText.bottomLeft
            ? '6rem'
            : locationEN === locationText.bottomLeft &&
              locationJP === locationText.bottomRight
            ? '6rem'
            : '0px'
        }
      >
        <SenshiNameMainText mobile={mobile}>{heroNameEN}</SenshiNameMainText>
      </SenshiNameTextContainer>
      <SenshiNameTextContainer
        top={secondaryTextLocation.top}
        bottom={secondaryTextLocation.bottom}
        left={secondaryTextLocation.left}
        right={secondaryTextLocation.right}
        marginTop={
          locationEN === locationJP
            ? '96px'
            : locationEN === locationText.topLeft &&
              locationJP === locationText.topRight
            ? '6rem'
            : locationEN === locationText.topRight &&
              locationJP === locationText.topLeft
            ? '6rem'
            : '0px'
        }
      >
        <SenshiNameSecondaryText mobile={mobile}>
          {heroNameJP}
        </SenshiNameSecondaryText>
      </SenshiNameTextContainer>
    </SenshiNameContainer>
  );
};

export default SenshiName;
