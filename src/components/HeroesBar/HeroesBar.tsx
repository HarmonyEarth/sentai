import React from 'react';
import {
  SenshiBarContainer,
  SenshiBarSpan,
  SenshiBarText,
} from '../../styles/HeroesBar/HeroesBar.styles';

interface Props {
  heroSymbol: string;
  heroNameEN1: string;
  heroNameEN2: string;
  mobile: boolean;
}

const HeroesBar: React.FC<Props> = ({
  heroSymbol,
  heroNameEN1,
  heroNameEN2,
  mobile,
}) => {
  return (
    <SenshiBarContainer>
      <SenshiBarText>
        Super Sentai Series<SenshiBarSpan mobile={mobile}>Heroes</SenshiBarSpan>
      </SenshiBarText>
    </SenshiBarContainer>
  );
};

export default HeroesBar;
