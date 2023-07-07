import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export const ThemeToggleButton: FC = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

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
        <IconButton
          aria-label={'Toggle theme'}
          colorScheme={useColorModeValue('gray', 'orange')}
          icon={useColorModeValue(<IoMoonOutline />, <IoSunnyOutline />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};
