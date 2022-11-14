import React from 'react';
import { useParams } from 'react-router-dom';
import TeamFormSection from '../components/EditTeam/TeamFormSection';

const EditTeam = () => {
  const { id } = useParams();

  return (
    <>
      <TeamFormSection />
    </>
  );
};

export default EditTeam;
