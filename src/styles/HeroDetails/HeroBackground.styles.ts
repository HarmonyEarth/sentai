import styled from 'styled-components';

interface Props {
  heroImage1: string;
  color: string;
  mobile: boolean;
}

export const SenshiBackgroundContainer = styled.div`
  overflow-x: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

export const SenshiBackgroundImage = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, ${(props) => props.color} 100%),
    url(${(props) => props.heroImage1});
  filter: sepia() hue-rotate(190deg) saturate(500%);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  ::before {
    content: '';
    display: ${(props) => (props.mobile ? 'none' : 'inline-block')};
    position: absolute;
    top: 0;
    left: -84.5%;
    width: 100%;
    height: 100%;
    transform: skewX(-15deg);
    background: white;
    z-index: 1;
  }

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -73%;
    width: 100%;
    transform: skewX(-15deg);
    background: white;
    /*   z-index: 1; */
  }
`;
