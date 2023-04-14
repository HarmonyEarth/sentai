import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard';
import { Member, Team } from '../../models/team';
import Title from './Title';
import { deepClone } from '../../utils/deepClone';
import { shuffle } from '../../utils/shuffle';

interface Props {
  teams: Team[];
  members: Member[];
  mobile: boolean;
}

const HeroBanner: React.FC<Props> = ({ teams, members, mobile }) => {
  const shuffledMembers = shuffle(deepClone(members));

  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {shuffledMembers.slice(0, mobile ? 3 : 2).map((shuffledMember) => (
          <Grid
            container
            item
            xs={4}
            sm={4}
            key={shuffledMember.heroId}
            component={Link}
            to={`/${shuffledMember.teamId}/${shuffledMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(shuffledMember.heroImage2)}
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
        {shuffledMembers.slice(mobile ? -4 : -6).map((shuffledMember) => (
          <Grid
            container
            item
            xs={3}
            md={2}
            key={shuffledMember.heroId}
            component={Link}
            to={`/${shuffledMember.teamId}/${shuffledMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(shuffledMember.heroImage2)}
              mobile={mobile}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
