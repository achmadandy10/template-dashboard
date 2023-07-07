import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterTitleProps = ComponentProps<typeof Box>;

const FooterTitle: FC<FooterTitleProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterTitle;
