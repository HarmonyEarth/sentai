import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { SenshiCard } from '../../styles/Series/HeroCard.styles';
import { randomColor, randomColor2 } from '../../utils/randomColor';
interface Props {
  heroImage2: string;
}

const HeroCard = ({ heroImage2 }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <SenshiCard
      randomColor={randomColor()}
      randomColor2={randomColor2()}
      heroImage2={heroImage2}
      isMobile={mobile}
    />
  );
};

export default HeroCard;
