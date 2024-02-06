import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  background-color: #fff;
  width: 200px;
  padding: 20px;
  top: 50px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 20px 30px;
  width: 300px;
  text-align: left;
  cursor: pointer;

  &:first-child {
    margin-top: 90px;

    @media (min-width: 1000px) {
      margin-top: 100px;
    }
  }

  &:hover {
    background-color: #eee;
  }
`;
