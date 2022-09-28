import styled from 'styled-components';

interface Props {
  randomColor: string;
}

interface MobileProps {
  isMobile: boolean;
}

export const SeriesCard = styled.div<Props>`
  max-width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    90deg,
    black 50%,
    ${(props) => props.randomColor}
  );
`;

export const SeriesLeftSide = styled.div<MobileProps>`
  width: 150px;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: ${(props) => (props.isMobile ? 'wrap' : 'nowrap')};
`;

export const SeriesYearText = styled.h1`
  font-size: 20px;
  z-index: 1;
  margin-right: 3px;
`;

export const SeriesTeamText = styled.h1`
  font-size: 20px;
  z-index: 1;
`;

export const SeriesSymbol = styled.img`
  position: absolute;
  width: 80px;
  height: auto;
  opacity: 0.5;
  filter: grayscale(1);
`;

export const SeriesLogo = styled.img`
  max-width: 150px;
  height: 80px;
`;
