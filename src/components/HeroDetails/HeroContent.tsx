import React, { useState } from 'react';
import styled from 'styled-components';
import SenshiName from './SenshiName';
import { getSenshiImageLocation } from '../../utils/getSenshiImageLocation';
import LazyImage from '../Loading/LazyImage';
import { Member } from '../../types';
import CustomCursor from './CustomCursor';
interface Props {
  member: Member;
  mobile: boolean;
}

const HeroContent: React.FC<Props> = ({ member, mobile }) => {
  const [transformation, setTransformation] = useState(false);
  const [cursor, setCursor] = useState(false);
  const handleTransformation = () => {
    setTransformation((prev) => !prev);
  };

  const {
    locationImage,
    heroNameEN1,
    heroNameEN2,
    heroNameJP1,
    heroNameJP2,
    locationEN,
    locationJP,
    heroImage3,
    heroImage4,
  } = member;

  const imageLocations = getSenshiImageLocation({ locationImage });

  const handleMouseEnterLeave = () => {
    setCursor((prev) => !prev);
  };

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
      <SenshiImageContainer
        locationLeft={imageLocations.left}
        locationRight={imageLocations.right}
        mobile={mobile}
        onMouseEnter={handleMouseEnterLeave}
        onMouseLeave={handleMouseEnterLeave}
      >
        <SenshiImage
          src={String(heroImage3)}
          alt={heroNameEN1}
          transformation={transformation}
          onClick={handleTransformation}
        />
        <SenshiImage
          src={String(heroImage4)}
          alt={heroNameEN2}
          transformation={!transformation}
          onClick={handleTransformation}
        />
        {!mobile && cursor && <CustomCursor />}
      </SenshiImageContainer>
      {/* <div style={{ height: "400px", backgroundColor: "red", zIndex: 1 }} /> 
         Placeholder for Hero Gallery  */}
    </SenshiContainer>
  );
};

export default HeroContent;

// MARK: - Styled Components

interface StyledProps {
  locationLeft: boolean;
  locationRight: boolean;
  mobile: boolean;
}

const SenshiContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 100vh;
`;

const SenshiImageContainer = styled.div<StyledProps>`
  position: absolute;
  align-self: center;
  left: ${(props) => (props.locationLeft && !props.mobile ? 0 : 'unset')};
  right: ${(props) => (props.locationRight && !props.mobile ? 0 : 'unset')};
  height: 85vh;
`;

const SenshiImage = styled(LazyImage)<{ transformation: boolean }>`
  display: ${(props) => (props.transformation ? 'none' : 'unset')};
  scale: 1.1;
  height: 100%;
  cursor: pointer;
`;
