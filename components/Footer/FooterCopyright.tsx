import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type FooterCopyrightProps = ComponentProps<typeof Box> & {
  year: string;
  href?: string;
  by: string;
};

const FooterCopyright: FC<FooterCopyrightProps> = ({
  year,
  href,
  by,
  children,
  ...props
}): JSX.Element => {
  return (
    <Box {...props}>
      &#169; {year},{' '}
      {href ? <Link href={href}>{by}</Link> : <Box as={'span'}>{by}</Box>}
    </Box>
  );
};

export default FooterCopyright;
