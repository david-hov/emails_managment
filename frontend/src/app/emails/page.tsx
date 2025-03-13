import { globalDataProvider } from '@/components/dataProvider';
import Link from 'next/link';

import EmailTableClient from './components/EmailTableClient';

const EmailPage = async ({ searchParams }: { searchParams?: { perPage: number, page: number, search?: string; orderBy?: string; orderDir?: string } }) => {
    const { page = 1, perPage = 5, search = '', orderBy = 'id', orderDir = 'ASC' } = await searchParams || {};
    const { data, total } = await globalDataProvider.getList('email', {
        pagination: { page: page, perPage: perPage },
        sort: { field: orderBy, order: orderDir.toUpperCase() as 'ASC' | 'DESC' },
        filter: { q: search },
    });

    return (
        <div>
            <Link href='/'>
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}>
                    Go to Main screen
                </button>
            </Link>
            <EmailTableClient emails={data} total={total} />
        </div>
    )
};

export default EmailPage;
