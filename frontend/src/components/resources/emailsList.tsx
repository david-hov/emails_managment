import { List, Datagrid, TextField, SearchInput, Pagination } from 'react-admin';

import { Actions } from './createEmail';

const filters = [
    <SearchInput fullWidth source='q' alwaysOn placeholder='Search by (to, cc, bcc, subject)' />,
];

export const EmailList = () => {
    return (
        <List perPage={25} pagination={<Pagination />} exporter={false} actions={<Actions />} filters={filters}>
            <Datagrid bulkActionButtons={false}>
                <TextField source='to' emptyText='N/A' />
                <TextField source='cc' emptyText='N/A' />
                <TextField source='bcc' emptyText='N/A' />
                <TextField source='subject' emptyText='N/A' />
                <TextField source='body' emptyText='N/A' />
            </Datagrid>
        </List>
    );
};
