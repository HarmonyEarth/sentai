import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import HeroBackground from "../components/HeroDetails/HeroBackground";
import { HeroContent } from "../components/HeroDetails/HeroContent";
import HeroesBar from "../components/HeroesBar/HeroesBar";
import ScrollToTop from "../components/HeroDetails/ScrollToTop";
import { heroColor } from "../utils/heroColor";
import { sortMembersByYear } from "../utils/sortMembersByYear";

import { Member, Team } from "../types";
import AllHeroes from "../components/HeroDetails/AllHeroes";

interface Props {
  members: Member[];
  teams: Team[];
  mobile: boolean;
}

const HeroDetails: React.FC<Props> = ({ members, teams, mobile }) => {
  const { teamId, heroId } = useParams();

  if (!heroId) {
    return <h1>Hero does not exist</h1>;
  }
  const currentMember = members.find((element) => element.heroId === heroId);

  if (!currentMember) {
    return <h1>Hero does not exist or is incomplete</h1>;
  }

  if (!teamId) {
    return <h1>Team does not exist</h1>;
  }
  const currentTeam = teams.find((element) => element.teamId === teamId);

  if (!currentTeam) {
    return <h1>Team does not exist or is incomplete</h1>;
  }

  const membersByYear = useMemo(
    () => sortMembersByYear({ members, teams }),
    [members, teams]
  );

  const metaDescription = `${currentMember.heroNameEN1} / ${currentMember.heroNameEN2} 
  from ${currentTeam.year}'s ${currentTeam.fullTeamNameEN}`;

  return (
    <>
      <Helmet>
        <title>
          {currentMember.heroNameEN1} / {currentMember.heroNameEN2} -{" "}
          {currentTeam.fullTeamNameEN}
        </title>
        <meta name="description" content={metaDescription} />
        <link
          rel="icon"
          href={String(currentMember.heroHelmet)}
          type="image/webp"
          sizes="16x16"
        />
      </Helmet>
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
          locationImage={currentMember.locationImage}
          mobile={mobile}
        />

        <AllHeroes members={membersByYear} />
      </HeroDetailsContainer>
    </>
  );
};

export default HeroDetails;

interface PreviewProps {
  currentMember: Member;
  mobile: boolean;
}

export const PreviewHeroDetails: React.FC<PreviewProps> = ({
  currentMember,
  mobile,
}) => {
  return (
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
        locationImage={currentMember.locationImage}
        mobile={mobile}
      />
    </HeroDetailsContainer>
  );
};

//MARK: - Styled Components

const HeroDetailsContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
