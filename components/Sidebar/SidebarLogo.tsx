import { Image, Link } from '@chakra-ui/next-js';
import type { ComponentProps, FC } from 'react';
import { useSidebarContext } from './SidebarContext';

type SidebarLogoProps = ComponentProps<typeof Link> & {
  href: string;
  img?: string;
  imgAlt?: string;
};

const SidebarLogo: FC<SidebarLogoProps> = ({
  href,
  img,
  imgAlt,
  children,
  ...props
}) => {
  const { isShort } = useSidebarContext();
  return (
    <Link
      href={href}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={2}
      padding={4}
      marginBottom={4}
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    >
      {img && imgAlt && <Image src={img} alt={imgAlt} width={35} height={35} />}
      {isShort || children}
    </Link>
  );
};

export default SidebarLogo;
