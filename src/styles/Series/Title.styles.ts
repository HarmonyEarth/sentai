import styled from 'styled-components';

interface Props {
  mobile: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row-reverse')};
  background-color: black;
  color: white;
  align-items: flex-end;
  height: ${(props) => (props.mobile ? 'auto' : '450px')};
  overflow: hidden;
`;

export const TextContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row-reverse')};
  align-items: flex-end;
  position: relative;
  width: ${(props) => !props.mobile && '125px'};
`;

export const SmallText = styled.h2<Props>`
  font-size: ${(props) => (props.mobile ? '1.5rem' : '2.6rem')};
  line-height: 1;
  white-space: nowrap;
  position: ${(props) => !props.mobile && 'relative'};

  bottom: ${(props) => !props.mobile && '88px'};
  left: ${(props) => !props.mobile && '120px'};
  margin-top: ${(props) => props.mobile && '-3px'};
  margin-bottom: ${(props) => props.mobile && '-5px'};
  transform: ${(props) => !props.mobile && 'rotate(90deg)'};
`;

export const BigText = styled.h1<Props>`
  font-size: ${(props) => (props.mobile ? '5rem' : '9rem')};
  line-height: 1;

  position: ${(props) => !props.mobile && 'relative'};

  bottom: ${(props) => !props.mobile && '56px'};
  left: ${(props) => !props.mobile && '428px'};

  margin-top: ${(props) => props.mobile && '-10px'};
  margin-bottom: ${(props) => (props.mobile ? '-3px' : 'none')};
  transform: ${(props) => !props.mobile && 'rotate(90deg)'};
`;
