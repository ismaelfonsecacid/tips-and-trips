
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
            label: 'AMERICA',
            route: '/america'
        },
        {
            label: 'ASIA',
            route: '/asia'
        },
        {
            label: 'OCEANIA',
            route: '/oceania'
        },
    ];

    return (
        <div>
            <hr style={{borderColor:'red', marginBottom:'20px'} } />
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
