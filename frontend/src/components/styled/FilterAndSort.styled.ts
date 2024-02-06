import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const StyledFilterAndSort = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  svg {
    font-size: 2rem;
  }

  select {
    border: none;
    text-align: right;
    background-color: ${colors.white};
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    border-top: 1px solid ${colors.lightGrey};
    border-bottom: 1px solid ${colors.lightGrey};
    padding: 0 30px;
  }
`;

export const FirstFlexItem = styled.div`
  position: relative;
  border-top: 1px solid ${colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;

  & > button {
    height: 50px;
    flex: 1;

    &:first-child {
      border-right: 1px solid ${colors.lightGrey};
    }
  }

  @media (min-width: 1000px) {
    border: none;
    width: 50%;

    & > button {
      &:last-child {
        border-right: 1px solid ${colors.lightGrey};
      }
    }
  }
`;

export const SecondFlexItem = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: space-between;
  padding-left: 10px;

  & > div {
    display: flex;
  }

  @media (min-width: 1000px) {
    border: none;
    width: 50%;
  }
`;
