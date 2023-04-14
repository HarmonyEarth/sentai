import React from 'react';

import HeroBanner from '../components/Series/HeroBanner';
import TeamSection from '../components/Series/TeamSection';
import { Member, Team } from '../models/team';

interface Props {
  teams: Team[];
  members: Member[];
  mobile: boolean;
}

const Series: React.FC<Props> = ({ teams, members, mobile }) => {
  return (
    <>
      <HeroBanner teams={teams} members={members} mobile={mobile} />
      <TeamSection teams={teams} mobile={mobile} />
    </>
  );
};

export default Series;
