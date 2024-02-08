import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  @media (min-width: 900px) {
    max-width: 33%;
    height: 500px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
