import { MenuGroup } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarAvatarItemGroupProps = ComponentProps<typeof MenuGroup>;

const NavbarAvatarItemGroup: FC<NavbarAvatarItemGroupProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <MenuGroup fontSize={'sm'} {...props}>
      {children}
    </MenuGroup>
  );
};

export default NavbarAvatarItemGroup;
