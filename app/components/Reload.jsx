'use client'
import Loading from 'react-loading';
import { useEffect } from 'react';

export default function Reload() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return <Loading type="spinningBubbles" color="#FEA14A" height={50} width={50} />
}
