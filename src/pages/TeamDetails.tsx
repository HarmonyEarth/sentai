import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Member, Team } from '../models/team';
import { Helmet } from 'react-helmet-async';
import Spinner from '../components/Loading/Spinner';

const TeamBanner = lazy(() => import('../components/TeamDetails/TeamBanner'));

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
      <Suspense fallback={<Spinner />}>
        <TeamBanner members={currentMembers} mobile={mobile} />
      </Suspense>
    </>
  );
};

export default TeamDetails;
