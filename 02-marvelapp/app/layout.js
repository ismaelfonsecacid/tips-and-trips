import './globals.css'
import Navigation from './components/Navigation'
import Menu from './components/Menu'


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
      <Navigation />
      <Menu/>
      <div>{children}</div>
      </body>
    </html>
  )
}
