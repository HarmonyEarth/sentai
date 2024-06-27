import React from "react";
import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition";

const CustomCursor = () => {
  const { clientX, clientY } = useMousePosition();
  return (
    <CursorContainer x={clientX} y={clientY}>
      Transform Hero
    </CursorContainer>
  );
};

export default CustomCursor;

//MARK: - Styled Components

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
