import React from "react";
import styled, { keyframes } from "styled-components";
import {
  getSenshiNameLocation,
  modifyLocation,
} from "../../utils/getSenshiNameLocation";

interface Props {
  heroNameEN: string;
  heroNameJP: string;
  locationEN: string;
  locationJP: string;
  mobile: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | undefined;
}

const SenshiName: React.FC<Props> = ({
  heroNameEN,
  heroNameJP,
  locationEN,
  locationJP,
  mobile,
  onClick,
}) => {
  const modifiedLocationEN = mobile
    ? modifyLocation({ location: locationEN })
    : locationEN;
  const modifiedLocationJP = mobile
    ? modifyLocation({ location: locationJP })
    : locationJP;

  const mainTextLocation = getSenshiNameLocation({
    location: modifiedLocationEN,
  });

  const secondaryTextLocation = getSenshiNameLocation({
    location: modifiedLocationJP,
  });

  const margin = locationEN === locationJP ? "96px" : "6rem";

  return (
    <SenshiNameContainer mobile={mobile} onClick={mobile ? onClick : undefined}>
      <SenshiNameTextContainer
        top={mainTextLocation.top}
        bottom={mainTextLocation.bottom}
        left={mainTextLocation.left}
        right={mainTextLocation.right}
        marginBottom={margin}
      >
        <SenshiNameMainText mobile={mobile}>{heroNameEN}</SenshiNameMainText>
      </SenshiNameTextContainer>
      <SenshiNameTextContainer
        top={secondaryTextLocation.top}
        bottom={secondaryTextLocation.bottom}
        left={secondaryTextLocation.left}
        right={secondaryTextLocation.right}
        marginTop={margin}
      >
        <SenshiNameSecondaryText mobile={mobile}>
          {heroNameJP}
        </SenshiNameSecondaryText>
      </SenshiNameTextContainer>
    </SenshiNameContainer>
  );
};

export default SenshiName;

//MARK: Styled Components

interface StyledProps {
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
  marginTop?: string;
  marginBottom?: string;
}

const SentaiGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SenshiNameContainer = styled.div<{ mobile: boolean }>`
  position: relative;
  height: 80rem;
  z-index: ${(props) => (props.mobile ? 1 : 0)};
  cursor: ${(props) => props.mobile && "pointer"};

  h2 {
    margin: 0;
    display: block;
    padding: 10px 2px;
  }

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
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.25rem transparent;
    animation: ${SentaiGradient} 55s ease infinite;
  }
`;

const SenshiNameTextContainer = styled.div<StyledProps>`
  position: absolute;
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
  top: ${(props) => (props.top ? "5px" : "unset")};
  bottom: ${(props) => (props.bottom ? "5px" : "unset")};
  left: ${(props) => (props.left ? 0 : "unset")};
  right: ${(props) => (props.right ? 0 : "unset")};
`;

const SenshiNameMainText = styled.h2<{ mobile: boolean }>`
  font-size: ${(props) => (props.mobile ? "2.8rem" : "6rem")};
`;

const SenshiNameSecondaryText = styled.h2<{ mobile: boolean }>`
  font-size: ${(props) => (props.mobile ? "2.5rem" : "5rem")};
`;
