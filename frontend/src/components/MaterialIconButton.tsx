import React, { ReactNode, memo } from 'react';
import { IconButton } from './styled/IconButton.styled';

interface MaterialIconButtonProps {
  icon: ReactNode;
  onClick: React.MouseEventHandler;
  $size?: number;
  testId?: string;
  ariaLabel?: string;
}

const MaterialIconButton = ({
  icon,
  onClick,
  $size,
  testId,
  ariaLabel,
}: MaterialIconButtonProps) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      data-testid={testId}
      $size={$size}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default memo(MaterialIconButton);
