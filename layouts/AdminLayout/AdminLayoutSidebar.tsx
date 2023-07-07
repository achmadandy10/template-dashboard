import { Sidebar } from '@/components';
import { FC } from 'react';
import { IoBookmarkOutline, IoHomeOutline } from 'react-icons/io5';

const AdminLayoutSidebar: FC = (): JSX.Element => {
  return (
    <Sidebar>
      <Sidebar.Logo href={'/'} img={'/favicon.ico'} imgAlt={'Logo'}>
        Logo
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={'/admin'} icon={IoHomeOutline}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse
            icon={IoBookmarkOutline}
            name={'Components'}
            hrefList={['/card', '/input']}
          >
            <Sidebar.Item href={'/card'} submenu>
              Card
            </Sidebar.Item>
            <Sidebar.Item href={'/input'} submenu>
              Input
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.ThemeToggle />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default AdminLayoutSidebar;
