import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

type NavbarSearchProps = ComponentProps<typeof Box>;

const NavbarSearch: FC<NavbarSearchProps> = ({ ...props }): JSX.Element => {
  return (
    <Box width={'300px'} {...props}>
      <FormControl>
        <InputGroup size={'sm'} width={'full'}>
          <InputLeftElement children={<IoSearchOutline />} />
          <Input
            placeholder="Search here..."
            size={'sm'}
            borderRadius={'lg'}
            border={'none'}
            background={useColorModeValue('gray.100', 'darkSecond')}
            _hover={{
              border: 'none',
            }}
            _focusVisible={{
              border: 'none',
            }}
          />
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default NavbarSearch;
