

import Image from 'next/image';
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
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <a href="tel:+34689272482">
                            <Image src="/images/tlf.png" width={32} height={32} alt="Telefono de contacto" className={styles.contactIcon} />
                            <p>689 27 24 82</p></a>
                    </div>
                    <div className={styles.contactItem}>
                        <a href="mailto:tipsandtrips.daw@gmail.com">
                            <Image src="/images/mail.png" width={32} height={32} alt="Correo electrónico" className={styles.contactIcon} />
                            <p>tipsandtrips@gmail.com</p></a>
                    </div>
                </div>
                <p className={styles.textCenter}>&copy; 2023 Tips & Trips, Inc</p>
            </footer>

        </div>
    );
}
export default Footer;
