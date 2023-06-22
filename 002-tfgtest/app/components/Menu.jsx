
import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';
import MobileNav from './MobileNav';

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


export default function Menu() {

  return (
    <div className={styles.border}>
      <div className={styles.top}>
        <Link href="/">
          <Image
            src="/images/logo3.png"
            className={styles.logo}
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        <div className={styles.menuMob}>
          <MobileNav />
        </div>
      </div>

      <div className={styles.allDiv}>
        <div style={{ textAlign: 'center', paddingTop: '20px' }} className={styles.menuPc}>
          <ul className={styles.ul} style={{ listStyleType: 'none', padding: 0 }}>
            {links.map(({ label, route }) => (
              <li key={route} style={{ display: 'inline-block', margin: '0 15px' }}>
                <Link href={route} key={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
