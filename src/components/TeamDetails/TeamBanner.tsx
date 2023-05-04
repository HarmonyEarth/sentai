import React from 'react';
import { Member } from '../../models/team';
import { Grid } from '@mui/material';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
import { teamMemberGridSlots } from '../../utils/teamMemberGridSlots';

interface Props {
  members: Member[];
  mobile: boolean;
}

const TeamBanner: React.FC<Props> = ({ members, mobile }) => {
  const allGridInfo = teamMemberGridSlots({
    arrayData: members,
  });
  console.log(allGridInfo?.grid3Members);
  return (
    <Grid container>
      {!mobile && allGridInfo?.grid1Members && (
        <Grid container item columns={mobile ? 12 : members.length}>
          {allGridInfo?.grid1Members.map((member) => (
            <Grid
              item
              md={allGridInfo.grid1.md}
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
                heroImage3={String(member.heroImage3)}
                heroImage4={String(member.heroImage4)}
                color={member.color}
                mobile={mobile}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {mobile && allGridInfo?.grid3Members && (
        <Grid container item columns={mobile ? 12 : members.length}>
          {allGridInfo?.grid3Members.map((member) => (
            <Grid
              item
              xs={allGridInfo.grid3.xs}
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
      )}
    </Grid>
  );
};

export default TeamBanner;
