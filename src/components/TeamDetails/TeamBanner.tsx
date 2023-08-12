import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
import { teamMemberGridSlots } from '../../utils/teamMemberGridSlots';
import { Member } from '../../models/types';

interface Props {
  members: Member[];
  mobile: boolean;
}

const TeamBanner: React.FC<Props> = ({ members, mobile }) => {
  const allGridInfo = teamMemberGridSlots({
    arrayData: members,
  });
  return (
    <Grid container>
      {!mobile && (
        <Grid container item columns={members.length}>
          {members.map((member) => (
            <Grid
              item
              md={1}
              key={member.id}
              component={Link}
              to={`/${member.teamId}/${member.heroId}`}
            >
              <TeamMember
                heroNameEN1={member.heroNameEN1}
                heroNameEN2={member.heroNameEN2}
                heroImage3={String(member.heroImage3)}
                heroImage4={String(member.heroImage4)}
                color={member.color}
                mobile={mobile}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {mobile && allGridInfo?.grid1Members && (
        <Grid container item columns={mobile ? 12 : members.length}>
          {allGridInfo?.grid1Members.map((member) => (
            <Grid
              item
              xs={allGridInfo.grid1.xs}
              key={member.id}
              component={Link}
              to={`/${member.teamId}/${member.heroId}`}
            >
              <TeamMember
                heroNameEN1={member.heroNameEN1}
                heroNameEN2={member.heroNameEN2}
                heroImage3={String(member.heroImage3)}
                heroImage4={String(member.heroImage4)}
                color={member.color}
                mobile={mobile}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {mobile && allGridInfo?.grid2Members && (
        <Grid container item columns={mobile ? 12 : members.length}>
          {allGridInfo?.grid2Members.map((member) => (
            <Grid
              item
              xs={allGridInfo.grid2.xs}
              key={member.id}
              component={Link}
              to={`/${member.teamId}/${member.heroId}`}
            >
              <TeamMember
                heroNameEN1={member.heroNameEN1}
                heroNameEN2={member.heroNameEN2}
                heroImage3={String(member.heroImage3)}
                heroImage4={String(member.heroImage4)}
                color={member.color}
                mobile={mobile}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default TeamBanner;
