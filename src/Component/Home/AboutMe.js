import React from 'react'
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
        courseName : "JavaScript",
        courseImg : 'https://i.ibb.co/MZ8TSS3/js.png'
    },
    {
        courseName : "MongoDB",
        courseImg : 'https://i.ibb.co/hLwpmPm/mongodb.png'
    },
    {
        courseName : "Firebase",
        courseImg : 'https://i.ibb.co/ysprm8T/firebase.png'
    },
    {
        courseName : "Node.js",
        courseImg : 'https://i.ibb.co/JBr1c5L/nodeks.png'
    },
    {
        courseName : "BootStrap5",
        courseImg : 'https://i.ibb.co/gSp5H9Z/bootstrap.png'
    },
    {
        courseName : "Html5",
        courseImg : 'https://i.ibb.co/QKmRJhc/react.png'
    },
    {
        courseName : "CSS3",
        courseImg : 'https://i.ibb.co/Ns1T8j2/css.png'
    },
    {
        courseName : "Tailwind",
        courseImg : 'https://i.ibb.co/bNXXdfD/tailwind.png'
    },
    
    {
        courseName : "JQuery",
        courseImg : 'https://i.ibb.co/0K7HvLZ/html5.png'
    }
]

function AboutMe() {
  return (
    <div className='about-me px-[15%] bg-slate-50 pt-20 pb-24'>
        <h2 className='text-4xl font-bold text-black/70 flex items-center gap-x-10'>About me</h2>
        <div className="flex items-start gap-x-10 mt-14">
            <div className="w-[50%]">
                <p className='text-black/80 text-justify leading-[200%]'>Hello, I am Dipto Dey and i am a Frontend engineer developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.Utter my under graduation degree in the CSE field from United International University. Having professional 2 years of experience in Web Development.Here are a few technologies I've been working with recently: </p>
                <button className='border-2 border-primary hover:bg-primary text-primary hover:text-white transition duration-400 ease-in-out font-semibold hover:font-normal px-10 py-3 rounded-lg mt-8'>Contact me</button>
            </div>
            <div className="w-[50%]">
                <div className="flex gap-3 flex-wrap">
                    {
                        expertises.map((expertise,i) => 
                            <div key={i} className="flex items-center gap-x-3 shadow-lg pl-2 pr-5 py-2 rounded-[5px]">
                                <img className='w-8' src={expertise.courseImg} alt="" srcSet="" />
                                <span>{expertise.courseName}</span>
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