import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  SeriesCard,
  SeriesLeftSide,
  SeriesLogo,
  SeriesSymbol,
  SeriesTeamText,
  SeriesYearText,
} from "../../styles/Series/TeamCard.styles";
import { randomColor } from "../../utils/randomColor";

interface Props {
  year: number;
  shortTeamName: string;
  logo: string;
  symbol: string;
}

const TeamCard = ({ year, shortTeamName, logo, symbol }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
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
