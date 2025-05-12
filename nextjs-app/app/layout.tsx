import '@/app/globals.css';
import "@radix-ui/themes/styles.css";
import type { Metadata } from 'next'
import { Changa } from 'next/font/google'
import {Theme, ThemePanel} from '@radix-ui/themes';
import NavBar from './components/NavBar';
import "@/app/theme-config.css"

const changa = Changa({
   subsets: ['latin'],
  //  display: 'swap',
   variable: '--font-changa' 
  })

export const metadata: Metadata = {
  title: 'Bugged Out',
  description: 'Creating my first website using Next.js',
  icons:'' ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="BuggedOut" className={changa.className}>
      <body className='bg-accent'>
          <NavBar/>
          <main className='p-5 bg-accent'>{children}</main>
        </body>
    </html>
  )
}
