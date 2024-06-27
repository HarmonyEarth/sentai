import React from "react";
import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition";

interface Props {
  visible: boolean;
}

const CustomCursor: React.FC<Props> = ({ visible }) => {
  const { clientX, clientY } = useMousePosition();
  return visible ? (
    <CursorContainer x={clientX} y={clientY}>
      Transform Hero
    </CursorContainer>
  ) : null;
};

export default CustomCursor;

//MARK: Styled Components

interface StyledProps {
  x: number;
  y: number;
}

const CursorContainer = styled.div<StyledProps>`
  pointer-events: none;
  position: fixed;
  top: ${(props) => props.y + 60}px;
  left: ${(props) => props.x + 60}px;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
`;
