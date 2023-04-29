import React from 'react';
import { TeamMemberCard } from '../../styles/TeamDetails/TeamMember.styles';

interface Props {
  heroImage3: string;
  heroImage4: string;
  color: string;
  mobile: boolean;
}

const TeamMember: React.FC<Props> = ({
  heroImage3,
  heroImage4,
  color,
  mobile,
}) => {
  return (
    <TeamMemberCard
      heroImage3={heroImage3}
      heroImage4={heroImage4}
      color={color}
      mobile={mobile}
    />
  );
};

export default TeamMember;
