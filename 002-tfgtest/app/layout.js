import Footer from "./components/Footer.jsx"
import Menu from "./components/Menu.jsx"
import { initFirebase } from "./firebases/firebaseApp.js"
import './globals.css'
import { Kanit } from '@next/font/google'



const font = Kanit({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {


  return (


    <html lang="es">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Tips & Trips</title>
        <meta name="description" content="Explora el mundo a través de nuestras historias y consejos de viaje en nuestro blog de viajes. Descubre destinos increíbles, experiencias únicas y consejos prácticos para planificar tu próxima aventura."/>
      </head>
      <body className={font.className}>
        <Menu />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
