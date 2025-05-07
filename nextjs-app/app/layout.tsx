import '@/app/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Creating my first website using Next.js',
  icons:'' ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <NavBar/>
        <main>{children}</main>
        </body>
    </html>
  )
}
