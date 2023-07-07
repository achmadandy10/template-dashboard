import { Navbar } from '@/components';
import NavbarAvatarItem from '@/components/Navbar/NavbarAvatarItem';
import { Box, Divider } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';

const AdminLayoutNavbar: FC = (): JSX.Element => {
  return (
    <Navbar>
      <Box display={'flex'} alignItems={'center'} gap={4}>
        <Navbar.ToggleButton />
        <Navbar.Search />
      </Box>

      <Box display={'flex'} alignItems={'center'} gap={4}>
        <Navbar.Items>
          <Navbar.ItemGroup>
            <Navbar.Item icon={IoNotificationsOutline} />
            <Navbar.Item icon={IoMailOutline} />
          </Navbar.ItemGroup>
        </Navbar.Items>

        <Divider orientation={'vertical'} height={'25px'} />

        <Navbar.Avatar src={'/favicon.ico'} alt={'Avatar'}>
          <Navbar.AvatarItems>
            <Navbar.AvatarItemGroup title={'Profile'}>
              <NavbarAvatarItem>Menu 1</NavbarAvatarItem>
              <NavbarAvatarItem>Menu 2</NavbarAvatarItem>
              <NavbarAvatarItem>Menu 3</NavbarAvatarItem>
            </Navbar.AvatarItemGroup>
            <Navbar.AvatarDivider />
            <Navbar.AvatarItemGroup title={'Help'}>
              <NavbarAvatarItem>Menu 1</NavbarAvatarItem>
              <NavbarAvatarItem>Menu 2</NavbarAvatarItem>
              <NavbarAvatarItem>Menu 3</NavbarAvatarItem>
            </Navbar.AvatarItemGroup>
          </Navbar.AvatarItems>
        </Navbar.Avatar>
      </Box>
    </Navbar>
  );
};

export default AdminLayoutNavbar;
