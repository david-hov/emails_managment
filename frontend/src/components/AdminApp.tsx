import { Container } from '@mui/material';
import * as React from 'react';
import { Admin, Layout, Resource } from 'react-admin';

import { globalDataProvider } from './dataProvider';
import { EmailList } from './resources/emailsList';

const Empty = () => {
    return <></>
};

const MyLayout = ({ children }: { children: React.ReactNode }) => (
    <Layout sidebar={Empty}>
        {children}
    </Layout>
);

const AdminApp = () => (
    <Container>
        <Admin disableTelemetry layout={MyLayout} dataProvider={globalDataProvider}>
            <Resource name='email' list={<EmailList />} />
        </Admin>
    </Container>
);

export default AdminApp;
