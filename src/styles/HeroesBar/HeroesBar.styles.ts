import styled from 'styled-components';

interface Props {
  mobile: boolean;
}

export const SenshiBarTitleContainer = styled.div`
  display: flex;
`;

export const SenshiBarText = styled.h2`
  margin: 0 auto;
  padding: 0;
  text-transform: uppercase;
`;

export const SenshiBarSpan = styled.span<Props>`
  display: ${(props) => (props.mobile ? 'block' : 'inline-block')};
  color: ${(props) => (props.mobile ? '#FFFFFF' : '#000000')};
  margin-top: -0.5rem;
  font-size: 4rem;
`;

export const SenshiBar = styled.div<Props>`
  max-width: 100%;
  height: 50px;
  background-color: black;
  margin-top: ${(props) => (props.mobile ? '-0.9rem' : '-1rem')};
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p,
  h3 {
    color: #fff;
  }
`;

export const SenshiBarLeft = styled.div`
  min-width: 0; /*fixes this bar from pushing the right side out for some reason*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const SenshiBarLeftSymbol = styled.img`
  height: 100%;
  width: auto;
`;
