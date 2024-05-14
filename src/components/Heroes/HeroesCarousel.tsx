import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import { Member, Team } from "../../types";
import useEmblaPrevNextButtons from "../../hooks/useEmblaPrevNextButtons";
import LazyImage from "../Loading/LazyImage";
import useEmblaDotButton from "../../hooks/useEmblaDotButton";
interface Props {
  team: Team;
  members: Member[];
}

const HeroesCarousel: React.FC<Props> = ({ members, team }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = useEmblaPrevNextButtons(emblaApi);

  const { onDotButtonClick, selectedIndex } = useEmblaDotButton(emblaApi);

  return (
    <Grid container>
      <Grid item md={6}>
        <h1>{team.fullTeamNameEN}</h1>
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          aria-label="Previous Hero"
        >
          Backward
        </button>
        {members.map((member, index) => (
          <LazyImage
            key={member.id}
            src={String(member.heroHelmet)}
            alt=""
            height={"50px"}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label="Next Hero"
        >
          Forward
        </button>
      </Grid>
      <Grid item md={6}>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {members.map((member) => (
                <EmblaSlide key={member.id}>
                  <Link to={`/${member.teamId}/${member.heroId}`}>
                    <LazyImage
                      src={String(member.heroImage3)}
                      alt={member.heroNameEN1}
                      height="100px"
                    />
                    <LazyImage
                      src={String(member.heroImage4)}
                      alt={member.heroNameEN2}
                      height="100px"
                    />
                  </Link>
                </EmblaSlide>
              ))}
            </EmblaContainer>
          </EmblaViewport>
        </Embla>
        {emblaApi && <p>{members[selectedIndex].heroNameEN1}</p>}
      </Grid>
    </Grid>
  );
};

export default HeroesCarousel;

//MARK: - Styled Components

const Embla = styled.section`
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 5rem;
  --slide-size: 100%;
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  /* margin-left: calc(var(--slide-spacing) * -1); */
`;

const EmblaSlide = styled.div`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  /* padding-left: var(--slide-spacing); */
  height: 10vh;
`;
