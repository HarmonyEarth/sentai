import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Member } from '../../models/team';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import { Link } from 'react-router-dom';

interface Props {
  members: Member[];
  mobile: boolean;
}

const AllHeroes: React.FC<Props> = ({ members, mobile }) => {
  return (
    <Swiper
      slidesPerView={mobile ? 6 : 13}
      freeMode={true}
      modules={[FreeMode]}
    >
      {members.map((member) => (
        <SwiperSlide key={member.id}>
          <Link to={`/${member.teamId}/${member.heroId}`}>
            <img
              src={String(member.heroImage2)}
              alt={member.heroNameEN2}
              height="200px"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllHeroes;
