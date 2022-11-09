import React from 'react';

import HeroBanner from '../components/Series/HeroBanner';
import TeamSection from '../components/Series/TeamSection';
import { Team } from '../models/team';

interface Props {
  teams: Team[];
}

const Series: React.FC<Props> = ({ teams }) => {
  return (
    <>
      <HeroBanner teams={teams} />
      <TeamSection teams={teams} />
    </>
  );
};

export default Series;
