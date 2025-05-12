import { HoverCard } from '@radix-ui/themes'
import React from 'react'

  
const StatsCard = () => {
  return (
    <div className= 'text-neutral-content flex flex-wrap'>
        <div className='card bg-secondary w-fit h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2'>
            <h2 className="card-title text-sm font-bold">5</h2>
            <p className='text-xs'>Open Issues</p>
        </div>
        </div>
        
        <div className='card bg-base-300 w-40 h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2 pb-2'>
            <h2 className="card-title text-sm font-bold">3</h2>
            <p className='text-xs'>In progress Issues</p>
        </div>
        </div>
        
        <div className='card bg-accent w-fit h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2'>
            <h2 className="card-title text-sm font-bold">3</h2>
            <p className='text-xs'>Closed Issues</p>
        </div>
        </div>

    </div>
    
  )
}

export default StatsCard