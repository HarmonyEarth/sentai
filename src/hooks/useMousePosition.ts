import { useState, useEffect } from "react";

interface Props {
  clientX: number;
  clientY: number;
}

const useMousePosition = () => {
  const [position, setPosition] = useState<Props>({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event: MouseEvent) => {
    setPosition({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;
