import React, { ReactNode } from 'react';
import { IconButton } from './styled/IconButton.styled';

interface MaterialIconButtonProps {
  icon: ReactNode;
  onClick: React.MouseEventHandler;
  $size?: number;
}

const MaterialIconButton = ({
  icon,
  onClick,
  $size,
}: MaterialIconButtonProps) => {
  return (
    <IconButton $size={$size} onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default MaterialIconButton;
