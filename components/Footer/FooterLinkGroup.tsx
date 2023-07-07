import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterLinkGroupProps = ComponentProps<typeof Box>;

const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterLinkGroup;
