import { Box } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type SidebarItemsProps = ComponentProps<typeof Box>;

const SidebarItems: FC<SidebarItemsProps> = ({ children, ...props }) => {
  return (
    <Box paddingX={4} {...props}>
      {children}
    </Box>
  );
};

export default SidebarItems;
