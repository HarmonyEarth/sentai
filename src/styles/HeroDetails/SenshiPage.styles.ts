import styled from 'styled-components';

interface Props {
  heroImage1: string;
}

export const SenshiContainer = styled.div``;

// export const SenshiBackgroundInner = styled.div`
//   /* background:
//   background-repeat: no-repeat;
//   background-position: top;
//   background-size: auto 100%;
//   height: 100%; */

//   ::before {
//     content: '';
//     display: inline-block;
//     width: 100%;
//     height: 100%;
//     bottom: 0;
//     position: absolute;
//     left: -84.5%;
//     top: 0;
//     -webkit-transform: skewX(-15deg);
//     transform: skewX(-15deg);
//     background: #fff;
//     z-index: 1;
//   }

//   ::after {
//     content: '';
//     display: inline-block;
//     width: 100%;
//     bottom: 0;
//     position: absolute;
//     right: -73.4%;
//     top: 0;
//     -webkit-transform: skewX(-15deg);
//     transform: skewX(-15deg);
//     background: #fff;
//   }
// `;

export const SenshiBackgroundImage = styled.div<Props>`
  background-image: url(${(props) => props.heroImage1});
  display: inline-block;
  width: 100%;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 100% auto;
  position: relative;

  ::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    bottom: 0;
    position: absolute;
    left: -84.5%;
    top: 0;
    -webkit-transform: skewX(-15deg);
    transform: skewX(-15deg);
    background: #fff;
    z-index: 1;
  }

  ::after {
    content: '';
    display: inline-block;
    width: 100%;
    bottom: 0;
    position: absolute;
    right: -73.4%;
    top: 0;
    -webkit-transform: skewX(-15deg);
    transform: skewX(-15deg);
    background: #fff;
  }
`;
