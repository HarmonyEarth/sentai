import React from "react";
import styled from "styled-components";
import { siteFavIcon } from "../../constants";
import LazyImage from "../Loading/LazyImage";

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
            alt={`${heroNameEN2 || "Super Sentai"} Symbol`}
          />
          {!heroNameEN1 || !heroNameEN2 ? (
            <h3>Display Heroes by Series</h3>
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

//MARK: - Styled Components

const SenshiBarTitleContainer = styled.div`
  display: flex;
  h2 {
    background: linear-gradient(
      270deg,
      #ff0000,
      #eeff00,
      #18ff00,
      #0049ff,
      #fe00ff,
      #ffffff,
      #ffab00
    );
    background-size: 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.05rem transparent;
    -webkit-animation: SentaiGradient 55s ease infinite;
    -moz-animation: SentaiGradient 55s ease infinite;
    animation: SentaiGradient 55s ease infinite;
  }

  @-webkit-keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 51%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 51%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const SenshiBarText = styled.h2<{ mobile: boolean }>`
  text-align: center;
  margin: 0 auto;
  padding: 0;
  text-transform: uppercase;
  font-size: ${(props) => (props.mobile ? "1rem" : "1.5rem")};
`;

const SenshiBarSpan = styled.span<{ mobile: boolean }>`
  display: ${(props) => (props.mobile ? "block" : "inline-block")};
  color: ${(props) => (props.mobile ? "#FFFFFF" : "#000000")};
  margin-top: -0.5rem;
  font-size: 4rem;
`;

const SenshiBar = styled.div<{ mobile: boolean }>`
  max-width: 100%;
  height: 50px;
  background-color: black;
  margin-top: ${(props) => (props.mobile ? "-0.9rem" : "-1rem")};
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p,
  h3 {
    color: #fff;
  }
`;

const SenshiBarLeft = styled.div`
  min-width: 0; /*fixes this bar from pushing the right side out for some reason*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const SenshiBarLeftSymbol = styled(LazyImage)`
  max-height: 60px;
  max-width: 60px;
`;
