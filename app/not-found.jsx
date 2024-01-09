

import Link from 'next/link';
import Reload from './components/Reload';



const NotFound = () => {


  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <br />
        <p>Serás redirigido a la página principal lo antes posible</p>
        <Reload/>
        <Link href="/">
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
