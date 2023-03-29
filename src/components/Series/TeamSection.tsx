import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../../models/team';
import TeamCard from './TeamCard';

interface Props {
  teams: Team[];
}

const TeamSection: React.FC<Props> = ({ teams }) => {
  return (
    <Grid container>
      {teams.map((team) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Link}
          to={`/team/${team.teamId}`}
          sx={{ textDecoration: 'none' }}
          key={team.teamId}
        >
          <TeamCard
            logo={String(team.logo)}
            symbol={String(team.symbol)}
            year={Number(team.year)}
            shortTeamName={team.shortTeamName}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
