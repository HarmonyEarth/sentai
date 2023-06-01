import React from 'react';
import { Team } from '../../models/team';
import { Grid } from '@mui/material';
import {
  TeamBioContainer,
  TeamBioImage,
  TeamBioNameEN,
  TeamBioNameJP,
  TeamBioYear,
} from '../../styles/TeamDetails/TeamBio.styles';

interface Props {
  team: Team;
  mobile: boolean;
}

const TeamBio: React.FC<Props> = ({ team, mobile }) => {
  return (
    <TeamBioContainer container mobile={mobile}>
      <Grid item xs={6} md={3} textAlign={'center'}>
        <TeamBioImage src={String(team.symbol)} mobile={mobile} />
      </Grid>
      <Grid item xs={6} md={3} textAlign={'center'}>
        <TeamBioImage src={String(team.logo)} mobile={mobile} />
      </Grid>
      <Grid
        container={mobile ? true : false}
        item
        md={4}
        direction={mobile ? 'row' : 'column'}
        textAlign={'center'}
      >
        <Grid item xs={mobile ? 6 : 12} md={4}>
          <TeamBioNameEN mobile={mobile}>{team.fullTeamNameEN}</TeamBioNameEN>
        </Grid>
        <Grid item xs={mobile ? 6 : 12} md={4}>
          <TeamBioNameJP mobile={mobile}>{team.fullTeamNameJP}</TeamBioNameJP>
        </Grid>
      </Grid>
      <Grid item justifyContent={'center'} textAlign={'center'} md={2}>
        <TeamBioYear mobile={mobile}>{team.year}</TeamBioYear>
      </Grid>
    </TeamBioContainer>
  );
};
export default TeamBio;
