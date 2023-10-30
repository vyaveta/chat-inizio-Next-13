import ActiveStatus from './components/ActiveStatus'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat initio',
  description: 'This is one of the Adwaithos projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <link rel="manifest" href='/manifest.json' />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      <body className={inter.className}>
       <AuthContext>
       <ToasterContext />
       <ActiveStatus />
        {children}
       </AuthContext>
        </body>
    </html>
  )
}
