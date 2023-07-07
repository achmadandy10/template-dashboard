import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterDividerProps = ComponentProps<typeof Box>;

const FooterDivider: FC<FooterDividerProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterDivider;
