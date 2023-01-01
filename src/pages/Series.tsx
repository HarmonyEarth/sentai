import React from 'react';

import HeroBanner from '../components/Series/HeroBanner';
import TeamSection from '../components/Series/TeamSection';
import { Member, Team } from '../models/team';

interface Props {
  teams: Team[];
  members: Member[];
}

const Series: React.FC<Props> = ({ teams, members }) => {
  return (
    <>
      <HeroBanner teams={teams} members={members} />
      <TeamSection teams={teams} />
    </>
  );
};

export default Series;
