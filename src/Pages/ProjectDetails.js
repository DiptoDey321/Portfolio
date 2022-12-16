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
      <div className="mx-[5%] 2xl:mx-[15%] mt-10">
        <Header></Header>
        <div className="mt-10 sm:mt-20 pb-28">
            <h2 className='text-xl sm:text-3xl text-black/80 font-semibold'>Know more about <span className='text-emerald-500'>{project?.name}</span></h2>
            <p className='mt-5 text-sm md:text-base text-black/70 text-justify'>{project?.des}</p>
            <p className='mt-2 hidden lg:block sm:text-base text-black/70 text-justify'>{project?.moreDetails}</p>
            <div className="flex justify-center">
                <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start md:items-center gap-x-5 mt-14 2xl:justify-start">

                    <div className="w-full xl:w-[60%] mt-10 sm:mt-0">
                        <h3 className='text-2xl text-black/50 font-semibold'>Projects Top features :</h3>
                        <ul className='list-disc ml-5 mt-5'>
                            {
                                project?.KeyPoint?.map(point  =>
                                    <li className='text-xs md:text-sm my-2 text-black/80'>{point}</li>
                                )
                            }
                        </ul>
                        <div className="buttons flex flex-wrap gap-5 mt-5 justify-center sm:justify-start md:justify-start 2xl:justify-center">
                            <a href={project?.liveLInk} target='_blank '>
                                <button className='text-primary rounded-md text-sm flex items-center gap-x-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.525 18.0234C9.19167 18.24 8.854 18.2524 8.512 18.0604C8.17067 17.869 8 17.5734 8 17.1734V6.82337C8 6.42337 8.17067 6.12737 8.512 5.93537C8.854 5.74404 9.19167 5.7567 9.525 5.97337L17.675 11.1484C17.975 11.3484 18.125 11.6317 18.125 11.9984C18.125 12.365 17.975 12.6484 17.675 12.8484L9.525 18.0234ZM10 15.3484L15.25 11.9984L10 8.64837V15.3484Z" fill="#018358"/>
                                    </svg>
                                    Live Website
                                </button>
                            </a>
                            <a href={project?.clientRipo}  target='_blank '>
                                <button className='text-primary rounded-md text-sm flex items-center gap-x-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z" fill="#018358"/>
                                    </svg>
                                    Client Ripositories
                                </button>
                            </a>
                            <a href={project?.serverRipo}  target='_blank '> 
                                <button className=' text-primary rounded-md text-sm flex items-center gap-x-3'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z" fill="#018358"/>
                                    </svg>
                                    Server Ripositories
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[90%] sm:w-[40%] sm:hidden lg:block flex justify-center">
                        <img className='rounded-lg border' src={project?.img1} alt="" srcset="" />
                    </div>
                </div>
            </div>
            

            <h3 className='text-xl mt-20 text-black/50 font-semibold'>Some UI & Functionality's :</h3>
            <div className="flex gap-5 flex-col ui-functionality mx-0 lg:mx-[10%]">
                {
                    project?.imgDes?.map(content =>
                        <div className="mt-10 flex flex-col md:flex-row items-center border rounded-[10px] w-full lg:w-[900px] ui-box p-5 md:p-0">
                            <img className='rounded-[10px] border' src={content?.featureImg} alt="" srcset="" />
                            <div className="px-2 sm:px-10 mt-5 md:mt-0 ">
                                <p className='text-sm sm:text-xl md:text-sm font-semibold text-black/80'>{content?.featureTitle}</p>
                                <p className='text-xs sm:text-base text-justify mt-5 text-black/70'>{content?.featureDes}</p>
                            </div>
                        </div> 
                    )
                }
            </div>
            
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProjectDetails