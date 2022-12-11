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
    <div className='px-[15%] pt-20 pb-24'>
        <div className="work-history">
            <h2 className='text-4xl font-bold text-black/70 flex items-center gap-x-10'>My Recent Work</h2>

            <div className="mt-14">

              <div className="mt-10 flex flex-col gap-y-24">
                {
                  projects.map((project,i)  =>
                    <div key={project.id} className="bg-slate-50 py-10 rounded-lg w-[900px] mx-auto relative shadow-2xl pr-5">
                    <p className='text-[80px] absolute right-4 -top-14 font-bold text-white project-number'>0{i+1}</p>
                      <div className="flex project items-center">
                        <p className=' text-black/80 technology text-white whitespace-nowrap text-xs'>{project.tec}</p>
                        <div className="w-[300px] flex-shrink-0 ml-20 border rounded-xl">
                          <img className='w-full rounded-xl' src={project.img} alt="" />
                        </div>
                        <div className="ml-5">
                          <h2 className='text-2xl font-bold text-black/70'>{project.name}</h2>
                          <p className='mt-4 text-black/60 text-justify text-sm leading-[160%]'>
                            {project.des}
                          </p>
                          <Link to={`project/${project.id}`}>
                            <button className='border-2 border-primary hover:bg-primary text-primary hover:text-white transition duration-400 ease-in-out font-semibold hover:font-normal px-8 py-2 mt-5 w-fit rounded-md text-sm' project={project}>More Details</button>
                          </Link>
                        </div>
                      </div>
                  </div>  
                  )
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects