import { List, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarItemGroupProps = ComponentProps<typeof List>;

const NavbarItemGroup: FC<NavbarItemGroupProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <List
      display={'flex'}
      alignItems={'center'}
      gap={4}
      _notLast={{
        borderRight: '1px solid',
        borderColor: useColorModeValue('gray.200', 'darkSecond'),
        paddingRight: 4,
      }}
      {...props}
    >
      {children}
    </List>
  );
};

export default NavbarItemGroup;
