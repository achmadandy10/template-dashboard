/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Collapse,
  List,
  ScaleFade,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, type ComponentProps, type FC } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useSidebarContext } from './SidebarContext';
import { LabelColor } from './SidebarItem';

type SidebarCollapseProps = ComponentProps<typeof Box> & {
  icon: FC<ComponentProps<'svg'>>;
  name: string;
  hrefList: string[];
  label?: string;
  labelColor?: LabelColor;
};

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  icon: Icon,
  name,
  label,
  labelColor,
  hrefList,
  children,
  ...props
}) => {
  const { isShort } = useSidebarContext();
  const { isOpen, onToggle } = useDisclosure();
  const toggleRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <Box ref={toggleRef} position={isShort ? 'relative' : 'unset'} {...props}>
      <Box
        position={isShort ? 'relative' : 'unset'}
        cursor={'pointer'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={isShort ? 'center' : 'space-between'}
        transition={'ease'}
        transitionDuration={'0.3s'}
        padding={2}
        borderRadius={'lg'}
        marginBottom={2}
        background={
          hrefList.includes(router.pathname)
            ? 'colorOne'
            : useColorModeValue('gray.50', 'darkSecond')
        }
        color={
          hrefList.includes(router.pathname)
            ? 'lightFirst'
            : useColorModeValue('darkFirst', 'lightFirst')
        }
        _hover={{
          background: 'colorOne',
          color: '#FEFEFE',
        }}
        onClick={onToggle}
      >
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <Icon /> {isShort || <Text fontSize={'xs'}>{name}</Text>}
        </Box>

        <Box display={'flex'} alignItems={'center'} gap={2}>
          {label && (
            <Box
              position={isShort ? 'absolute' : 'unset'}
              right={isShort ? -3 : 0}
              top={isShort ? -2 : 0}
              as={'span'}
              padding={1}
              fontSize={'10px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'md'}
              background={labelColor}
              color={labelColor === 'transparent' ? 'lightFirst' : 'darkFirst'}
            >
              {label}
            </Box>
          )}

          {isShort || (
            <IoChevronDownOutline
              style={{
                transition: '0.3s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          )}
        </Box>
      </Box>

      {isShort && (
        <ScaleFade
          style={{
            position: 'absolute',
            top: 0,
            right: '-250px',
            zIndex: 999,
          }}
          initialScale={0.9}
          in={isOpen}
        >
          <List
            background={useColorModeValue('lightFirst', 'darkFirst')}
            borderRadius={'lg'}
            width={'14rem'}
            padding={4}
          >
            {children}
          </List>
        </ScaleFade>
      )}

      {isShort || (
        <Collapse in={isOpen} animateOpacity>
          <List
            borderLeft={'1px solid'}
            borderColor={useColorModeValue('gray.200', 'darkSecond')}
            paddingLeft={2}
            marginLeft={4}
          >
            {children}
          </List>
        </Collapse>
      )}
    </Box>
  );
};

export default SidebarCollapse;
