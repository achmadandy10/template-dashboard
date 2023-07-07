import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { useNavbarContext } from './NavbarContext';

const NavbarToggleButton: FC = (): JSX.Element => {
  const { handleIsShortClick } = useNavbarContext();

  return (
    <IconButton
      icon={<IoMenuOutline />}
      aria-label={'Icon Navbar Toggle Button'}
      size={'sm'}
      borderRadius={'lg'}
      onClick={handleIsShortClick}
    />
  );
};

export default NavbarToggleButton;
