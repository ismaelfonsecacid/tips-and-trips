import './globals.css'
import Navigation from './components/Navigation'
import Menu from './components/Menu'
import { Montserrat } from '@next/font/google'


const font = Montserrat({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {

  return (
    <html>
      <body className={font.className}>
      <Navigation />
      <Menu/>
      <div>{children}</div>
      </body>
    </html>
  )
}
