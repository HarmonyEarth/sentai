import styled from 'styled-components';

interface Props {
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
  marginTop?: string;
}

export const SenshiNameContainer = styled.div<{ mobile: boolean }>`
  position: relative;
  height: 100vh;
  h2 {
    margin: 0;
    position: relative;
    display: block;
    z-index: -1;
    height: ${(props) => (props.mobile ? '150px' : '80px')};
    padding: 10px 0px;
  }
`;

export const SenshiNameTextContainer = styled.div<Props>`
  position: absolute;
  margin-top: ${(props) => props.marginTop || 0};
  top: ${(props) => (props.top ? '5px' : 'unset')};
  bottom: ${(props) => (props.bottom ? '5px' : 'unset')};
  left: ${(props) => (props.left ? 0 : 'unset')};
  right: ${(props) => (props.right ? 0 : 'unset')};
`;

export const SenshiNameMainText = styled.h2`
  font-size: 6rem;
`;

export const SenshiNameSecondaryText = styled.h2`
  font-size: 5rem;
`;
