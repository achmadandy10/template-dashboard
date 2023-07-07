import { Footer } from '@/components';
import { NavbarContext } from '@/components/Navbar/NavbarContext';
import { SidebarContext } from '@/components/Sidebar/SidebarContext';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ComponentProps, FC, useState } from 'react';
import AdminLayoutNavbar from './AdminLayoutNavbar';
import AdminLayoutSidebar from './AdminLayoutSidebar';

type AdminLayoutComponentProps = ComponentProps<typeof Box> & {
  title: string;
  keywords: string;
  description: string;
};

const AdminLayoutComponent: FC<AdminLayoutComponentProps> = ({
  title,
  keywords,
  description,
  children,
  ...props
}): JSX.Element => {
  const [isShort, setIsShort] = useState<boolean>(false);

  const handleIsShortClick = () => {
    setIsShort(!isShort);
  };

  return (
    <Box height={'100vh'} {...props}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <SidebarContext.Provider value={{ isShort }}>
        <AdminLayoutSidebar />
      </SidebarContext.Provider>

      <Box
        position={'fixed'}
        transition={'ease'}
        transitionDuration={'0.3s'}
        width={isShort ? 'calc(100% - 4.5rem)' : 'calc(100% - 16rem)'}
        left={isShort ? '4.5rem' : '16rem'}
      >
        <NavbarContext.Provider value={{ isShort, handleIsShortClick }}>
          <AdminLayoutNavbar />
        </NavbarContext.Provider>

        <Box position={'relative'} top={'65px'} padding={4} zIndex={0}>
          <Box as={'main'} aria-label={'Main'} zIndex={0}>
            {children}
          </Box>

          <Footer
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Footer.Copyright year={'2023'} by={'PT. PT'} />
          </Footer>
        </Box>
      </Box>
    </Box>
  );
};

AdminLayoutComponent.displayName = 'AdminLayout';

export const AdminLayout = Object.assign(AdminLayoutComponent, {
  Sidebar: AdminLayoutSidebar,
  Navbar: AdminLayoutNavbar,
});
