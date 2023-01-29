import React from 'react';
import {
  HeroesBarBlock,
  HeroesBarContainer,
  HeroesBarLeft,
  HeroesBarRight,
  HeroesBarSymbol,
  HeroesBarTitleContainer,
  HeroesBarTitleSpan,
  HeroesBarTitleText,
} from '../../styles/HeroesBar/HeroesBar.styles';

interface Props {
  heroSymbol: string;
  heroNameEN1: string;
  heroNameEN2: string;
}

const HeroesBar: React.FC<Props> = ({
  heroSymbol,
  heroNameEN1,
  heroNameEN2,
}) => {
  return (
    <HeroesBarContainer>
      <HeroesBarTitleContainer>
        <HeroesBarTitleText>
          SUPER SENTAI SERIES
          <HeroesBarTitleSpan>Heroes</HeroesBarTitleSpan>
        </HeroesBarTitleText>
      </HeroesBarTitleContainer>

      <HeroesBarBlock>
        <HeroesBarLeft>
          <HeroesBarSymbol src={heroSymbol} />
          <h3>
            {heroNameEN1} / {heroNameEN2}
          </h3>
        </HeroesBarLeft>
        <HeroesBarRight>
          <p>Display Heroes by Team</p>
        </HeroesBarRight>
      </HeroesBarBlock>
    </HeroesBarContainer>
  );
};

export default HeroesBar;
