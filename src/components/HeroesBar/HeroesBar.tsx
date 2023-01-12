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

const HeroesBar = () => {
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
          <HeroesBarSymbol src="https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Fmembers%2FpgaMMDdBuXauGBwhwYDr%2FheroSymbol.png?alt=media&token=381cfea4-5204-4190-871a-eb5a7a12080f" />
          <h3>Little Mac</h3>
        </HeroesBarLeft>
        <HeroesBarRight>
          <p>Display Heroes by Team</p>
        </HeroesBarRight>
      </HeroesBarBlock>
    </HeroesBarContainer>
  );
};

export default HeroesBar;
