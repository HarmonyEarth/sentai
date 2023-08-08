import styled from 'styled-components';
import LazyImage from '../../components/Loading/LazyImage';

interface Props {
  mobile: boolean;
}

export const SenshiBarTitleContainer = styled.div`
  display: flex;
  h2 {
    background: linear-gradient(
      270deg,
      #ff0000,
      #eeff00,
      #18ff00,
      #0049ff,
      #fe00ff,
      #ffffff,
      #ffab00
    );
    background-size: 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.05rem transparent;
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

export const SenshiBarText = styled.h2<Props>`
  text-align: center;
  margin: 0 auto;
  padding: 0;
  text-transform: uppercase;
  font-size: ${(props) => (props.mobile ? '1rem' : '1.5rem')};
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

export const SenshiBarLeftSymbol = styled(LazyImage)`
  max-height: 60px;
  max-width: 60px;
`;
