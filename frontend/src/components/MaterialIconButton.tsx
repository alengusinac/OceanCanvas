import styled from 'styled-components';
import { MaterialIcon } from './Wrappers';
import React from 'react';

interface MaterialIconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler;
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const MaterialIconButton = ({ icon, onClick }: MaterialIconButtonProps) => {
  return (
    <Button onClick={onClick}>
      <MaterialIcon className="material-symbols-outlined">{icon}</MaterialIcon>
    </Button>
  );
};

export default MaterialIconButton;
