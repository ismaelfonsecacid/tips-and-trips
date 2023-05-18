import Menu from "./components/Menu.jsx"
import './globals.css'
import { Kanit } from '@next/font/google'


const ubuntu = Kanit({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (


    <html>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
