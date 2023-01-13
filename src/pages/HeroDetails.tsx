import React from 'react';
import { useParams } from 'react-router-dom';
import SenshiCarouselSection from '../components/HeroDetails/SenshiCarouselSection';
import SenshiFactSection from '../components/HeroDetails/SenshiFactSection';
import SenshiGallery from '../components/HeroDetails/SenshiGallery';
import HeroesBar from '../components/HeroesBar/HeroesBar';

import { Member, Team } from '../models/team';
import { SenshiContainer } from '../styles/HeroDetails/SenshiPage.styles';

interface Props {
  members: Member[];
  teams: Team[];
}

const HeroDetails: React.FC<Props> = ({ members, teams }) => {
  const { heroId } = useParams();

  if (!heroId) {
    return <h1>Document does not exist</h1>;
  }

  const currentMember = members.find((element) => element.heroId === heroId);

  if (!currentMember) {
    return <h1>Member does not exist</h1>;
  }
  const currentTeam = teams.find(
    (element) => element.teamId === currentMember.teamId
  );

  if (!currentMember) {
    return <h1>Document does not exist</h1>;
  }
  return (
    <SenshiContainer>
      <HeroesBar />
      <SenshiGallery />
      <SenshiFactSection />
      <SenshiCarouselSection />
    </SenshiContainer>
  );
};

export default HeroDetails;
