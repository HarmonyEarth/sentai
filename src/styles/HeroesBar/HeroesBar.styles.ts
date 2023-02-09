import styled from 'styled-components';

interface Props {
  mobile: boolean;
}

export const SenshiBarContainer = styled.div`
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
