import React from "react";
import { Member, Team } from "../types";
import { Helmet } from "react-helmet-async";
import { siteFavIcon } from "../constants";
import HeroesCarousel from "../components/Heroes/HeroesCarousel";
import HeroesBar from "../components/HeroesBar/HeroesBar";

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
      <HeroesBar mobile={mobile} />
      {teams.map((team) => (
        <HeroesCarousel
          members={members.filter((member) => member.teamId === team.teamId)}
          team={team}
          key={team.teamId}
        />
      ))}
    </>
  );
};

export default Heroes;
