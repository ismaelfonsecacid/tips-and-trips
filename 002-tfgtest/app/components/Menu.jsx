import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css'
const links = [{
  label: 'ABOUT',
  route: '/'
}, {
  label: 'TIPS',
  route: '/tips'
},
{
  label: 'TRIPS',
  route: '/trips'
}]

export default  function Menu() {
  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        {/* Bloque superior con el logotipo */}
        <img src='/images/logoTT.png' className={styles.logo}></img>
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

