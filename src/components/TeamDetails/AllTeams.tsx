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
}

const AllTeams: React.FC<Props> = ({ teams }) => {
  return (
    <Swiper
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={3}
      slidesPerView={3.3}
    >
      {teams.map((team) => (
        <SwiperSlide key={team.teamId}>
          <TeamSlide>
            <Link to={`/${team.teamId}`}>
              <LazyImage
                src={String(team.logo)}
                alt={team.fullTeamNameEN}
                height="150px"
              />
            </Link>
          </TeamSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllTeams;
