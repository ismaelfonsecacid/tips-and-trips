
import React from "react";
import styles from './Layout.module.css'
import Link from "next/link";
export default async function TripsPage({ children }) {
    const links = [
        {
            label: 'EUROPA',
            route: '/europa'
        },
        {
            label: 'AMÉRICA',
            route: '/america'
        },
        {
            label: 'ASIA',
            route: '/asia'
        },
        {
            label: 'OCEANÍA',
            route: '/oceania'
        },
        {
            label: 'ÁFRICA',
            route: '/africa'
        },
    ];

    return (
        <div>
            <hr className={styles.hr} />
            <div>
                <ul className={styles.mobileMenuList}>
                    {links.map(({ label, route }) => (
                        <li key={route} className={styles.mobileMenuItem}>
                            <Link href={`/trips/${route}`}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {children}
        </div>
    )
}
