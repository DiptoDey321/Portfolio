import { useState } from 'react'

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
                    <ul className='flex flex-col border-[rgb(114,89,204)] gap-y-2 text-sm lg:text-base'>
                        <li onClick={() =>handleTabClick("itransition")} className={`${activeTab === 'itransition' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Itransition</li>
                        <li onClick={() =>handleTabClick("apsis")} className={`${activeTab === 'apsis' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Apsis Solutions Ltd</li>
                        <li onClick={() =>handleTabClick("bysl")} className={`${activeTab === 'bysl' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>BYSL Global Technology</li>
                        {/* <li onClick={() =>handleTabClick("nationwide")} className={`${activeTab === 'nationwide' ? 'btn-active' : ''} py-2 pl-4 cursor-pointer rounded-3xl bg-gray-200`}>Nationwide IT Services, Inc</li> */}
                    </ul>
                </div>
                <div className="details mt-5 md:mt-0">
                {
                        (activeTab === "itransition") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Software Engineer <span className='text-primary '> @Itransition</span></h3>
                            <p className='text-xs text-text/80 mt-1'>January 2024 - Present</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'> Here, I'm working on a cloud-based gaming project where I’m a part of a huge team that is developing a portion of the
 project (a module), and I’m responsible for developing webpages, handling APIs, and front-end functionality using
 Next.js., Tailwind CSS, Storybook, Jest test cases and many more</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Integrated REST APIs for the gaming module, ensuring seamless data flow and reducing page load times by ~25%.</li>
                                <li><span className='font-black'>⮞</span>  Built scalable front-end features with React.js and Socket.io, enabling real-time interaction for multiplayer.</li>
                                <li><span className='font-black'>⮞</span>  Authored Jest test cases, increasing code coverage and minimizing production bugs.</li>
                                <li><span className='font-black'>⮞</span>  Colaborated with backend developers and designers to deliver a smooth, wel-integrated user experience, resulting in higher team efficiency.</li>
                                <li><span className='font-black'>⮞</span>   Analyzed requirements and resolved critical bugs quickly, reducing issue turnaround time and maintaining project
                                deadlines.</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === "apsis") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Associate Software Engineer<span className='text-primary '>@Apsis Solutions Ltd</span></h3>
                            <p className='text-xs text-text/80 mt-1'>March 2023 - December 2023</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'> Here I've worked on a LLM project under the client BATB where my task is to handle al API and front-end functionality using Next.js.</p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Engineered and optimized front-end modules using Next.js, React-Bootstrap, Ant Design, and Socket.io, delivering a responsive and scalable web application.</li>
                                <li><span className='font-black'>⮞</span> Integrated and managed APIs across multiple modules, reducing data-fetch latency and enhancing application reliability.</li>
                                <li><span className='font-black'>⮞</span>Colaborated with backend developers and UI/UX designers to ensure smooth integration and a consistent user experience across the platform. Colaborated with backend developer & designer for seamless integrations </li>
                                <li><span className='font-black'>⮞</span> Translated client requirements into technical solutions and iteratively implemented feedback, improving client satisfaction and ensuring project alignment with business goals</li>
                            </ul>
                        </div>
                    }
                    {
                        (activeTab === "bysl") &&
                        <div className="border p-5 rounded-lg">
                            <h3 className='font-semibold text-base lg:text-xl'>Executive Software Engineer<span className='text-primary '>@BYSL Global Tecnology Group</span></h3>
                            <p className='text-xs text-text/80 mt-1'>Feb 2022 - Present</p>
                            <p className='text-black/90 mt-4 text-xs lg:text-[15px] leading-[180%]'> On my first Project, I worked on a SaaS-based web application that included 5 modules (Mail Communication, cloud based storage management, platform for online meeting, office management, instant chatting and caling app). After completing the first project, I worked on the company's in-house web application </p>
                            <ul className='ml-1 flex flex-col gap-y-3 mt-3 text-black/80 font-light text-[11px] lg:text-sm'>
                                <li><span className='font-black'>⮞</span> Implemented front-end development using Angular to deliver responsive solutions across web, tablet, and mobile, ensuring consistent user experiences across devices.</li>
                                <li><span className='font-black'>⮞</span>  Converted Figma designs into production-ready web pages using HTML, TailwindCSS, and TypeScript, accelerating development cycles and maintaining pixel-perfect UI</li>
                                <li><span className='font-black'>⮞</span> Built fu ly dynamic web applications in React and Next.js, leveraging TailwindCSS and React-Bootstrap to create optimized, scalable solutions.</li>
                            </ul>
                        </div>
                    }
                    {/* {
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
                    } */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkingHistory