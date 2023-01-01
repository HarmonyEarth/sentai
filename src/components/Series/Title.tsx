import React from 'react';
import {
  BigText,
  TextContainer,
  SmallText,
  Container,
} from '../../styles/Series/Title.styles';

interface Props {
  mobile: boolean;
}

const Title: React.FC<Props> = ({ mobile }) => {
  return (
    <Container isMobile={mobile}>
      <TextContainer isMobile={mobile}>
        <SmallText isMobile={mobile}>SUPER SENTAI</SmallText>
        <BigText isMobile={mobile}>SERIES</BigText>
      </TextContainer>
    </Container>
  );
};

export default Title;
