import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterIconProps = ComponentProps<typeof Box>;

const FooterIcon: FC<FooterIconProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterIcon;
