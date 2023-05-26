'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css' 

import Loading from 'react-loading';

const NotFound = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Loading type="bubbles" color="#000" height={30} width={30} />
        <Link href="/">
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
