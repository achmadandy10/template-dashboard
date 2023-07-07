import { MenuItem } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarAvatarItemProps = ComponentProps<typeof MenuItem>;

const NavbarAvatarItem: FC<NavbarAvatarItemProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <MenuItem fontSize={'sm'} {...props}>
      {children}
    </MenuItem>
  );
};

export default NavbarAvatarItem;
