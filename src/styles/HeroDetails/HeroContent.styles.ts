import styled from 'styled-components';

interface Props {
  mobile: boolean;
  locationLeft: boolean;
  locationRight: boolean;
}

export const SenshiContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  line-height: 0.8;
  h1,
  h2 {
    background: linear-gradient(
      270deg,
      #ff0000,
      #eeff00,
      #18ff00,
      #0049ff,
      #fe00ff,
      #ffab00
    );
    background-size: 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.25rem transparent;
    -webkit-animation: SentaiGradient 55s ease infinite;
    -moz-animation: SentaiGradient 55s ease infinite;
    animation: SentaiGradient 55s ease infinite;
  }

  @-webkit-keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 51%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes SentaiGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 51%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const SenshiImage = styled.img<Props>`
  position: absolute;
  align-self: center;
  left: ${(props) => (props.locationLeft ? 0 : 'unset')};
  right: ${(props) => (props.locationRight ? 0 : 'unset')};
  scale: 1.1;
  z-index: 0;
  height: ${(props) => (props.mobile ? '640px' : '740px')};
  bottom: 1.6rem;
`;
