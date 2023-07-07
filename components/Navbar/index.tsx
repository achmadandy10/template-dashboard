import { Box, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import NavbarAvatar from './NavbarAvatar';
import NavbarAvatarDivider from './NavbarAvatarDivider';
import NavbarAvatarItem from './NavbarAvatarItem';
import NavbarAvatarItemGroup from './NavbarAvatarItemGroup';
import NavbarAvatarItems from './NavbarAvatarItems';
import { useNavbarContext } from './NavbarContext';
import NavbarItem from './NavbarItem';
import NavbarItemGroup from './NavbarItemGroup';
import NavbarItems from './NavbarItems';
import NavbarSearch from './NavbarSearch';
import NavbarToggleButton from './NavbarToggleButton';

type NavbarComponentProps = ComponentProps<typeof Box>;

const NavbarComponent: FC<NavbarComponentProps> = ({
  children,
  ...props
}): JSX.Element => {
  const { isShort } = useNavbarContext();
  return (
    <Box
      as={'nav'}
      aria-label={'Navbar'}
      position={'fixed'}
      zIndex={999}
      transition={'ease'}
      transitionDuration={'0.3s'}
      width={isShort ? 'calc(100% - 4.5rem)' : 'calc(100% - 16rem)'}
      background={useColorModeValue('lightFirst', 'darkFirst')}
      _before={{
        content: '""',
        position: 'absolute',
        width: '40px',
        height: '40px',
        bottom: '-40px',
        left: 0,
        borderRadius: 'full',
        boxShadow: useColorModeValue(
          '-20px -20px 0 #FEFEFE',
          '-20px -20px 0 #0F0F0F',
        ),
      }}
      {...props}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={4}
      >
        {children}
      </Box>
    </Box>
  );
};

NavbarComponent.displayName = 'Navbar';

export const Navbar = Object.assign(NavbarComponent, {
  ToggleButton: NavbarToggleButton,
  Search: NavbarSearch,
  Items: NavbarItems,
  ItemGroup: NavbarItemGroup,
  Item: NavbarItem,
  Avatar: NavbarAvatar,
  AvatarItems: NavbarAvatarItems,
  AvatarItemGroup: NavbarAvatarItemGroup,
  AvatarItem: NavbarAvatarItem,
  AvatarDivider: NavbarAvatarDivider,
});
