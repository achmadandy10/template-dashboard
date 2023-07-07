import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterLinkProps = ComponentProps<typeof Box>;

const FooterLink: FC<FooterLinkProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterLink;
