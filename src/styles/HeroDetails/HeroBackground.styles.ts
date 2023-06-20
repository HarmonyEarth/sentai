import styled from 'styled-components';
import LazyImage from '../../components/Loading/LazyImage';

interface Props {
  color: string;
  mobile: boolean;
}

export const SenshiBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

export const SenshiBackgroundColor = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    transparent,
    ${(props) => props.color} 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: '';
    display: ${(props) => (props.mobile ? 'none' : 'unset')};
    position: absolute;
    top: 0;
    left: -84.5%;
    width: 100%;
    height: 100%;
    transform: skewX(-15deg);
    background: white;
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
  }
`;

export const SenshiBackgroundImage = styled(LazyImage)<{ mobile: boolean }>`
  position: fixed;
  top: 4px;
  z-index: -1;
  width: ${(props) => (props.mobile ? '100%' : '70%')};
  height: 114%;
  scale: 1.01;
`;

export const SenshiBackgroundBlur = styled.div<{ mobile: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  box-shadow: inset ${(props) => (props.mobile ? '0rem' : '30rem')} 0rem 200px
    20px white;

  z-index: -1;
`;
