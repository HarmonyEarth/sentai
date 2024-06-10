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
      {/* <div style={{ height: "400px", backgroundColor: "red", zIndex: 1 }} />  Insert gallery carousel here*/}
    </SenshiContainer>
  );
};

// MARK: - Styled Components

interface StyledProps {
  locationLeft: boolean;
  locationRight: boolean;
  transformation: boolean;
  mobile: boolean;
}

const SenshiContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 100vh;
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
