import React from 'react';
import { useParams } from 'react-router-dom';
import TeamFormSection from '../components/EditTeam/TeamFormSection';

const EditTeam = () => {
  const { id } = useParams();

  if (!id) {
    return <h1>Document does not exist</h1>;
  }

  return (
    <>
      <TeamFormSection docId={id} />
    </>
  );
};

export default EditTeam;
