import styled from 'styled-components';

interface Props {
  randomColor: string;
  randomColor2: string;
  heroImage2: string;
  mobile: boolean;
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
  background-size: auto 140%;
  height: ${(props) => (props.mobile ? '200px' : '450px')};
  width: 100%;
`;
