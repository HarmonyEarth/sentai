import React from "react";
import {
  SenshiNameContainer,
  SenshiNameMainText,
  SenshiNameSecondaryText,
  SenshiNameTextContainer,
} from "../../styles/HeroDetails/SenshiName.styles";
import { senshiNameLocation } from "../../utils/senshiNameLocation";
import { locationText } from "../../constants";

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

  let margin = "0px";

  if (locationEN === locationJP) {
    margin = "96px";
  } else if (
    (locationEN === locationText.bottomRight &&
      locationJP === locationText.bottomLeft) ||
    (locationEN === locationText.bottomLeft &&
      locationJP === locationText.bottomRight) ||
    (locationEN === locationText.topLeft &&
      locationJP === locationText.topRight) ||
    (locationEN === locationText.topRight &&
      locationJP === locationText.topLeft)
  ) {
    margin = "6rem";
  }

  return (
    <SenshiNameContainer mobile={mobile} onClick={mobile ? onClick : undefined}>
      <SenshiNameTextContainer
        top={mainTextLocation.top}
        bottom={mainTextLocation.bottom}
        left={mainTextLocation.left}
        right={mainTextLocation.right}
        marginBottom={margin}
      >
        <SenshiNameMainText mobile={mobile}>{heroNameEN}</SenshiNameMainText>
      </SenshiNameTextContainer>
      <SenshiNameTextContainer
        top={secondaryTextLocation.top}
        bottom={secondaryTextLocation.bottom}
        left={secondaryTextLocation.left}
        right={secondaryTextLocation.right}
        marginTop={margin}
      >
        <SenshiNameSecondaryText mobile={mobile}>
          {heroNameJP}
        </SenshiNameSecondaryText>
      </SenshiNameTextContainer>
    </SenshiNameContainer>
  );
};

export default SenshiName;
