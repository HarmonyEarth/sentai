import styled from 'styled-components';

export const SenshiContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SenshiNameEN = styled.h1`
  line-height: 0.7;
  margin: 0;
  margin-top: -0.2rem;
  font-size: 6rem;
  display: block;
  z-index: -1;
`;
export const SenshiNameJP = styled.h2`
  line-height: 0.7;
  margin: 0;
  margin-top: 0.8rem;
  font-size: 5rem;
  display: block;
  z-index: -1;
`;

export const SenshiImage = styled.img`
  margin-top: -4.5rem;
  align-self: flex-end;
  scale: 1.1;
  z-index: -1;
  max-height: 1200px;
`;
