import React, { ReactNode } from 'react';
import { IconButton } from './styled/IconButton.styled';

interface MaterialIconButtonProps {
  icon: ReactNode;
  onClick: React.MouseEventHandler;
}

const MaterialIconButton = ({ icon, onClick }: MaterialIconButtonProps) => {
  return <IconButton onClick={onClick}>{icon}</IconButton>;
};

export default MaterialIconButton;
