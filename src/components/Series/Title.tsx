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
    <Container mobile={mobile}>
      <TextContainer mobile={mobile}>
        <SmallText mobile={mobile}>SUPER SENTAI</SmallText>
        <BigText mobile={mobile}>SERIES</BigText>
      </TextContainer>
    </Container>
  );
};

export default Title;
