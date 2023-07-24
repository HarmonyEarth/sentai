import React from 'react';
import {
  TeamMemberCard,
  TeamMemberStateImage,
} from '../../styles/TeamDetails/TeamMember.styles';

interface Props {
  heroImage3: string;
  heroImage4: string;
  heroNameEN1: string;
  heroNameEN2: string;
  color: string;
  mobile: boolean;
}

const TeamMember: React.FC<Props> = ({
  heroImage3,
  heroImage4,
  heroNameEN1,
  heroNameEN2,
  color,
  mobile,
}) => {
  const heroTransformed = true;
  return (
    <TeamMemberCard color={color} mobile={mobile}>
      <TeamMemberStateImage
        src={heroImage4}
        mobile={mobile}
        heroState={heroTransformed}
        alt={heroNameEN2}
      />
      <TeamMemberStateImage
        src={heroImage3}
        mobile={mobile}
        heroState={!heroTransformed}
        alt={heroNameEN1}
      />
    </TeamMemberCard>
  );
};

export default TeamMember;
