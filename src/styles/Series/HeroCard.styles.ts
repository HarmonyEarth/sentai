import styled from 'styled-components';
import LazyImage from '../../components/Loading/LazyImage';

interface Props {
  randomColor: string;
  randomColor2: string;
  mobile: boolean;
}
export const SenshiCard = styled.div<Props>`
  background: linear-gradient(
    ${Math.random()}turn,
    ${(props) => props.randomColor},
    ${(props) => props.randomColor2}
  );
  height: ${(props) => (props.mobile ? '200px' : '450px')};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const SenshiCardImage = styled(LazyImage)<{ mobile: boolean }>`
  position: absolute;
  height: inherit;
  scale: 1.4;
  top: ${(props) => (props.mobile ? '2.5rem' : '5.6rem')};
`;
