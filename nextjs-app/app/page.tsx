import Image from 'next/image'
import Link from 'next/link'
import { Changa } from 'next/font/google'
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import StatsCard from './components/StatsCard'

const changa = Changa({
   subsets: ['latin'],
  //  display: 'swap',
   variable: '--font-changa' 
  })

export default function Home() {
  return (
    <main >
      <section>
        <div className='w-auto h-screen grid grid-cols-2'>
          <div className='w-full h-full bg-amber-950'>
            <StatsCard/>
          </div>
          
          <div className='w-full h-full bg-amber-200'>
            <p>Sec2</p>
          </div>
        </div>
      </section>
    </main>
  )
}
