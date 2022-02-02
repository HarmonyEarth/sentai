import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  randomColor: string;
  randomColor2: string;
  heroImage2Url: string;
  isMobile: boolean;
}
export const SenshiCard = styled(Link)<Props>`
  background: url(${(props) => props.heroImage2Url}),
    linear-gradient(
      ${Math.random()}turn,
      ${(props) => props.randomColor},
      ${(props) => props.randomColor2}
    );
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 140%;
  height: ${(props) => (props.isMobile ? "200px" : "500px")};
  width: 100%;
`;
