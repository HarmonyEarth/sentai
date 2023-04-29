import React from 'react';

import HeroBanner from '../components/Series/HeroBanner';
import TeamSection from '../components/Series/TeamSection';
import { Member, Team } from '../models/team';
import { Helmet } from 'react-helmet-async';
import Favicon from '../../favicon.ico';

interface Props {
  teams: Team[];
  members: Member[];
  mobile: boolean;
}

const Series: React.FC<Props> = ({ teams, members, mobile }) => {
  return (
    <>
      <Helmet>
        <title>Super Sentai Series</title>
        <meta
          name="description"
          content="View over 45 years of Super Sentai history"
        />
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      </Helmet>
      <HeroBanner teams={teams} members={members} mobile={mobile} />
      <TeamSection teams={teams} mobile={mobile} />
    </>
  );
};

export default Series;
