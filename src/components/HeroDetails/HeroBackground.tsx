import React from "react";
import styled from "styled-components";
import LazyImage from "../Loading/LazyImage";

interface Props {
  heroImage1: string;
  color: string;
  mobile: boolean;
}

const HeroBackground: React.FC<Props> = ({ heroImage1, color, mobile }) => {
  return (
    <SenshiBackgroundContainer>
      <SenshiBackgroundColor color={color} mobile={mobile}>
        <SenshiBackgroundImage src={heroImage1} mobile={mobile} />
        <SenshiBackgroundBlur mobile={mobile} />
      </SenshiBackgroundColor>
    </SenshiBackgroundContainer>
  );
};

export default HeroBackground;

//MARK: - Styled Components

const SenshiBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const SenshiBackgroundColor = styled.div<Omit<Props, "heroImage1">>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    transparent,
    ${(props) => props.color} 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: "";
    display: ${(props) => (props.mobile ? "none" : "unset")};
    position: absolute;
    top: 0;
    left: -80%;
    width: 100%;
    height: 100%;
    transform: skewX(-15deg);
    background: white;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -70%;
    width: 100%;
    transform: skewX(-15deg);
    background: white;
  }
`;

const SenshiBackgroundImage = styled(LazyImage)<{ mobile: boolean }>`
  position: fixed;
  top: 4px;
  z-index: -1;
  width: ${(props) => (props.mobile ? "100%" : "65%")};
  height: 120%;
  scale: 1.01;
`;

const SenshiBackgroundBlur = styled.div<{ mobile: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  box-shadow: inset ${(props) => (props.mobile ? "0rem" : "30rem")} 0rem 200px
    20px white;

  z-index: -1;
`;
