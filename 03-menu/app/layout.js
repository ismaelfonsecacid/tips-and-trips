import './globals.css'

import { Inter } from 'next/font/google'
import Header from './components/Header'
import EmailForm from './EmailForm'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Contacto</h1>
        <EmailForm />
      </body>
    </html>
  )
}
