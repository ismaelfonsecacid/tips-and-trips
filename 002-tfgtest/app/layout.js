import Menu from "./components/Menu.jsx"
import { initFirebase } from "./firebase/firebaseApp.js"
import './globals.css'
import { Kanit } from '@next/font/google'


const font = Kanit({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {

  const app = initFirebase();
  console.log(app)
  return (


    <html lang="es">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Tips & Trips</title>
      </head>
      <body className={font.className}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
