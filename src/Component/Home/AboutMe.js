import React from 'react'
import { Link } from 'react-router-dom'
import WorkingHistory from './WorkingHistory'


// https://i.ibb.co/XxNqpXg/a3.png
// https://i.ibb.co/7yVy1r8/a2.png
// https://i.ibb.co/H7xZTHN/a1.png


const expertises =[
    {
        courseName : "React",
        courseImg : 'https://i.ibb.co/QKmRJhc/react.png'
    },
    {
        courseName : "Next.js",
        courseImg : 'https://i.ibb.co/GF26xBD/nextjs-icon-512x512-11yvtwzn.png'
    },
    {
        courseName : "JavaScript",
        courseImg : 'https://i.ibb.co/MZ8TSS3/js.png'
    },
    {
        courseName : "TypeScript",
        courseImg : 'https://i.ibb.co/MZ8TSS3/js.png'
    },
    {
        courseName : "Node.js",
        courseImg : 'https://i.ibb.co/JBr1c5L/nodeks.png'
    },
    {
        courseName : "MongoDB",
        courseImg : 'https://i.ibb.co/hLwpmPm/mongodb.png'
    },
    {
        courseName : "Github",
        courseImg : 'https://i.ibb.co/w78qw3c/github.png'
    },
    {
        courseName : "Html5",
        courseImg : 'https://i.ibb.co/h9SchpY/images.png'
    },
    {
        courseName : "CSS3",
        courseImg : 'https://i.ibb.co/p1LxVzT/css.png'
    },
    {
        courseName : "Antd",
        courseImg : 'https://i.ibb.co/RDySm2h/ant-design.png'
    },
    {
        courseName : "Framer Motion",
        courseImg : 'https://i.ibb.co/3d5YkX7/framer-motion.png'
    },
    {
        courseName : "Tailwind",
        courseImg : 'https://i.ibb.co/bNXXdfD/tailwind.png'
    },
    {
        courseName : "BootStrap5",
        courseImg : 'https://i.ibb.co/gSp5H9Z/bootstrap.png'
    },
    {
        courseName : "Firebase",
        courseImg : 'https://i.ibb.co/ysprm8T/firebase.png'
    },
    {
        courseName : "JQuery",
        courseImg : 'https://i.ibb.co/0K7HvLZ/html5.png'
    }
]

function AboutMe() {
  return (
    <div className='about-me px-[5%] sm:px-[10%] lg:px-[10%] bg-slate-50 pt-10 sm:pt-20 pb-24'>
        <h2 className='text-2xl whitespace-nowrap sm:text-4xl font-bold text-black/70 flex items-center gap-x-5 md:gap-x-10'>About me</h2>
        <div className="flex flex-col md:flex-row items-start gap-x-10 mt-7 sm:mt-14">
            <div className="w-full md:w-[50%]">
                <p className='text-black/80 text-justify leading-[150%] md:leading-[200%] text-sm lg:text-base'>Hello, I am Dipto Dey and i am a Frontend engineer developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.Utter my under graduation degree in the CSE field from United International University. Having professional 2 years of experience in Web Development.Here are a few technologies I've been working with recently: </p>
                <div className="flex justify-center md:justify-start">
                    <Link to='/contact'><button className='border-2 border-primary hover:bg-primary text-primary hover:text-white transition duration-400 ease-in-out font-semibold hover:font-normal px-5 md:px-10 py-2 md:py-3 rounded-lg mt-6 sm:mt-8 text-sm md:text-base'>Contact me</button></Link>
                </div>
            </div>
            <div className="w-full md:w-[50%] mt-8 md:mt-0">
                <h2 className='text-base font-semibold text-primary'>Expertise Area</h2>
                <div className="flex gap-3 flex-wrap mt-8">
                    {
                        expertises.map((expertise,i) => 
                            <div key={i} className="flex items-center gap-x-3 shadow-lg pl-2 pr-5 py-2 rounded-[5px]">
                                <img className='w-4 lg:w-6' src={expertise.courseImg} alt="" srcSet="" />
                                <span className="text-sm lg:text-sm">{expertise.courseName}</span>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>

        <WorkingHistory></WorkingHistory>
    </div>
  )
}

export default AboutMe