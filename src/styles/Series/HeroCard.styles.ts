import styled from 'styled-components';

interface Props {
  randomColor: string;
  randomColor2: string;
  heroImage2: string;
  isMobile: boolean;
}
export const SenshiCard = styled.div<Props>`
  background: url(${(props) => props.heroImage2}),
    linear-gradient(
      ${Math.random()}turn,
      ${(props) => props.randomColor},
      ${(props) => props.randomColor2}
    );
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  background-size: 200%;
  height: ${(props) => (props.isMobile ? '200px' : '500px')};
  width: 100%;
`;
