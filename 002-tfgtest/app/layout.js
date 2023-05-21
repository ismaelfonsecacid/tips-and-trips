import Menu from "./components/Menu.jsx"
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
        <meta charset="UTF-8"/>
          <title>Tips & Trips</title>
      </head>
      <body className={font.className}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
