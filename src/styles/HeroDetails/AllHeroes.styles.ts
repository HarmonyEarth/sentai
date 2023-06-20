import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const AllHeroesSwiper = styled(Swiper)`
  width: 100%;
`;

export const HeroSlide = styled.div`
  background-color: #000000;
  width: fit-content;
  height: 200px;
  width: 100px;

  img {
    min-height: 250px;
    width: 100%;
  }
`;
