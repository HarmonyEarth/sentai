import React from 'react';
import {
  BigText,
  Container,
  SmallText,
} from '../../styles/Series/Title.styles';

interface Props {
  mobile: boolean;
}

const Title: React.FC<Props> = ({ mobile }) => {
  return (
    <Container isMobile={mobile}>
      <SmallText isMobile={mobile}>SUPER SENTAI</SmallText>
      <BigText isMobile={mobile}>SERIES</BigText>
    </Container>
  );
};

export default Title;
