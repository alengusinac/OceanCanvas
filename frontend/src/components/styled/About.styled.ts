import styled from 'styled-components';

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 350px;

  img {
    width: 150px;
    position: relative;

    &:nth-child(1) {
      left: 10px;
    }

    &:nth-child(2) {
      top: 120px;
      left: -10px;
    }
  }
`;
