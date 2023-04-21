import React from 'react';
import { useParams } from 'react-router-dom';
import MemberFormSection from '../components/EditMember/MemberFormSection';
import { Member, Team } from '../models/team';

interface Props {
  members: Member[];
  teams: Team[];
  mobile: boolean;
}

const EditMember: React.FC<Props> = ({ members, teams, mobile }) => {
  const { id } = useParams();

  if (!id) {
    return <h1>Document does not exist</h1>;
  }

  const currentMember = members.find((element) => element.id === id);

  if (!currentMember) {
    return <h1>Document does not exist</h1>;
  }

  return (
    <>
      <MemberFormSection
        docId={id}
        currentMember={currentMember}
        teams={teams}
        mobile={mobile}
      />
    </>
  );
};

export default EditMember;
