import React from 'react';
import { useParams } from 'react-router-dom';
import TeamFormSection from '../components/EditTeam/TeamFormSection';
import { Team } from '../models/team';

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
      <TeamFormSection docId={id} currentTeam={currentTeam} />
    </>
  );
};

export default EditTeam;
