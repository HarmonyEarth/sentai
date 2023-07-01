import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import { Link } from 'react-router-dom';
import {
  AllHeroesSwiper,
  HeroSlide,
} from '../../styles/HeroDetails/AllHeroes.styles';
import LazyImage from '../Loading/LazyImage';
import { Member } from '../../models/types';

interface Props {
  members: Member[];
}

const AllHeroes: React.FC<Props> = ({ members }) => {
  return (
    <AllHeroesSwiper
      slideToClickedSlide={true}
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={4}
      breakpoints={{
        200: { slidesPerView: 2.5 },
        370: { slidesPerView: 3.4 },
        480: { slidesPerView: 4.5 },
        640: { slidesPerView: 6.2 },
        768: { slidesPerView: 7.2 },
        856: { slidesPerView: 8.3 },
        1024: { slidesPerView: 10 },
        1280: { slidesPerView: 12.3 },
        1368: { slidesPerView: 14.6 },
        1640: { slidesPerView: 16.2 },
        2100: { slidesPerView: 21.2 },
        2400: { slidesPerView: 24.2 },
        2500: { slidesPerView: 28.4 },
      }}
    >
      {members.map((member) => (
        <SwiperSlide key={member.id}>
          <HeroSlide>
            <Link to={`/${member.teamId}/${member.heroId}`}>
              <LazyImage
                src={String(member.heroImage2)}
                alt={member.heroNameEN2}
                height="200px"
              />
            </Link>
          </HeroSlide>
        </SwiperSlide>
      ))}
    </AllHeroesSwiper>
  );
};

export default AllHeroes;
