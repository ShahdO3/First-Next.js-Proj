import { HoverCard } from '@radix-ui/themes'
import React from 'react'

const StatsCard = () => {
  return (
    <div className='text-black flex flex-wrap'>
        <div className='card bg-secondary w-fit h-fit shadow-md shadow-stone-700 m-5'>
        <div className='card-body'>
            <h2 className="card-title justify-center-safe">5</h2>
            <p className='content-center'>Open Issues</p>
        </div>
        </div>
        
        <div className='card bg-info w-fit h-fit shadow-md shadow-stone-700 m-5'>
        <div className='card-body'>
            <h2 className="card-title justify-center-safe">3</h2>
            <p className='content-center'>In progress Issues</p>
        </div>
        </div>
        
        <div className='card bg-accent w-fit h-fit shadow-md shadow-stone-700 m-5'>
        <div className='card-body'>
            <h2 className="card-title justify-center-safe">3</h2>
            <p className='content-center'>Closed Issues</p>
        </div>
        </div>

    </div>
    
  )
}

export default StatsCard