import React from 'react';
import {
  SenshiNameContainer,
  SenshiNameMainText,
  SenshiNameSecondaryText,
  SenshiNameTextContainer,
} from '../../styles/HeroDetails/SenshiName.styles';
import { senshiNameLocation } from '../../utils/senshiNameLocation';

interface Props {
  heroNameEN: string;
  heroNameJP: string;
  locationEN: string;
  locationJP: string;
  mobile: boolean;
  marginTop?: string;
}

const SenshiName: React.FC<Props> = ({
  heroNameEN,
  heroNameJP,
  locationEN,
  locationJP,
  mobile,
  marginTop,
}) => {
  const mainTextLocation = senshiNameLocation({ location: locationEN });

  const secondaryTextLocation = senshiNameLocation({ location: locationJP });

  return (
    <SenshiNameContainer mobile={mobile}>
      <SenshiNameTextContainer
        top={mainTextLocation.top}
        bottom={mainTextLocation.bottom}
        left={mainTextLocation.left}
        right={mainTextLocation.right}
      >
        <SenshiNameMainText>{heroNameEN}</SenshiNameMainText>
      </SenshiNameTextContainer>
      <SenshiNameTextContainer
        top={secondaryTextLocation.top}
        bottom={secondaryTextLocation.bottom}
        left={secondaryTextLocation.left}
        right={secondaryTextLocation.right}
        marginTop={locationEN === locationJP ? '96px' : '0px'}
      >
        <SenshiNameSecondaryText>{heroNameJP}</SenshiNameSecondaryText>
      </SenshiNameTextContainer>
    </SenshiNameContainer>
  );
};

export default SenshiName;
