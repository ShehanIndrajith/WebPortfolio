import React from 'react'

function overveiw() {
  return (
    <div className='flex flex-row bg-gradient-to-r from-indigo-600 to-violet justify-center px-8 py-6'>
        <div className='flex flex-col basis-1/3 justify-center items-center'>
            <span className='block text-4xl font-bold'>04</span>
            <h1 className='text-2xl'>Projects</h1>
        </div>
        <div className='flex flex-col basis-1/3 justify-center items-center'>
            <span className='block text-4xl font-bold'>03</span>
            <h1 className='text-2xl'>Certifications</h1>
        </div>
        <div className='flex flex-col basis-1/3 justify-center items-center'>
            <span className='block text-4xl font-bold'>0</span>
            <h1 className='text-2xl'>Blogs</h1>
        </div>
      
    </div>
  )
}

export default overveiw
