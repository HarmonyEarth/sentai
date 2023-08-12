import React from 'react';
import {
  SenshiCard,
  SenshiCardImage,
} from '../../styles/Series/HeroCard.styles';
import { randomColor, randomColor2 } from '../../utils/randomColor';
interface Props {
  heroImage2: string;
  heroNameEN2: string;
  mobile: boolean;
}

const HeroCard: React.FC<Props> = ({ heroImage2, heroNameEN2, mobile }) => {
  return (
    <SenshiCard
      randomColor={randomColor()}
      randomColor2={randomColor2()}
      mobile={mobile}
    >
      <SenshiCardImage src={heroImage2} mobile={mobile} alt={heroNameEN2} />
    </SenshiCard>
  );
};

export default HeroCard;
