import styled from 'styled-components';

export const HeroesBarContainer = styled.div`
  width: 100vw;
`;

export const HeroesBarTitleContainer = styled.div`
  display: flex;
`;

export const HeroesBarTitleText = styled.h2`
  margin: 0 auto;
  padding: 0;
`;

export const HeroesBarTitleSpan = styled.span`
  font-size: 4rem;
`;

export const HeroesBarBlock = styled.div`
  max-width: 100%;
  height: 50px;
  background-color: black;
  margin-top: -1rem;
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3,
  p {
    color: white;
  }
`;

export const HeroesBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const HeroesBarSymbol = styled.img`
  height: 100%;
  width: auto;
`;

export const HeroesBarRight = styled.div``;
