import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className='text-4xl text-black/70 font-semibold'>This page under construction ......</h1>
            <Link to='/'><button className='px-5 py-2 border-2 border-primary text-primary mt-5 rounded-xl font-semibold'>Back to home</button></Link>
        </div>
    </div>
  )
}

export default Blog