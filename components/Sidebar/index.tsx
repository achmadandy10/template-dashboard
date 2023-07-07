import { Box, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import SidebarCTA from './SidebarCTA';
import SidebarCollapse from './SidebarCollapse';
import { useSidebarContext } from './SidebarContext';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
import SidebarToggleTheme from './SidebarThemeToggle';

type SidebarCompnentProps = ComponentProps<typeof Box>;

const SidebarComponent: FC<SidebarCompnentProps> = ({
  children,
  ...props
}): JSX.Element => {
  const { isShort } = useSidebarContext();
  return (
    <Box
      as={'aside'}
      aria-label={'Sidebar'}
      position={'fixed'}
      transition={'ease'}
      transitionDuration={'0.3s'}
      width={isShort ? '4.5rem' : '16rem'}
      height={'full'}
      background={useColorModeValue('lightFirst', 'darkFirst')}
      {...props}
    >
      <Box>{children}</Box>
    </Box>
  );
};

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
  ThemeToggle: SidebarToggleTheme,
});
