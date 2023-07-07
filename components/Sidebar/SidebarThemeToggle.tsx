import {
  Box,
  ListItem,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, FC } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useSidebarContext } from './SidebarContext';

const IconTheme: FC = () => {
  return (
    <AnimatePresence mode={'wait'} initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {useColorModeValue(
          <IoMoonOutline />,
          <IoSunnyOutline style={{ color: 'yellow' }} />,
        )}
      </motion.div>
    </AnimatePresence>
  );
};

type SidebarThemeToggleProps = ComponentProps<typeof ListItem>;

const SidebarThemeToggle: FC<SidebarThemeToggleProps> = ({
  ...props
}): JSX.Element => {
  const { isShort } = useSidebarContext();
  const { toggleColorMode } = useColorMode();

  return (
    <ListItem
      display={'flex'}
      alignItems={'center'}
      justifyContent={isShort ? 'center' : 'space-between'}
      transition={'ease'}
      transitionDuration={'0.3s'}
      padding={2}
      borderRadius={'lg'}
      background={useColorModeValue('gray.50', 'darkSecond')}
      color={useColorModeValue('darkFirst', 'lightFirst')}
      {...props}
    >
      {isShort || (
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <IconTheme />
          {isShort || <Text fontSize={'xs'}>Dark Mode</Text>}
        </Box>
      )}

      <Box display={'flex'} alignItems={'center'}>
        <Switch
          size={isShort ? 'sm' : 'md'}
          isChecked={useColorModeValue(false, true)}
          onChange={toggleColorMode}
        />
      </Box>
    </ListItem>
  );
};

export default SidebarThemeToggle;
