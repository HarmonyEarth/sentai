import React, { useState } from "react";
import styled from "styled-components";
import SenshiName from "./SenshiName";
import { getSenshiImageLocation } from "../../utils/getSenshiImageLocation";
import LazyImage from "../Loading/LazyImage";

interface Props {
  heroImage3: string;
  heroImage4: string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
  locationEN: string;
  locationJP: string;
  locationImage: string;
  mobile: boolean;
}

export const HeroContent: React.FC<Props> = ({
  heroImage3,
  heroImage4,
  heroNameEN1,
  heroNameEN2,
  heroNameJP1,
  heroNameJP2,
  locationEN,
  locationJP,
  locationImage,
  mobile,
}) => {
  const [transformation, setTransformation] = useState(false);

  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  const imageLocations = getSenshiImageLocation({ locationImage });

  return (
    <SenshiContainer>
      <SenshiName
        heroNameEN={transformation ? heroNameEN2 : heroNameEN1}
        heroNameJP={transformation ? heroNameJP2 : heroNameJP1}
        locationEN={locationEN}
        locationJP={locationJP}
        mobile={mobile}
        onClick={handleTransformation}
      />
      <SenshiImage
        src={heroImage3}
        alt={heroNameEN1}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        mobile={mobile}
        transformation={transformation}
        onClick={handleTransformation}
      />
      <SenshiImage
        src={heroImage4}
        alt={heroNameEN2}
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        mobile={mobile}
        transformation={!transformation}
        onClick={handleTransformation}
      />
    </SenshiContainer>
  );
};

//MARK: - Styled Components

interface StyledProps {
  locationLeft: boolean;
  locationRight: boolean;
  transformation: boolean;
  mobile: boolean;
}

const SenshiContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  line-height: 0.8;
  h1,
  h2 {
    background: linear-gradient(
      270deg,
      #ff0000,
      #eeff00,
      #18ff00,
      #0049ff,
      #fe00ff,
      #ffab00
    );
    background-size: 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.25rem transparent;
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

const SenshiImage = styled(LazyImage)<StyledProps>`
  display: ${(props) => (props.transformation ? "none" : "unset")};
  position: absolute;
  align-self: center;
  left: ${(props) => (props.locationLeft && !props.mobile ? 0 : "unset")};
  right: ${(props) => (props.locationRight && !props.mobile ? 0 : "unset")};
  scale: 1.1;
  height: 85vh;
  cursor: pointer;
`;
