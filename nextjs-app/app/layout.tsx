import '@/app/globals.css';
import "@radix-ui/themes/styles.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Theme} from '@radix-ui/themes';
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
        <Theme>
          <NavBar/>
          <main>{children}</main>
        </Theme>
        </body>
    </html>
  )
}
