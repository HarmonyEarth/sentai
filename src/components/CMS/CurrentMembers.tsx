import React from 'react';
import { Member } from '../../models/team';

interface Props {
  teamMember: Member;
}

const CurrentMembers: React.FC<Props> = ({ teamMember }) => {
  return <div>CurrentMembers</div>;
};

export default CurrentMembers;
