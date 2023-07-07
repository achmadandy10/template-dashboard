import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarItemsProps = ComponentProps<typeof Box>;

const NavbarItems: FC<NavbarItemsProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={4} {...props}>
      {children}
    </Box>
  );
};

export default NavbarItems;
