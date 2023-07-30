import React from 'react';
import {
  SenshiBar,
  SenshiBarTitleContainer,
  SenshiBarSpan,
  SenshiBarText,
  SenshiBarLeft,
  SenshiBarLeftSymbol,
} from '../../styles/HeroesBar/HeroesBar.styles';
import { siteFavIcon } from '../../utils/constants';

interface Props {
  heroSymbol?: string;
  heroNameEN1?: string;
  heroNameEN2?: string;
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
        <SenshiBarText mobile={mobile}>
          Super Sentai Series
          <SenshiBarSpan mobile={mobile}>Heroes</SenshiBarSpan>
        </SenshiBarText>
      </SenshiBarTitleContainer>
      <SenshiBar mobile={mobile}>
        <SenshiBarLeft>
          <SenshiBarLeftSymbol
            src={heroSymbol || siteFavIcon}
            alt={`${heroNameEN2 || 'Super Sentai'} Symbol`}
          />
          {!heroNameEN1 || !heroNameEN2 ? (
            <h3>Display Heroes</h3>
          ) : (
            <h3>
              {heroNameEN1} / {heroNameEN2}
            </h3>
          )}
        </SenshiBarLeft>
      </SenshiBar>
    </>
  );
};

export default HeroesBar;
