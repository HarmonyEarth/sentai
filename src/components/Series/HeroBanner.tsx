import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard';
import { Member, Team } from '../../models/team';
import Title from './Title';

interface Props {
  teams: Team[];
}

interface AllTeamMembersType extends Member {
  teamId: string;
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
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  // const tabletView = useMediaQuery(theme.breakpoints.down('md'));

  const allTeamMembers: AllTeamMembersType[] = [];

  teams.forEach((team) => {
    team.teamMembers?.forEach((member) => {
      const linkedMember = { ...member, teamId: team.teamId };
      allTeamMembers.push(linkedMember);
    });
  });

  shuffle(allTeamMembers);

  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {allTeamMembers.slice(0, mobile ? 3 : 2).map((teamMember) => (
          <Grid
            container
            item
            xs={4}
            sm={4}
            key={teamMember.heroId}
            component={Link}
            to={`/${teamMember.teamId}/${teamMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(teamMember.heroImage2)}
              mobile={mobile}
            />
          </Grid>
        ))}
        {!mobile && (
          <Grid item xs={4}>
            <Title mobile={mobile} />
          </Grid>
        )}
      </Grid>

      {mobile && (
        <Grid item xs={12}>
          <Title mobile={mobile} />
        </Grid>
      )}
      <Grid container item xs={12} md={8}>
        {allTeamMembers.slice(mobile ? -5 : 4, 10).map((teamMember) => (
          <Grid
            container
            item
            xs={3}
            md={2}
            key={teamMember.heroId}
            component={Link}
            to={`/${teamMember.teamId}/${teamMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(teamMember.heroImage2)}
              mobile={mobile}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
