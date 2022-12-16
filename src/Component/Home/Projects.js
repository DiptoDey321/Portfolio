import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const [projects , setProjects] = useState([]);
  useEffect(()=>{
    fetch('project.JSON')
    .then(res => res.json())
    .then(data => setProjects(data))
  },[])

  console.log(projects);

  return (
    <div className='px-[5%] sm:px-[10%] xl:px-[15%] pt-10 sm:pt-20 pb-24'>
        <div className="work-history">
            <h2 className='text-2xl whitespace-nowrap sm:text-4xl font-bold text-black/70 flex items-center gap-x-4  md:gap-x-10'>My Recent Work</h2>

            <div className="mt-5 sm:mt-14">

              <div className="mt-10 flex flex-col gap-y-24">
                {
                  projects.map((project,i)  =>
                    <div key={project.id} className="bg-slate-50 py-10 rounded-lg w-full lg:w-[800px] xl:w-[900px] mx-auto relative shadow-2xl pr-0 sm:pr-5">
                      <p className='text-[60px] sm:text-[80px] absolute right-4 -top-8 sm:-top-14 font-bold text-white project-number'>0{i+1}</p>
                      <div className="flex flex-col lg:flex-row project items-center py-5 sm:py-0">
                        <p className=' text-black/80 technology text-white whitespace-nowrap text-xs hidden lg:block'>{project.tec}</p>
                        <div className="max-w-[300px] flex-shrink-0 ml-0 md:ml-20 border sm:rounded-xl">
                          <img className='w-full sm:rounded-xl' src={project.img} alt="" />
                        </div>
                        <div className="ml-5 mr-5 md:mr-0 mt-5 md:mt-0">
                          <h2 className='text-2xl font-bold text-black/70'>{project.name}</h2>
                          <p className='mt-4 text-black/60 text-justify text-sm leading-[160%]'>
                            {project.des}
                          </p>
                          <Link to={`project/${project.id}`}>
                            <button className='border-2 border-primary hover:bg-primary text-primary hover:text-white transition duration-400 ease-in-out font-semibold hover:font-normal px-8 py-2 mt-5 w-fit rounded-md text-sm'>More Details</button>
                          </Link>
                        </div>
                      </div>
                  </div>  
                  )
                }
              </div>

             
                <p className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center text-lg text-black/80 ">
                  <span>What to see more ? </span>
                  <span className="flex items-center">
                    <a href="mailto:diptodey2005@gmail.com">
                      <button className="text-primary flex items-center gap-x-1 mx-2 text-base">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 19C13 18.66 13.04 18.33 13.09 18H4V8L12 13L20 8V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19ZM20 6L12 11L4 6H20ZM20 22V20H16V18H20V16L23 19L20 22Z" fill="#018358"/>
                          </svg>
                          Email me
                      </button>
                    </a>
                    or 
                    <a href="https://github.com/diptodey321/" target="_blank ">
                      <button className="text-primary flex items-center gap-x-1 mx-2 text-base">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z" fill="#018358"/>
                        </svg>
                        Visit Github
                      </button>
                    </a>
                  </span>
                </p>

            </div>
        </div>
    </div>
  )
}

export default Projects