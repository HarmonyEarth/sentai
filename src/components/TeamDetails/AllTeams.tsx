import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import { Link } from 'react-router-dom';
import LazyImage from '../Loading/LazyImage';
import { Team } from '../../models/types';

interface Props {
  teams: Team[];
  mobile: boolean;
}

const AllTeams: React.FC<Props> = ({ teams, mobile }) => {
  return (
    <Swiper
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={mobile ? 200 : 0}
      slidesPerView={mobile ? 2.5 : 3.3}
    >
      {teams.map((team) => (
        <SwiperSlide key={team.teamId}>
          <Link to={`/${team.teamId}`}>
            <LazyImage
              src={String(team.logo)}
              alt={team.fullTeamNameEN}
              height={mobile ? '80px' : '150px'}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllTeams;
