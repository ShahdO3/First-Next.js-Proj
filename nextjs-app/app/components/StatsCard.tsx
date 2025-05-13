import prisma from '@/lib/prisma';
import { Issue } from '@prisma/client';
import { HoverCard } from '@radix-ui/themes'
import React from 'react'

  
const StatsCard = async () => {
const issues = await prisma.issue.findMany();
const closedIssues = await prisma.issue.count({
  where:{ status: 'CLOSED'}
})
const openIssues = await prisma.issue.count({
  where:{ status: 'OPEN'}
})
const inPIssues = await prisma.issue.count({
  where:{ status: 'IN_PROGRESS'}
})


  return (
    <div className= 'text-neutral-content flex flex-wrap'>
        <div className='card bg-secondary w-fit h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2'>
            <h2 className="card-title text-sm font-bold">{openIssues}</h2>
            <p className='text-xs'>Open Issues</p>
        </div>
        </div>
        
        <div className='card bg-base-300 w-40 h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2 pb-2'>
            <h2 className="card-title text-sm font-bold">{inPIssues}</h2>
            <p className='text-xs'>In progress Issues</p>
        </div>
        </div>
        
        <div className='card bg-accent w-fit h-15 shadow-md shadow-stone-700 m-2'>
        <div className='card-body items-center text-center pt-2'>
            <h2 className="card-title text-sm font-bold">{closedIssues}</h2>
            <p className='text-xs'>Closed Issues</p>
        </div>
        </div>

    </div>
    
  )
}

export default StatsCard