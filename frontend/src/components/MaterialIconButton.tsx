import React, { ReactNode } from 'react';
import { IconButton } from './styled/IconButton.styled';

interface MaterialIconButtonProps {
  icon: ReactNode;
  onClick: React.MouseEventHandler;
  $size?: number;
  testId?: string;
}

const MaterialIconButton = ({
  icon,
  onClick,
  $size,
  testId,
}: MaterialIconButtonProps) => {
  return (
    <IconButton data-testid={testId} $size={$size} onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default MaterialIconButton;
