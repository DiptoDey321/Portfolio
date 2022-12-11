import { list } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Component/Shared-component/Footer';
import Header from '../Component/Shared-component/Header'

function ProjectDetails() {
    const {id} = useParams()
    const [projects , setProjects] = useState([]);
    useEffect(()=>{
        fetch('../project.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    const project = projects.find(project => project?.id == id);
    console.log(project);
  return (
    
    <div>
      <div className="mx-[15%] mt-10">
        <Header></Header>
        <div className="mt-10 pb-28">
            <h2 className='text-2xl font-semibold'>Know more about <span className='text-emerald-500'>{project?.name}</span></h2>
            <p className='mt-5 text-sm text-black/80 text-justify'>{project?.des}</p>
            <p className='mt-2 text-sm text-black/80 text-justify'>{project?.moreDetails}</p>
            <h3 className='text-xl mt-10 text-black/50 font-semibold'>Projects Top features :</h3>
            <ul className='list-disc ml-5 mt-3'>
                {
                    project?.KeyPoint?.map(point  =>
                        <li className='text-sm my-2 text-black/80'>{point}</li>
                    )
                }
            </ul>

            <h3 className='text-xl mt-10 text-black/50 font-semibold'>Some UI & Functionality's :</h3>
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    project?.images?.map(img =>
                        <div className="mt-10">
                            <img className='rounded-[10px]' src={img} alt="" srcset="" />
                        </div> 
                    )
                }
            </div>
            <div className="buttons flex justify-around mt-10">
                <a href={project.clientRipo}  target='_blank '> <button className='px-5 py-2 bg-primary text-white rounded-md'>Client Ripositories </button></a>
                <a href={project?.liveLInk} target='_blank '><button className='px-5 py-2 bg-primary text-white rounded-md'>Live Website</button></a>
                <a href={project.serverRipo}  target='_blank '> <button className='px-5 py-2 bg-primary text-white rounded-md'>Server Ripositories</button></a>
            </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProjectDetails