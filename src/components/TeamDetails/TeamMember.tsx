import React from 'react';
import {
  TeamMemberCard,
  TeamMemberStateImage,
} from '../../styles/TeamDetails/TeamMember.styles';

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
  const heroTransformed = true;
  return (
    <TeamMemberCard color={color} mobile={mobile}>
      <TeamMemberStateImage
        src={heroImage4}
        mobile={mobile}
        heroState={heroTransformed}
      />
      <TeamMemberStateImage
        src={heroImage3}
        mobile={mobile}
        heroState={!heroTransformed}
      />
    </TeamMemberCard>
  );
};

export default TeamMember;
