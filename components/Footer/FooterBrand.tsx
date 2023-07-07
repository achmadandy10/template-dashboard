import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterBrandProps = ComponentProps<typeof Box>;

const FooterBrand: FC<FooterBrandProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Box {...props}>{children}</Box>;
};

export default FooterBrand;
