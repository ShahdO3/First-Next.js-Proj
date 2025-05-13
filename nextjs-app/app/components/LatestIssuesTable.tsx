import React from 'react'
import InProgressBadge from './InProgressBadge'
import OpenBadge from './OpenBadge'
import ClosedBadge from './ClosedBadge'
import prisma from '@/lib/prisma'
import { Issue } from '@prisma/client'

const LatestIssuesTable = async () => {
const issues = await prisma.issue.findMany();

function getStatus(issue:Issue){
        if (issue.status == 'CLOSED'){
            return <ClosedBadge/>
        }
        else if (issue.status == 'IN_PROGRESS'){
            return <InProgressBadge/>
        }
        else
            return <OpenBadge/>     
    
}
  return (
    <div className='overflow-x-auto bg-neutral bg-opacity-85 p-3 rounded-2xl shadow shadow-black'>
        <table className="table">
            {/* head */}
            <thead>
                <p className='font-bold text-xl mb-2'>Latest Issues</p>
            </thead>
            <tbody>
                {/* mapping the DB to table rows */}
              {issues.map((issue) =>(
                  <tr key={issue.id} className='mb-5 p-2'>
                    {issue.title}
                    <br/>
                    {getStatus(issue)}
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LatestIssuesTable