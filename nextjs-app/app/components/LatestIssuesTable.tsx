import React from 'react'
import InProgressBadge from './InProgressBadge'
import OpenBadge from './OpenBadge'
import ClosedBadge from './ClosedBadge'

const LatestIssuesTable = () => {
  return (
    <div className='overflow-x-auto bg-neutral bg-opacity-85 p-3 rounded-2xl shadow shadow-black'>
        <table className="table">
            {/* head */}
            <thead>
                <h1 className='font-bold text-xl'>Latest Issues</h1>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <p className="font-bold">Button Not Clicking Issue</p>
                <InProgressBadge/>
                </td>
            </tr>
            {/* row 2 */}
            
            <tr>
                <td>
                    <p className="font-bold">File Doesn’t Upload</p>
                <InProgressBadge/>
                </td>
            </tr>
            {/* row 3 */}
            <tr>
                <td>
                    <p className="font-bold">Payment Refund</p>
                <OpenBadge/>
                </td>
            </tr>
            {/* row 4 */}
            <tr>
                <td>
                    <p className="font-bold">Profile Picture Not Showing</p>
                <ClosedBadge/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LatestIssuesTable