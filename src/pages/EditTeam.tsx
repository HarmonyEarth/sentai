import React from 'react';
import { useParams } from 'react-router-dom';
import TeamFormSection from '../components/EditTeam/TeamFormSection';
import { Team } from '../models/team';
import { Helmet } from 'react-helmet-async';
import { siteFavIcon } from '../utils/constants';

interface Props {
  teams: Team[];
}

const EditTeam: React.FC<Props> = ({ teams }) => {
  const { id } = useParams();

  if (!id) {
    return <h1>Document does not exist</h1>;
  }

  const currentTeam = teams.find((element) => element.id === id);

  if (!currentTeam) {
    return <h1>Document does not exist</h1>;
  }

  return (
    <>
      <Helmet>
        <title>Edit Team: {currentTeam.fullTeamNameEN}</title>
        <link rel="shortcut icon" href={siteFavIcon} type="image/x-icon" />
      </Helmet>
      <TeamFormSection docId={id} currentTeam={currentTeam} />
    </>
  );
};

export default EditTeam;
