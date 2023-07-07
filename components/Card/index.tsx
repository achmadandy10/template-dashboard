import { Box, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type CardComponentProps = ComponentProps<typeof Box>;

const CardComponent: FC<CardComponentProps> = ({ children, ...props }) => {
  return (
    <Box
      background={useColorModeValue('lightFirst', 'darkFirst')}
      padding={4}
      borderRadius={'lg'}
      {...props}
    >
      {children}
    </Box>
  );
};

CardComponent.displayName = 'Card';

export const Card = Object.assign(CardComponent, {});
