import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import HeroBackground from "../components/HeroDetails/HeroBackground";
import HeroContent from "../components/HeroDetails/HeroContent";
import HeroesBar from "../components/HeroesBar/HeroesBar";
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

  const currentMember = members.find((element) => element.heroId === heroId);
  const currentTeam = teams.find((element) => element.teamId === teamId);

  const membersByYear = useMemo(
    () => sortMembersByYear({ members, teams }),
    [members, teams]
  );

  if (!heroId || !currentMember) {
    return <h1>Hero does not exist or is incomplete</h1>;
  }

  if (!teamId || !currentTeam) {
    return <h1>Team does not exist or is incomplete</h1>;
  }

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
        <HeroContent member={currentMember} mobile={mobile} />
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
      <HeroContent member={currentMember} mobile={mobile} />
    </HeroDetailsContainer>
  );
};

//MARK: - Styled Components

const HeroDetailsContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
