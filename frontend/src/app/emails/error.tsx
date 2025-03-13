'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message || 'An unexpected error occurred.'}</p>
            <button onClick={reset} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Try Again
            </button>
        </div>
    );
}
