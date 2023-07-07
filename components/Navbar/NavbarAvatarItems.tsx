import { MenuList } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarAvatarItemsProps = ComponentProps<typeof MenuList>;

const NavbarAvatarItems: FC<NavbarAvatarItemsProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <MenuList {...props}>{children}</MenuList>;
};

export default NavbarAvatarItems;
