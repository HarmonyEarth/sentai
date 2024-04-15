import React from "react";
import styled from "styled-components";
import LazyImage from "../Loading/LazyImage";
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

//MARK: - Styled Components

interface CardProps {
  color: string;
  mobile: boolean;
}

interface HeroFormProps {
  mobile: boolean;
  heroState: boolean;
}

const TeamMemberCard = styled.div<CardProps>`
  background: linear-gradient(
    180deg,
    transparent,
    ${(props) => props.color} 120%
  );
  background-size: contain;
  height: ${(props) => (props.mobile ? "15rem" : "37.5rem")};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TeamMemberStateImage = styled(LazyImage)<HeroFormProps>`
  z-index: -1;
  position: absolute;
  scale: ${(props) => (props.heroState === true ? 1.1 : "unset")};
  height: inherit;
  top: ${(props) => (props.heroState === true ? 0 : "unset")};
  bottom: ${(props) => (props.heroState === false ? 0 : "unset")};
  margin-top: ${(props) =>
    props.heroState === true ? (props.mobile ? "0.75rem" : "1.9rem") : "unset"};
  margin-bottom: ${(props) =>
    props.heroState === false ? (props.mobile ? "-4rem" : "-10rem") : "unset"};
`;
