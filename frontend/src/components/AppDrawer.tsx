import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { memo, ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
import MaterialIconButton from './MaterialIconButton';
import { DrawerHeader } from './styled/Header.styled';
import { colors } from '@/styles/variables';

interface Props {
  anchor: DrawerProps['anchor'];
  open: boolean;
  onClose: () => void;
  closeAriaLabel: string;
  closeTestId?: string;
  children: ReactNode;
}

const AppDrawer = ({
  anchor,
  open,
  onClose,
  closeAriaLabel,
  closeTestId,
  children,
}: Props) => {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      ModalProps={{ disableScrollLock: true }}
      sx={{
        zIndex: 1500,
        '& .MuiDrawer-paper': { backgroundColor: colors.white },
      }}
    >
      <DrawerHeader>
        <MaterialIconButton
          ariaLabel={closeAriaLabel}
          testId={closeTestId}
          onClick={onClose}
          icon={<MdClose />}
        />
      </DrawerHeader>
      {children}
    </Drawer>
  );
};

export default memo(AppDrawer);
