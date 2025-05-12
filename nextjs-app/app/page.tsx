import Image from 'next/image'
import Link from 'next/link'
import { Changa } from 'next/font/google'
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'

const changa = Changa({
   subsets: ['latin'],
  //  display: 'swap',
   variable: '--font-changa' 
  })

export default function Home() {
  return (
    <main >
      <h1 >Hello World!</h1>
      <Link href={"/users"} className='btn btn-ghost'> Users Page</Link>
      <ProductCard/>
      <Carousel/>
    </main>
  )
}
