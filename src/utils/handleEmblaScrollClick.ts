import { EmblaCarouselType } from "embla-carousel";

export const handleEmblaScrollClick = (
  index: number,
  emblaApi: EmblaCarouselType | undefined
) => {
  if (!emblaApi) return;
  emblaApi.scrollTo(index);
};
