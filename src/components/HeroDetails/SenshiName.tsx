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
}

const SenshiName: React.FC<Props> = ({
  heroNameEN,
  heroNameJP,
  locationEN,
  locationJP,
  mobile,
}) => {
  const mainTextLocation = senshiNameLocation({ location: locationEN });

  const secondaryTextLocation = senshiNameLocation({ location: locationJP });

  return (
    <SenshiNameContainer>
      <SenshiNameTextContainer
        top={mainTextLocation.top}
        bottom={mainTextLocation.bottom}
        left={mainTextLocation.left}
        right={mainTextLocation.right}
        marginBottom={
          locationEN === locationJP ? (mobile ? '4rem' : '96px') : '0px'
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
          locationEN === locationJP ? (mobile ? '4rem' : '96px') : '0px'
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
