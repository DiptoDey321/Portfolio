import React, { useState } from 'react'

function WorkingHistory() {
    const [activeTab, setActiveTab] = useState('bysl')
    const handleTabClick = e =>{
        setActiveTab(e)
    }
  return (
    <div className='px-[17%] pt-20 pb-5'>
        <div className="">
            <p className='text-xl font-semibold text-black/70 text-left pb-3 border-b-emerald-50 tracking-wider'>Where I've Worked Till Now</p>
            {/* <p>A short description about my work & the company's that i have worked till now</p> */}
            <div className="flex gap-x-10 mt-5">
                <div className="flex-shrink-0 w-[250px]">
                    <ul className='flex flex-col border-l-2 border-t-2 border-[rgb(114,89,204)] shadow-md'>
                        <li onClick={() =>handleTabClick("bysl")} className={`${activeTab === 'bysl' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer`}>BYSL Global Technology</li>
                        <li onClick={() =>handleTabClick("nationwide")} className={`${activeTab === 'nationwide' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer`}>Nationwide IT Services, Inc</li>
                    </ul>
                </div>
                <div className="details">
                    {
                        (activeTab === "bysl") &&
                        <div className="">
                            <h3 className='font-semibold text-xl'>Frontend Developer <span className='text-[rgb(35,21,87)] '>@BYSL Global Tecnology Group</span></h3>
                            <p className='text-xs text-text/80 mt-1'>Feb 2022 - Present</p>
                            <p className='text-black/90 mt-4 text-[15px] leading-[180%]'>Working as a Front-end developer in a SaaS based web application which include 5module (Mail Communication, cloud based storage management, platform for online meeting & office management , instant chatting & calling app)</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-sm'>
                                <li><span className='font-black'>⮞</span> Front-End Development in Angular Framework (For web, Tablet and mobile responsive)</li>
                                <li><span className='font-black'>⮞</span> Web-page conversion(FIGMA to HTML, Tailwind CSS, and Typescripts)</li>
                                <li><span className='font-black'>⮞</span> working with semantic and adaptive layout development</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === 'nationwide') &&
                        <div className="">
                            <h3 className='font-semibold text-xl'>Frontend Developer <span className='text-[rgb(35,21,87)] '>@Nationwide IT Services, Inc</span></h3>
                            <p className='text-xs text-text/80 mt-1'>April 2021 - January 2022</p>
                            <p className='text-black/90 mt-4 text-[15px] leading-[180%]'>Was a part of the web programming team where my task was to develop web-pages in react and make it fully functional and dynamic according to the Figma/Adobe design</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-sm'>
                                <li><span className='font-black'>⮞</span> Front-End Development in using React and its latest component and package along with HTML, CSS, JavaScript (no CSS framework)</li>
                                <li><span className='font-black'>⮞</span> Ensuring web design is optimized for smartphones</li>
                                <li><span className='font-black'>⮞</span> work on someone else’s code or redevelopment of webpages</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkingHistory