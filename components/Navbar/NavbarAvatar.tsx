import { Image } from '@chakra-ui/next-js';
import { Box, Menu, MenuButton } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type NavbarAvatarProps = ComponentProps<typeof Box> & {
  src: string;
  alt: string;
};

const NavbarAvatar: FC<NavbarAvatarProps> = ({
  src,
  alt,
  children,
  ...props
}): JSX.Element => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      {...props}
    >
      <Menu>
        <MenuButton>
          <Image
            src={src}
            alt={alt}
            width={50}
            height={50}
            borderRadius={'full'}
            boxSize={8}
          />
        </MenuButton>
        {children}
      </Menu>
    </Box>
  );
};

export default NavbarAvatar;
