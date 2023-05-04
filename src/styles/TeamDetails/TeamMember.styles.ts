import styled from 'styled-components';

interface Props {
  heroImage3: string;
  heroImage4: string;
  color: string;
  mobile: boolean;
}

export const TeamMemberCard = styled.div<Props>`
  background: linear-gradient(
      180deg,
      transparent,
      ${(props) => props.color} 120%
    ),
    url(${(props) => props.heroImage3}), url(${(props) => props.heroImage4});
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.mobile ? 'top, 50% 4rem' : 'top, 50% 10rem'};
  background-size: contain;
  background-size: auto 110%, auto 100%;
  height: ${(props) => (props.mobile ? '15rem' : '37.5rem')};
  width: 100%;
`;
