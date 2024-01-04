import React from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function PostFeed() {
  const postData = await getData();

  return (
    <>
      <h2 className="text-black text-4xl font-bold">Post Feed</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {postData.slice(0, 10).map((_post, idx) => {
          return (
            <div key={idx} className={`${_post.completed ? 'bg-green-500' : 'bg-red-500'} max-w-sm rounded overflow-hidden shadow-lg p-4`}>
              <div className="font-bold text-xl capitalize mb-2">{_post.title}</div>
              <p><strong>User ID:</strong> {_post.userId}</p>
              <p><strong>ID:</strong> {_post.id}</p>
              <p className="text-black">
                <strong>Status:</strong> {_post.completed ? 'Completed' : 'Not Completed'}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
