import styled from 'styled-components';

interface Props {
  isMobile: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row-reverse')};
  background-color: black;
  color: white;
  align-items: flex-end;
  height: ${(props) => (props.isMobile ? 'auto' : '450px')};
  overflow: hidden;
`;

export const TextContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row-reverse')};
  align-items: flex-end;
  position: relative;
  width: ${(props) => !props.isMobile && '125px'};
`;

export const SmallText = styled.h2<Props>`
  font-size: ${(props) => (props.isMobile ? '1.5rem' : '2.6rem')};
  line-height: 1;
  white-space: nowrap;
  position: ${(props) => !props.isMobile && 'relative'};

  bottom: ${(props) => !props.isMobile && '88px'};
  left: ${(props) => !props.isMobile && '120px'};
  margin-top: ${(props) => props.isMobile && '-3px'};
  margin-bottom: ${(props) => props.isMobile && '-5px'};
  transform: ${(props) => !props.isMobile && 'rotate(90deg)'};
`;

export const BigText = styled.h1<Props>`
  font-size: ${(props) => (props.isMobile ? '5rem' : '9rem')};
  line-height: 1;

  position: ${(props) => !props.isMobile && 'relative'};

  bottom: ${(props) => !props.isMobile && '56px'};
  left: ${(props) => !props.isMobile && '428px'};

  margin-top: ${(props) => props.isMobile && '-10px'};
  margin-bottom: ${(props) => (props.isMobile ? '-3px' : 'none')};
  transform: ${(props) => !props.isMobile && 'rotate(90deg)'};
`;
