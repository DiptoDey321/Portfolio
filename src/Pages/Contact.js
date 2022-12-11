import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <header className='h-28 border-b'>
            <div className="logo h-full items-center mx-[15%] flex justify-between ">
                <img className='h-16' src="https://i.ibb.co/jVh8NgW/Dipto-Dey.png" alt="" srcSet="" />
                <div className="flex gap-x-10">
                    <button>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9974 33.3346C16.2752 33.3346 13.1224 32.043 10.5391 29.4596C7.95573 26.8763 6.66406 23.7235 6.66406 20.0013C6.66406 16.2791 7.95573 13.1263 10.5391 10.543C13.1224 7.95964 16.2752 6.66797 19.9974 6.66797C21.9141 6.66797 23.7474 7.06408 25.4974 7.8563C27.2474 8.64741 28.7474 9.77908 29.9974 11.2513V6.66797H33.3307V18.3346H21.6641V15.0013H28.6641C27.7752 13.4457 26.5602 12.2235 25.0191 11.3346C23.4768 10.4457 21.803 10.0013 19.9974 10.0013C17.2196 10.0013 14.8585 10.9735 12.9141 12.918C10.9696 14.8624 9.9974 17.2235 9.9974 20.0013C9.9974 22.7791 10.9696 25.1402 12.9141 27.0846C14.8585 29.0291 17.2196 30.0013 19.9974 30.0013C22.1363 30.0013 24.0668 29.3902 25.7891 28.168C27.5113 26.9457 28.7196 25.3346 29.4141 23.3346H32.9141C32.1363 26.2791 30.553 28.6819 28.1641 30.543C25.7752 32.4041 23.053 33.3346 19.9974 33.3346Z" fill="#179174"/>
                        </svg>
                    </button>
                    <button className="">
                        <Link to='/'>
                            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7097 6.05203L20.003 16.3454L30.243 6.10536C30.4692 5.86461 30.7417 5.67202 31.0441 5.53913C31.3466 5.40624 31.6727 5.3358 32.003 5.33203C32.7103 5.33203 33.3886 5.61298 33.8887 6.11308C34.3888 6.61318 34.6697 7.29145 34.6697 7.9987C34.6759 8.32564 34.6153 8.6504 34.4915 8.95305C34.3676 9.2557 34.1833 9.52986 33.9497 9.7587L23.5764 19.9987L33.9497 30.372C34.3892 30.802 34.6469 31.3843 34.6697 31.9987C34.6697 32.7059 34.3888 33.3842 33.8887 33.8843C33.3886 34.3844 32.7103 34.6654 32.003 34.6654C31.6632 34.6795 31.3241 34.6227 31.0074 34.4988C30.6906 34.3748 30.4031 34.1864 30.163 33.9454L20.003 23.652L9.73637 33.9187C9.51105 34.1514 9.24188 34.3372 8.94438 34.4654C8.64688 34.5935 8.32694 34.6615 8.00304 34.6654C7.29579 34.6654 6.61752 34.3844 6.11742 33.8843C5.61732 33.3842 5.33637 32.7059 5.33637 31.9987C5.33015 31.6718 5.39081 31.347 5.51462 31.0443C5.63844 30.7417 5.82279 30.4675 6.05637 30.2387L16.4297 19.9987L6.05637 9.62536C5.61686 9.19539 5.35914 8.61313 5.33637 7.9987C5.33637 7.29145 5.61732 6.61318 6.11742 6.11308C6.61752 5.61298 7.29579 5.33203 8.00304 5.33203C8.64304 5.34003 9.25637 5.5987 9.7097 6.05203Z" fill="#179074"/>
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
        <main>
           <div className="flex justify-center items-center">
                <div className="from-body mx-[10%] flex items-center gap-x-20 pb-20">
                    <div className="flex flex-col items-center">
                        <img className='w-[300px]' src="https://i.ibb.co/H7xZTHN/a1.png" alt="" srcSet="" />
                        <h2 className='text-[22px] font-medium text-center mt-20 w-[400px]'>I’m excited to learn about your project. Ready to get started?</h2>
                    </div>

                    <div className="flex justify-center">
                        <form className='w-[500px] mx-auto mt-16 px-10 py-10 rounded-[10px] shadow-2xl flex flex-col gap-y-6' action="">
                            <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">Your Name</label>
                                    <input className='outline-none px-3 py-2 border w-full rounded-md' type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">Email</label>
                                    <input className='outline-none px-3 py-2 border w-full rounded-md' type="text" name="" id="" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">Your Message</label>
                                    <textarea className='outline-none px-3 py-2 border w-full h-[200px]' name="" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className='px-5 py-2 border-2 text-primary border-primary rounded-md text-sm hover:bg-primary hover:text-white transition duration-500 ease-in-out'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </main>
    </div>
  )
}

export default Contact