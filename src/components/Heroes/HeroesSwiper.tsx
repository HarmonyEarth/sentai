import React, { useState } from "react";
import { A11y } from "swiper";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import styled from "styled-components";

import Grid from "@mui/material/Grid/Grid";
import { Link } from "react-router-dom";
import LazyImage from "../Loading/LazyImage";
import { Member, Team } from "../../types";

interface Props {
  team: Team;
  members: Member[];
}

const HeroesSwiper: React.FC<Props> = ({ team, members }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Grid container>
      <Grid item md={6}>
        <h1>{team.fullTeamNameEN}</h1>
        <button onClick={() => swiper?.slidePrev()}>Backward</button>
        {members.map((member, index) => (
          <LazyImage
            key={member.id}
            src={String(member.heroHelmet)}
            alt=""
            height={"50px"}
            onClick={() => swiper?.slideTo(index)}
          />
        ))}
        <button onClick={() => swiper?.slideNext()}>Forward</button>
      </Grid>
      <Grid item md={6}>
        <SenshiSwiper
          loop={true}
          slidesPerView={1}
          modules={[A11y]}
          a11y={{
            prevSlideMessage: "Previous Hero",
            nextSlideMessage: "Next Hero",
          }}
          onInit={(swiperInstance) => setSwiper((prev) => swiperInstance)}
          onRealIndexChange={(swiperInstance) =>
            setActiveIndex((prev) => swiperInstance.realIndex)
          }
        >
          {members.map((member) => (
            <SwiperSlide>
              <Link to={`/${member.teamId}/${member.heroId}`}>
                <SenshiSwiperStateImage
                  src={String(member.heroImage3)}
                  alt={member.heroNameEN1}
                />
                <SenshiSwiperStateImage
                  src={String(member.heroImage4)}
                  alt={member.heroNameEN2}
                />
              </Link>
            </SwiperSlide>
          ))}
        </SenshiSwiper>
        <p>{members[activeIndex].heroNameEN1}</p>
      </Grid>
    </Grid>
  );
};

export default HeroesSwiper;

//MARK: - Styled Components

const SenshiSwiper = styled(Swiper)``;

const SenshiSwiperStateImage = styled(LazyImage)`
  height: 100px;
`;
