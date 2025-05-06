import React from 'react'

interface User{
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    // Dummy API to try the fetching
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {cache: 'no-store'}
    );
    const users:User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>    
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='font-bold font'>
          {users.map(user =><tr key={user.id} className='hover:bg-emerald-950 '>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default UsersPage