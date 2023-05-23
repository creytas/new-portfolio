import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Randy Buhendwa - Portfolio',
  description: 'This is my work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
