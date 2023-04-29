import React from 'react';
import { Member } from '../../models/team';
import { Grid } from '@mui/material';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';

interface Props {
  members: Member[];
  mobile: boolean;
}

const TeamBanner: React.FC<Props> = ({ members, mobile }) => {
  return (
    <Grid container>
      {members.map((member) => (
        <Grid
          item
          xs={4}
          sm={4}
          md={2}
          key={member.id}
          component={Link}
          to={`/${member.teamId}/${member.heroId}`}
        >
          <TeamMember
            heroImage3={String(member.heroImage3)}
            heroImage4={String(member.heroImage4)}
            color={member.color}
            mobile={mobile}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamBanner;
