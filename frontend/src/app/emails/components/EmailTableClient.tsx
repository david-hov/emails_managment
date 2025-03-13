'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { TextField, Box } from '@mui/material';

import { useDebounce } from './hooks';

const columns: GridColDef[] = [
    { field: 'to', headerName: 'TO', flex: 1 },
    { field: 'cc', headerName: 'CC', flex: 1 },
    { field: 'bcc', headerName: 'BCC', flex: 1 },
    { field: 'subject', headerName: 'Subject', flex: 1 },
    { field: 'body', headerName: 'Body', flex: 1 },
];

const EmailTableClient = ({ emails, total }: { emails: any[], total: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [sortField, setSortField] = useState(searchParams.get('orderBy') || 'id');
    const [sortOrder, setSortOrder] = useState(searchParams.get('orderDir') || 'asc');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        const params = new URLSearchParams();
        if (debouncedSearch) params.set('search', debouncedSearch);
        params.set('orderBy', sortField);
        params.set('orderDir', sortOrder);
        params.set('page', String(page));
        params.set('perPage', String(perPage));
        router.push(`/emails?${params.toString()}`, { scroll: false });
    }, [debouncedSearch, sortField, sortOrder, page, perPage]);

    return (
        <Box sx={{ backgroundColor: 'white', width: '100%', p: 2 }}>
            <Box display='flex' gap={2} mb={2}>
                <TextField
                    label='Search...'
                    variant='outlined'
                    size='small'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>
            <DataGrid
                disableColumnResize
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnFilter
                rows={emails || []}
                columns={columns.map(col => ({
                    ...col,
                    renderCell: (params) => params.value || '-',
                }))}
                pageSizeOptions={[5, 10, 100]}
                sortingMode='server'
                onSortModelChange={(model) => {
                    if (model.length > 0) {
                        setSortField(model[0].field);
                        setSortOrder(model[0].sort || 'asc');
                    }
                }}
                paginationMode='server'
                rowCount={total}
                pagination
                paginationModel={{
                    pageSize: perPage,
                    page: page - 1,
                }}
                onPaginationModelChange={(paginationModel: GridPaginationModel) => {
                    setPage(paginationModel.page + 1);
                    setPerPage(paginationModel.pageSize);
                }}
            />
        </Box>
    );
};

export default EmailTableClient;
