import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black pt-56 sm:pt-32 pb-20 mt-40 relative'>
        <div className="w-[80%] xl:w-[1100px] bg-slate-200 py-10 px-8 absolute -top-40 sm:-top-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center rounded-xl shadow-2xl gap-y-8">
            <p className='w-full sm:w-1/4 md:text-xl lg:text-2xl font-semibold text-center'>Start a project</p>
            <p className='w-full sm:w-2/4 text-center px-5 font-normal sm:text-xs md:text-base'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
           <div className="w-full sm:w-1/4 flex justify-center">
                <Link to='contact'><button className='text-primary border-2 rounded-md border-primary px-5 py-2 text-xs md:text-base' >Let's do this</button></Link>
           </div>
        </div>
        <div id='contact' className="text-white text-center md:w-[800px] mx-auto">
            <h2 className='text-4xl font-semibold mb-5'>Get in Touch</h2>
            <p className="text-base">Thanks for stopping by,</p>
            <p className="text-xs sm:text-sm md:text-base px-[5%]">Although I’m currently looking for new opportunities,so my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you</p>
            <button className='px-5 py-2 mt-5 text-white font-normal rounded-md border'><a href="mailto:diptodey2005@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a></button>
        </div>
    </div>
  )
}

export default Footer