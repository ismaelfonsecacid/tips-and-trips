import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css'
import Image from 'next/image';
const links = [
  {
  label: 'HOME',
  route: '/'
  }, 
  {
  label: 'TIPS',
  route: '/tips'
  }, {
  label: 'TRIPS',
  route: '/trips'
},
]

export default  function Menu() {
  return (
    <div className={styles.border}>
      <div style={{ textAlign: 'center'}}>
        {/* Bloque superior con el logotipo */}
        <Link href='/'>
          <Image src='/images/logo3.png' className={styles.logo} width={'400'} height={'400'} alt='logo'></Image>
        </Link>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        {/* Bloque inferior con el menú */}
        <ul className={styles.ul} style={{ listStyleType: 'none', padding: 0 }}>
          {links.map(({ label, route }) => (
            <li key={route} style={{ display: 'inline-block', margin: '0 15px' }}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

