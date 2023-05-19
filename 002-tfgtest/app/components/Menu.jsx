'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';

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
];

export default function Menu() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 750;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.border}>
      <div style={{ textAlign: 'center' }}>
        <Link href="/">
          <Image
            src="/images/logo3.png"
            className={styles.logo}
            width={400}
            height={400}
            alt="logo"
          />
        </Link>
      </div>
      {isMobile && (
        <div style={{ textAlign: 'right', paddingRight: '20px' }}>
          <button className={styles.hamburgerButton} onClick={toggleMobileMenu}>
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className={`${styles.mobileMenu} ${styles.open}`}>
              <ul className={styles.mobileMenuList}>
                {links.map(({ label, route }) => (
                  <Link href={route} onClick={toggleMobileMenu}>
                    <li key={route} className={styles.mobileMenuItem}>
                      {label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {!isMobile && (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <ul className={styles.ul} style={{ listStyleType: 'none', padding: 0 }}>
            {links.map(({ label, route }) => (
              <li key={route} style={{ display: 'inline-block', margin: '0 15px' }}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
