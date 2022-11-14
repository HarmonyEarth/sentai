import React from 'react';
import { useParams } from 'react-router-dom';
import MemberFormSection from '../components/EditMember/MemberFormSection';

const EditMember = () => {
  const { id } = useParams();

  return (
    <>
      <MemberFormSection />
    </>
  );
};

export default EditMember;
