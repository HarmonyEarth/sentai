import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import {
  TeamBioContainer,
  TeamBioImage,
  TeamBioNameEN,
  TeamBioNameJP,
  TeamBioYear,
} from '../../styles/TeamDetails/TeamBio.styles';
import { Team } from '../../models/types';

interface Props {
  team: Team;
  mobile: boolean;
}

const TeamBio: React.FC<Props> = ({ team, mobile }) => {
  return (
    <TeamBioContainer container mobile={mobile}>
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
      <Grid
        container={mobile ? true : false}
        item
        md={4}
        direction={mobile ? 'row' : 'column'}
      >
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
