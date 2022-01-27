import styled from "styled-components";

interface Props {
  randomColor: string;
  randomColor2: string;
  heroImageUrl: string;
}

export const SenshiCard = styled.div<Props>`
  background: url(${(props) => props.heroImageUrl}),
    linear-gradient(
      ${Math.random()}turn,
      ${(props) => props.randomColor},
      ${(props) => props.randomColor2}
    );
  background-repeat: no-repeat;
  background-position: center top;
  height: 400px;
  width: 100%;
`;
