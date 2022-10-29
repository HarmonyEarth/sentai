import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
  const { teamId } = useParams();
  return (
    <>
      <h1>{teamId}</h1>
    </>
  );
};

export default TeamDetails;
