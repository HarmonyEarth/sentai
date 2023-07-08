import React, { useState } from 'react';
import { A11y } from 'swiper';
import 'swiper/css';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';
import { SenshiSwiper } from '../../styles/Heroes/HeroesSwiper.styles';
import { Member, Team } from '../../models/types';
import { Grid } from '@mui/material';

import LazyImage from '../Loading/LazyImage';
import { Link } from 'react-router-dom';

interface Props {
  team: Team;
  members: Member[];
}

const HeroesSwiper: React.FC<Props> = ({ team, members }) => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Grid container>
      <h1>{team.fullTeamNameEN}</h1>
      <SenshiSwiper
        loop={true}
        slidesPerView={1}
        modules={[A11y]}
        a11y={{
          prevSlideMessage: 'Previous Hero',
          nextSlideMessage: 'Next Hero',
        }}
        onInit={(swiperInstance) => setSwiper((prev) => swiperInstance)}
        onRealIndexChange={(swiperInstance) =>
          setActiveIndex((prev) => swiperInstance.realIndex)
        }
      >
        {members.map((member) => (
          <SwiperSlide key={member.id}>
            <Link to={`/${member.teamId}/${member.heroId}`}>
              <LazyImage src={String(member.heroHelmet)} height={'100'} />
            </Link>
            <p>{member.heroNameEN1}</p>
          </SwiperSlide>
        ))}
      </SenshiSwiper>
    </Grid>
  );
};

export default HeroesSwiper;
