import React from "react";
import Grid from "@mui/material/Grid/Grid";
import styled from "styled-components";
import { Team } from "../../types";
import LazyImage from "../Loading/LazyImage";

interface Props {
  team: Team;
  mobile: boolean;
}

const TeamBio: React.FC<Props> = ({ team, mobile }) => {
  return (
    <TeamBioContainer container mobile={mobile} mb={5}>
      <Grid item xs={6} md={3}>
        <TeamBioImage
          src={String(team.symbol)}
          mobile={mobile}
          alt={`${team.shortTeamName} Symbol`}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TeamBioImage
          src={String(team.logo)}
          mobile={mobile}
          alt={`${team.shortTeamName} Logo`}
        />
      </Grid>
      <Grid container item md={4} direction={mobile ? "row" : "column"}>
        <Grid item xs={mobile ? 6 : 12} md={4}>
          <TeamBioNameEN mobile={mobile}>{team.fullTeamNameEN}</TeamBioNameEN>
        </Grid>
        <Grid item xs={mobile ? 6 : 12} md={4}>
          <TeamBioNameJP mobile={mobile}>{team.fullTeamNameJP}</TeamBioNameJP>
        </Grid>
      </Grid>
      <Grid item md={2}>
        <TeamBioYear mobile={mobile}>{team.year}</TeamBioYear>
      </Grid>
    </TeamBioContainer>
  );
};
export default TeamBio;

//MARK: - Styled Components

interface StyledProps {
  mobile: boolean;
}

const TeamBioContainer = styled(Grid)<StyledProps>`
  align-items: ${(props) => props.mobile && "center"};
  justify-content: ${(props) => props.mobile && "center"};
  text-align: center;
`;

const TeamBioImage = styled(LazyImage)<StyledProps>`
  max-width: ${(props) => (props.mobile ? "10rem" : "17rem")};
  height: ${(props) => (props.mobile ? "6rem" : "8rem")};
`;

const TeamBioNameEN = styled.h1<StyledProps>`
  line-height: ${(props) => (props.mobile ? 1 : 0.8)};
  font-size: ${(props) => (props.mobile ? "1.5rem" : "2rem")};
`;

const TeamBioNameJP = styled(TeamBioNameEN)``;

const TeamBioYear = styled(TeamBioNameEN)``;
