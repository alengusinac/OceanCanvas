import { colors, fonts } from '@/styles/variables';
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

  & > div > button svg {
    font-size: 2rem;
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
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  & > div {
    display: flex;
    gap: 10px;
  }

  @media (min-width: 1000px) {
    border: none;
    width: 50%;
    padding: 10px 0;
  }
`;

export const ProductCount = styled.p`
  font-family: ${fonts.body};
  font-size: 0.85rem;
  color: ${colors.darkBlue};
  opacity: 0.7;
  margin: 0;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  select {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    background-color: ${colors.white};
    font-family: ${fonts.body};
    font-size: 0.8rem;
    color: ${colors.darkBlue};
    padding: 8px 28px 8px 12px;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      border-color: ${colors.aquaBlue};
    }

    &:focus {
      outline: none;
      border-color: ${colors.aquaBlue};
      box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.2);
    }

    option {
      background-color: ${colors.white};
      color: ${colors.darkBlue};
      font-family: ${fonts.body};
    }

    option:checked,
    option:hover {
      background-color: ${colors.aquaBlue};
      color: ${colors.white};
    }
  }

  svg {
    position: absolute;
    right: 8px;
    font-size: 1rem;
    color: ${colors.darkBlue};
    opacity: 0.6;
    pointer-events: none;
  }
`;
