import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Team } from '../../models/team';
import { FreeMode } from 'swiper';
import { Link } from 'react-router-dom';
import LazyImage from '../Loading/LazyImage';
import { TeamSlide } from '../../styles/TeamDetails/AllTeams.styles';

interface Props {
  teams: Team[];
  mobile: boolean;
}

const AllTeams: React.FC<Props> = ({ teams, mobile }) => {
  return (
    <Swiper
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={4}
      slidesPerView={mobile ? 2.5 : 3.3}
    >
      {teams.map((team) => (
        <SwiperSlide key={team.teamId}>
          <Link to={`/${team.teamId}`}>
            <LazyImage
              src={String(team.logo)}
              alt={team.fullTeamNameEN}
              height={mobile ? '40px' : '150px'}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllTeams;
