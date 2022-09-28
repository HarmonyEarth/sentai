import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import turbo from '../../assets/data';
import TeamCard from './TeamCard';

const list: number[] = [];
for (let i = 0; i < 11; i++) {
  list.push(i);
}

const TeamSection = () => {
  return (
    <Grid container>
      {list.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Link}
          to={`/team/${turbo.teamId}`}
          sx={{ textDecoration: 'none' }}
          key={item}
        >
          <TeamCard
            logo={turbo.logo}
            symbol={turbo.symbol}
            year={turbo.year}
            shortTeamName={turbo.shortTeamName}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
