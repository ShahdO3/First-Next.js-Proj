'use client'

import React from 'react'
import { Button, Link } from '@radix-ui/themes'

const IssuesPage = () => {
  return (
    <div className='h-full'>
      <div className='btn btn-soft'><Link href='/issues/new'>New Issue</Link></div>
      <br/>      <br/>
      <div className='btn btn-soft'><Link href='/users'>View User Table</Link></div>
    </div>
  )
}

export default IssuesPage