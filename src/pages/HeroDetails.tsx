import { useMediaQuery, useTheme } from '@mui/material';
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
}

const HeroDetails: React.FC<Props> = ({ members, teams }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

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
          mobile={mobile}
        />
      </HeroDetailsContainer>
      <AllHeroes members={members} mobile={mobile} />
    </>
  );
};

export default HeroDetails;
