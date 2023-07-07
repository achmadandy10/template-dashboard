import { Box } from '@chakra-ui/react';
import type { ComponentProps, FC } from 'react';

type SidebarCTAProps = ComponentProps<typeof Box>;

const SidebarCTA: FC<SidebarCTAProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default SidebarCTA;
