import React from 'react';
import { useParams } from 'react-router-dom';
import MemberFormSection from '../components/EditMember/MemberFormSection';

const EditMember = () => {
  const { id } = useParams();

  if (!id) {
    return <h1>Dpcument does not exist</h1>;
  }

  return (
    <>
      <MemberFormSection docId={id} />
    </>
  );
};

export default EditMember;
