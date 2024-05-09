import React, { useState } from 'react'

function WorkingHistory() {
    const [activeTab, setActiveTab] = useState('itransition')
    const handleTabClick = e =>{
        setActiveTab(e)
    }
  return (
    <div className='px-[3%] sm:px-[3%] md:px-0 lg:px-0 2xl:px-[8%] pt-20 pb-5'>
        <div className="">
            <p className='text-xl font-semibold text-black/70 pb-3 border-b-emerald-50 tracking-wider text-center md:text-left'>Where I've Worked Till Now</p>
            {/* <p>A short description about my work & the company's that i have worked till now</p> */}
            <div className="flex flex-col md:flex-row gap-x-10 mt-5 items-center md:items-start">
                <div className="flex-shrink-0 w-[250px] sm:w-[300px]">
                    <ul className='flex flex-col border-[rgb(114,89,204)] gap-y-1 text-sm lg:text-base'>
                        <li onClick={() =>handleTabClick("itransition")} className={`${activeTab === 'itransition' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Itransition</li>
                        <li onClick={() =>handleTabClick("apsis")} className={`${activeTab === 'apsis' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Apsis Solutions Ltd</li>
                        <li onClick={() =>handleTabClick("bysl")} className={`${activeTab === 'bysl' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>BYSL Global Technology</li>
                        <li onClick={() =>handleTabClick("nationwide")} className={`${activeTab === 'nationwide' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Nationwide IT Services, Inc</li>
                    </ul>
                </div>
                <div className="details mt-5 md:mt-0">
                {
                        (activeTab === "itransition") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Software Engineer <span className='text-primary '> @Itransition</span></h3>
                            <p className='text-xs text-text/80 mt-1'>January 2024 - Present</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'>Here I'm working on Cloud based gaming project where my task is to develop the design, handle all API, Working on previous code and front-end functionality using React.js & Tailwind css</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Development of the Cloud base gaming platform using React.JS, Tailwind, socket.io & lots more technologies</li>
                                <li><span className='font-black'>⮞</span> Handling all of the API, Functionality & ensuring the optimization of webpages.</li>
                                <li><span className='font-black'>⮞</span> Understand requirements & working on their feedback parallelly </li>
                                <li><span className='font-black'>⮞</span> working with semantic and adaptive layout development</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === "apsis") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Associate Software Engineer<span className='text-primary '>@Apsis Solutions Ltd</span></h3>
                            <p className='text-xs text-text/80 mt-1'>March 2023 - December 2023</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'>Working as a Front-end developer in a SaaS based web application which include 5module (Mail Communication, cloud based storage management, platform for online meeting & office management , instant chatting & calling app)</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Development of the web application using NEXT.JS, react-bootstrap, Antd & socket.io</li>
                                <li><span className='font-black'>⮞</span> Handling all of the API and ensuring the optimization of webpages.</li>
                                <li><span className='font-black'>⮞</span> Understand client requirements & working on their feedback parallelly </li>
                                <li><span className='font-black'>⮞</span> working with semantic and adaptive layout development</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === "bysl") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Frontend Developer <span className='text-primary '>@BYSL Global Tecnology Group</span></h3>
                            <p className='text-xs text-text/80 mt-1'>Feb 2022 - Present</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'>Working as a Front-end developer in a SaaS based web application which include 5module (Mail Communication, cloud based storage management, platform for online meeting & office management , instant chatting & calling app)</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Front-End Development in Angular Framework (For web, Tablet and mobile responsive)</li>
                                <li><span className='font-black'>⮞</span> Web-page conversion(FIGMA to HTML, Tailwind CSS, and Typescripts)</li>
                                <li><span className='font-black'>⮞</span> working with semantic and adaptive layout development</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === 'nationwide') &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Frontend Developer <span className='text-primary '>@Nationwide IT Services, Inc</span></h3>
                            <p className='text-xs text-text/80 mt-1'>April 2021 - January 2022</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'>Was a part of the web programming team where my task was to develop web-pages in react and make it fully functional and dynamic according to the Figma/Adobe design</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
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