import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <main>
      <h1 className='font-bold'>Hello World!</h1>
      <Link href={"/users"} className='btn btn-ghost'> Users Page</Link>
      <ProductCard/>
      <Carousel/>
    </main>
  )
}
