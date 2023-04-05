import React from 'react';
import {
  SeriesCard,
  SeriesLeftSide,
  SeriesLogo,
  SeriesSymbol,
  SeriesTeamText,
  SeriesYearText,
} from '../../styles/Series/TeamCard.styles';
import { randomColor } from '../../utils/randomColor';

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
    <SeriesCard randomColor={randomColor()}>
      <SeriesLeftSide isMobile={mobile}>
        <SeriesYearText>{year}</SeriesYearText>
        <SeriesTeamText>{shortTeamName}</SeriesTeamText>
        <SeriesSymbol src={symbol} />
      </SeriesLeftSide>
      <SeriesLogo src={logo} />
    </SeriesCard>
  );
};

export default TeamCard;
