import React from 'react';
import { useParams } from 'react-router-dom';
import AllHeroes from '../components/HeroDetails/AllHeroes';
import HeroBackground from '../components/HeroDetails/HeroBackground';
import { HeroContent } from '../components/HeroDetails/HeroContent';
import HeroesBar from '../components/HeroesBar/HeroesBar';
import ScrollToTop from '../components/HeroDetails/ScrollToTop';

import { Member, Team } from '../models/team';
import { HeroDetailsContainer } from '../styles/HeroDetails/HeroDetails.styles';
import { heroColor } from '../utils/heroColor';

interface Props {
  members: Member[];
  teams: Team[];
  mobile: boolean;
}

const HeroDetails: React.FC<Props> = ({ members, teams, mobile }) => {
  const { heroId } = useParams();

  if (!heroId) {
    return <h1>Hero does not exist</h1>;
  }

  const currentMember = members.find((element) => element.heroId === heroId);

  if (!currentMember) {
    return <h1>Member does not exist or is incomplete</h1>;
  }
  const currentTeam = teams.find(
    (element) => element.teamId === currentMember.teamId
  );

  if (!currentTeam) {
    return <h1>Team does not exist</h1>;
  }

  type MembersByYearType = Member & {
    year: string;
  };

  const membersByYear: MembersByYearType[] = [];

  members.forEach((member) => {
    const grabTeam = teams.find((element) => element.teamId === member.teamId);
    if (grabTeam) {
      const updatedMember = { ...member, year: grabTeam.year };
      return membersByYear.push(updatedMember);
    }
  });

  membersByYear.sort((a, b) => Number(a.year) - Number(b.year));

  return (
    <>
      <ScrollToTop />
      <HeroDetailsContainer>
        <HeroBackground
          heroImage1={String(currentMember.heroImage1)}
          color={heroColor(currentMember.color)}
          mobile={mobile}
        />
        <HeroesBar
          heroSymbol={String(currentMember.heroSymbol)}
          heroNameEN1={currentMember.heroNameEN1}
          heroNameEN2={currentMember.heroNameEN2}
          mobile={mobile}
        />
        <HeroContent
          heroImage3={String(currentMember.heroImage3)}
          heroImage4={String(currentMember.heroImage4)}
          heroNameEN1={currentMember.heroNameEN1}
          heroNameEN2={currentMember.heroNameEN2}
          heroNameJP1={currentMember.heroNameJP1}
          heroNameJP2={currentMember.heroNameJP2}
          locationEN={currentMember.locationEN}
          locationJP={currentMember.locationJP}
          mobile={mobile}
        />
      </HeroDetailsContainer>
      <AllHeroes members={membersByYear} mobile={mobile} />
    </>
  );
};

export default HeroDetails;
