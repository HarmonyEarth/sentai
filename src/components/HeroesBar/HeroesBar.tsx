import React from 'react';
import {
  SenshiBar,
  SenshiBarTitleContainer,
  SenshiBarSpan,
  SenshiBarText,
  SenshiBarLeft,
  SenshiBarLeftSymbol,
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
    <>
      <SenshiBarTitleContainer>
        <SenshiBarText>
          Super Sentai Series
          <SenshiBarSpan mobile={mobile}>Heroes</SenshiBarSpan>
        </SenshiBarText>
      </SenshiBarTitleContainer>
      <SenshiBar mobile={mobile}>
        <SenshiBarLeft>
          <SenshiBarLeftSymbol src={heroSymbol} />
          <h3>
            {heroNameEN1} / {heroNameEN2}
          </h3>
        </SenshiBarLeft>
        <div>{/* <p>Display Heroes by Team</p> */}</div>
      </SenshiBar>
    </>
  );
};

export default HeroesBar;
