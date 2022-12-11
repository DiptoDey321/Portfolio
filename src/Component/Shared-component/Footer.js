import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black pt-32 pb-20 mt-20 relative'>
        <div className="w-[1100px] bg-slate-200 py-10 px-8 absolute -top-16 left-1/2 -translate-x-1/2 flex items-center rounded-xl shadow-2xl">
            <p className='w-1/4 text-2xl font-semibold'>Start a project</p>
            <p className='w-2/4 text-center px-3 font-medium'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
           <div className="w-1/4 flex justify-center">
                <Link to='contact'><button className='text-black border-2 rounded-md border-black px-5 py-2' >Let's do this</button></Link>
           </div>
        </div>
        <div id='contact' className="text-white text-center w-[800px] mx-auto">
            <h2 className='text-4xl font-semibold mb-5'>Get in Touch</h2>
            <p>Thanks for stopping by,</p>
            <p>Although I’m currently looking for any new opportunities,so my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you</p>
            <button className='px-5 py-2 mt-5 text-white font-normal rounded-md border'><a href="mailto:diptodey2005@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a></button>
        </div>
    </div>
  )
}

export default Footer