import styled from 'styled-components';

interface Props {
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
  marginTop?: string;
  marginBottom?: string;
}

export const SenshiNameContainer = styled.div<{ mobile: boolean }>`
  position: relative;
  height: 100vh;
  h2 {
    margin: 0;
    display: block;
    padding: 10px 0px;
  }
  z-index: ${(props) => (props.mobile ? 1 : 0)};
  cursor: ${(props) => props.mobile && 'pointer'};
`;

export const SenshiNameTextContainer = styled.div<Props>`
  position: absolute;
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
  top: ${(props) => (props.top ? '5px' : 'unset')};
  bottom: ${(props) => (props.bottom ? '5px' : 'unset')};
  left: ${(props) => (props.left ? 0 : 'unset')};
  right: ${(props) => (props.right ? 0 : 'unset')};
`;

export const SenshiNameMainText = styled.h2<{ mobile: boolean }>`
  font-size: ${(props) => (props.mobile ? '2.8rem' : '6rem')};
`;

export const SenshiNameSecondaryText = styled.h2<{ mobile: boolean }>`
  font-size: ${(props) => (props.mobile ? '2.5rem' : '5rem')};
`;
