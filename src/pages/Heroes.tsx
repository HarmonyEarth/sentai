import React from 'react';
import { Member, Team } from '../models/types';
import { Helmet } from 'react-helmet-async';
import { siteFavIcon } from '../utils/constants';
import HeroesSwiper from '../components/Heroes/HeroesSwiper';

interface Props {
  teams: Team[];
  members: Member[];
  mobile: boolean;
}

const Heroes: React.FC<Props> = ({ teams, members, mobile }) => {
  return (
    <>
      <Helmet>
        <title>Heroes - Super Sentai Series</title>
        <meta
          name="description"
          content="View heroes from over 45 years of Super Sentai history"
        />
        <link rel="icon" href={siteFavIcon} type="image/x-icon" sizes="16x16" />
      </Helmet>

      {teams.map((team) => (
        <HeroesSwiper
          members={members.filter((member) => member.teamId === team.teamId)}
          team={team}
        />
      ))}
    </>
  );
};

export default Heroes;
