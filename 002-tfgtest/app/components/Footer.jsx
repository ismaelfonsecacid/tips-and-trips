import styles from './Footer.module.css';
import Link from 'next/link';
const links = [
    {
        label: 'HOME',
        route: '/'
    },
    {
        label: 'TIPS',
        route: '/tips'
    },
    {
        label: 'TRIPS',
        route: '/trips'
    },
    {
        label: 'CONTACT',
        route: '/contact'
    },
];
function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <ul className={styles.nav}>
                    {links.map(({ label, route }) => (
                            <Link key={route} href={route} className={styles.navItem}>
                                {label}
                            </Link>
                    ))}

                </ul>
                <p className={styles.textCenter}>&copy; 2023 Tips & Trips, Inc</p>
            </footer>
        </div>
    );
}
export default Footer;
