import Menu from "./components/Menu.jsx"
import './globals.css'
import {Kanit} from '@next/font/google'


const ubuntu = Kanit({
  weight:'400',
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <div className={ubuntu.className}>
    <header>
      <Menu />
    </header>
    <body>{children}</body>
  </div>
  )
}
