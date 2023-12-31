import { AdminLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils';
import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = (): JSX.Element => {
  return <Box>main</Box>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout
      title={'Title'}
      keywords={'Keywords'}
      description={'Descriptions'}
    >
      {page}
    </AdminLayout>
  );
};

export default Home;
