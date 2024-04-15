import React from "react";
import styled from "styled-components";

import { randomColor } from "../../utils/randomColor";
import LazyImage from "../Loading/LazyImage";

interface Props {
  year: number;
  shortTeamName: string;
  logo: string;
  symbol: string;
  mobile: boolean;
}

const TeamCard: React.FC<Props> = ({
  year,
  shortTeamName,
  logo,
  symbol,
  mobile,
}) => {
  return (
    <SeriesCard>
      <SeriesLeftSide mobile={mobile}>
        <SeriesYearText>{year}</SeriesYearText>
        <SeriesTeamText>{shortTeamName}</SeriesTeamText>
        <SeriesSymbol src={symbol} alt={`${shortTeamName} Symbol`} />
      </SeriesLeftSide>
      <SeriesLogo src={logo} alt={`${shortTeamName} Logo`} />
    </SeriesCard>
  );
};

export default TeamCard;

//MARK: - Styled Components

const SeriesCard = styled.div`
  max-width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90deg, black 50%, ${randomColor});
`;

const SeriesLeftSide = styled.div<{ mobile: boolean }>`
  width: 150px;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: ${(props) => (props.mobile ? "wrap" : "nowrap")};
`;

const SeriesYearText = styled.h1`
  font-size: 20px;
  z-index: 1;
  margin-right: 3px;
`;

const SeriesTeamText = styled.h1`
  font-size: 20px;
  z-index: 1;
  white-space: nowrap;
`;

const SeriesSymbol = styled(LazyImage)`
  position: absolute;
  width: 80px;
  height: auto;
  opacity: 0.5;
  filter: grayscale(1);
`;

const SeriesLogo = styled(LazyImage)`
  width: 150px;
`;
