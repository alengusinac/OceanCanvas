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
  padding: 10px;
  width: 200px;
  text-align: left;
  cursor: pointer;

  &:first-child {
    margin-top: 90px;
  }

  &:hover {
    background-color: #eee;
  }
`;
