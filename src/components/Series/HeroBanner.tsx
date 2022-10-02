import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard';
import { Member, Team } from '../../models/team';

interface Props {
  teams: Team[];
}

function shuffle(array: Member[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const HeroBanner: React.FC<Props> = ({ teams }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  let allTeamMembers: Member[] = [];

  teams.forEach((team) => {
    allTeamMembers.push(...team.teamMembers);
  });
  shuffle(allTeamMembers);
  // console.log('shuffe', allTeamMembers);
  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {allTeamMembers.slice(0, 3).map((teamMember) => (
          <Grid
            container
            item
            xs={4}
            sm={4}
            key={teamMember.heroId}
            component={Link}
            to={`/${teamMember.heroId}`}
          >
            <HeroCard heroImage2={String(teamMember.heroImage2)} />
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} md={8}>
        {allTeamMembers.slice(mobile ? -7 : 4, 10).map((teamMember) => (
          <Grid
            container
            item
            xs={3}
            sm={2}
            key={teamMember.heroId}
            component={Link}
            to={`/${teamMember.heroId}`}
          >
            <HeroCard heroImage2={String(teamMember.heroImage2)} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
