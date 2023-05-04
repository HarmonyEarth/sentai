import React from 'react';
import { useParams } from 'react-router-dom';
import TeamBanner from '../components/TeamDetails/TeamBanner';
import { Member, Team } from '../models/team';
import { Helmet } from 'react-helmet-async';

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
          rel="shortcut icon"
          href={String(currentTeam.symbol)}
          type="image/x-icon"
        />
      </Helmet>
      <TeamBanner members={currentMembers} mobile={mobile} />
    </>
  );
};

export default TeamDetails;
