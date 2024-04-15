import React from "react";
import styled from "styled-components";
import { randomColor, randomColor2 } from "../../utils/randomColor";
import LazyImage from "../Loading/LazyImage";
interface Props {
  heroImage2: string;
  heroNameEN2: string;
  mobile: boolean;
}

const HeroCard: React.FC<Props> = ({ heroImage2, heroNameEN2, mobile }) => {
  return (
    <SenshiCard mobile={mobile}>
      <SenshiCardImage src={heroImage2} mobile={mobile} alt={heroNameEN2} />
    </SenshiCard>
  );
};

export default HeroCard;

//MARK: - Styled Components

const SenshiCard = styled.div<{ mobile: boolean }>`
  background: linear-gradient(
    ${Math.random()}turn,
    ${randomColor},
    ${randomColor2}
  );
  height: ${(props) => (props.mobile ? "200px" : "450px")};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SenshiCardImage = styled(LazyImage)<{ mobile: boolean }>`
  position: absolute;
  height: inherit;
  scale: 1.4;
  top: ${(props) => (props.mobile ? "2.5rem" : "5.6rem")};
`;
