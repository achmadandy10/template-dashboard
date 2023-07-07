import { List, useColorModeValue } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type SidebarItemGroupProps = ComponentProps<typeof List>;

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <List
      _notLast={{
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'darkSecond'),
        marginBottom: 2,
      }}
      {...props}
    >
      {children}
    </List>
  );
};

export default SidebarItemGroup;
