import '@/app/globals.css';
import "@radix-ui/themes/styles.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Theme, ThemePanel} from '@radix-ui/themes';
import NavBar from './components/NavBar';
import "@/app/theme-config.css"

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-inter' 
  })

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
      <body className={inter.variable}>
          <NavBar/>
          <Theme accentColor="purple" grayColor="slate" radius="large" scaling="110%">
            <main className='p-5'>{children}</main>
          </Theme>
        </body>
    </html>
  )
}
