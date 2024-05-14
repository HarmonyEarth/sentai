import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Member } from "../../types";
import useEmblaCarousel from "embla-carousel-react";
import LazyImage from "../Loading/LazyImage";
import { handleEmblaScrollClick } from "../../utils/handleEmblaScrollClick";

interface Props {
  members: Member[];
}

const AllHeroes: React.FC<Props> = ({ members }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {members.map((member, index) => (
            <EmblaSlide
              key={member.id}
              onClick={() => handleEmblaScrollClick(index, emblaApi)}
            >
              <HeroSlide>
                <Link to={`/${member.teamId}/${member.heroId}`}>
                  <LazyImage
                    src={String(member.heroImage2)}
                    alt={member.heroNameEN2}
                    height="200px"
                  />
                </Link>
              </HeroSlide>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  );
};

export default AllHeroes;

//MARK: - Styled Components

const Embla = styled.section`
  border-top: #000 1px solid;
  padding-top: 1.5rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 0.3rem;
  --slide-size: 6.25rem;
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
  min-width: 0;
  padding-left: var(--slide-spacing);
`;

const HeroSlide = styled.div`
  background-color: #000000;
  width: fit-content;
  height: 200px;
  width: 6.25rem;

  img {
    min-height: 250px;
    width: 100%;
  }
`;
