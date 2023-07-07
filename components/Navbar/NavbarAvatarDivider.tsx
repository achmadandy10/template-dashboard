import { MenuDivider } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarAvatarDividerProps = ComponentProps<typeof MenuDivider>;

const NavbarAvatarDivider: FC<NavbarAvatarDividerProps> = ({
  ...props
}): JSX.Element => {
  return <MenuDivider {...props} />;
};

export default NavbarAvatarDivider;
