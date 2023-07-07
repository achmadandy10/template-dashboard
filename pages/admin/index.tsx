import { Card } from '@/components';
import { AdminLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils';
import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';

const Dashboard: NextPageWithLayout = (): JSX.Element => {
  return (
    <Box marginBottom={4}>
      <Box
        marginBottom={4}
        display={'grid'}
        gridTemplateColumns={'repeat(4, 1fr)'}
        gap={4}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Box>

      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(2, 1fr)'}
        gap={4}
        marginBottom={4}
      >
        <Card></Card>
        <Card></Card>
      </Box>

      <Card marginBottom={4}></Card>

      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(3, 1fr)'}
        gap={4}
        marginBottom={4}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Box>
    </Box>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
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

export default Dashboard;
