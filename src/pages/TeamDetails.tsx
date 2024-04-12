import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TeamBio from "../components/TeamDetails/TeamBio";
import TeamBanner from "../components/TeamDetails/TeamBanner";
import AllTeams from "../components/TeamDetails/AllTeams";
import ScrollToTop from "../components/HeroDetails/ScrollToTop";
import { Member, Team } from "../types";

interface Props {
  teams: Team[];
  members: Member[];
  mobile: boolean;
}

const TeamDetails: React.FC<Props> = ({ teams, members, mobile }) => {
  const { teamId } = useParams();

  if (!teamId) {
    return <h1>Team does not exist</h1>;
  }

  const currentTeam = teams.find((element) => element.teamId === teamId);

  const currentMembers = members.filter((member) => member.teamId === teamId);

  if (!currentTeam) {
    return <h1>Team does not exist</h1>;
  }

  if (!currentMembers) {
    return <h1>No members exist</h1>;
  }

  return (
    <>
      <Helmet>
        <title>{currentTeam.fullTeamNameEN} - Super Sentai</title>
        <link
          rel="icon"
          href={String(currentTeam.symbol)}
          type="image/webp"
          sizes="16x16"
        />
      </Helmet>
      <ScrollToTop />
      <TeamBanner members={currentMembers} mobile={mobile} />
      <TeamBio team={currentTeam} mobile={mobile} />
      <AllTeams teams={teams} mobile={mobile} />
    </>
  );
};

export default TeamDetails;
