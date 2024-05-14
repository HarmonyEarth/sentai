import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyImage from "../Loading/LazyImage";
import { Team } from "../../types";
import { handleEmblaScrollClick } from "../../utils/handleEmblaScrollClick";

interface Props {
  teams: Team[];
}

const AllTeams: React.FC<Props> = ({ teams }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {teams.map((team, index) => (
            <EmblaSlide
              key={team.teamId}
              onClick={() => handleEmblaScrollClick(index, emblaApi)}
            >
              <Link to={`/${team.teamId}`}>
                <LazyImage
                  src={String(team.logo)}
                  alt={team.fullTeamNameEN}
                  height="100%"
                />
              </Link>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  );
};

export default AllTeams;

//MARK: - Styled Components

const Embla = styled.section`
  border-top: #000 1px solid;
  padding-top: 1.5rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 5rem;
  --slide-size: 30%;
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const EmblaSlide = styled.div`
  flex: 0 0 var(--slide-size);
  /* min-width: 0; */
  padding-left: var(--slide-spacing);
  height: 10vh;
`;
