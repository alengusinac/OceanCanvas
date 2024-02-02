import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const StyledFilterAndSort = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 2rem;
  }

  select {
    border: none;
    text-align: right;
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
`;
