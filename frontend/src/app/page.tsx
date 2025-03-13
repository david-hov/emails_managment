'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/components/AdminApp'), { ssr: false });

const HomePage = () => {
    const [showAdmin, setShowAdmin] = useState(false);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Email Manager</h1>
            <Link href='/emails'>
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}>
                    Go to Server Component
                </button>
            </Link>
            <button
                onClick={() => setShowAdmin(true)}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
                Go to Client Component
            </button>
            {showAdmin && <AdminApp />}
        </div>
    );
};

export default HomePage;
