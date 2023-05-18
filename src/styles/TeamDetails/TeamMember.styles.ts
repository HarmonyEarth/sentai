import styled from 'styled-components';

interface CardProps {
  color: string;
  mobile: boolean;
}

interface FormProps {
  mobile: boolean;
  heroState: boolean;
}

export const TeamMemberCard = styled.div<CardProps>`
  background: linear-gradient(
    180deg,
    transparent,
    ${(props) => props.color} 120%
  );
  background-size: contain;
  height: ${(props) => (props.mobile ? '15rem' : '37.5rem')};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TeamMemberStateImage = styled.img<FormProps>`
  z-index: -1;
  position: absolute;
  scale: ${(props) => (props.heroState === true ? 1.1 : 'unset')};
  height: inherit;
  top: ${(props) => (props.heroState === true ? 0 : 'unset')};
  bottom: ${(props) => (props.heroState === false ? 0 : 'unset')};
  margin-top: ${(props) =>
    props.heroState === true ? (props.mobile ? '0.75rem' : '1.9rem') : 'unset'};
  margin-bottom: ${(props) =>
    props.heroState === false ? (props.mobile ? '-4rem' : '-10rem') : 'unset'};
`;
