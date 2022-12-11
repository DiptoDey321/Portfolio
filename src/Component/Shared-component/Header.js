import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header({openNavbar}) {
  const [showMenu,setShowMenu] = useState(false);
  const body = document.querySelector('body');

    const handleMenu = () =>{
      setShowMenu(true);
      body.classList.add('overflow-hidden');
    }

    const closeMenu = () =>{
      body.classList.remove('overflow-hidden');
      setShowMenu(false);
    }
  return (
    
    <header id="header-nav" className="bg-[#ffffff] top-0 z-30 rounded-[10px]">
        <nav className="rounded-[10px]">
            <div className='rounded-[10px]'>
              <div className="header-shadow rounded-[10px] shadow-2xl h-24 flex items-center justify-between px-10">
                <div className="logo h-full flex items-center">
                    <img className='h-12' src="https://i.ibb.co/jVh8NgW/Dipto-Dey.png" alt="" srcSet="" />
                </div>
                <div className="menu flex gap-x-2 items-center font-bold text-black/80">
                  <span>MENU</span>
                  <button onClick={handleMenu}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.9999 11H10.9999V12H24.9999V11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28.9999 18H6.99988V19H28.9999V18Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24.9999 25H10.9999V26H24.9999V25Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>  
                  </button>
                </div>
              </div>
            </div>
            <div className={`${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} nav-items bg-[#F8F8F8] fixed top-0 left-0 w-full h-screen transition-all duration-300`}>
                <div className="flex h-full">
                    <div className={`${showMenu ? 'top-0 opacity-100' : '-top-1/2 opacity-0'} left-half w-full sm:w-1/2 flex items-center justify-center sm:border-r transition-all duration-300 ease-in-out relative `}>
                        <div id="nav-option">
                                <ul className="text-[32px] md:text-[42px] lg:text-[48px] xl:text-[40px] 2xl:[64px] leading-[150%] font-semibold text-black/70 flex flex-col gap-y-[24px] sm:gap-y-[38px] md:gap-y-[48px] lg:gap-y-[64px] text-center sm:text-left">
                                    <li onClick={closeMenu}><Link to='/'>Home</Link></li>
                                    <li onClick={closeMenu}><Link to='/contact'>Contact</Link></li>
                                    <li onClick={closeMenu}><Link to='/blog'>Recent Blog</Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className={`${showMenu?'top-0 opacity-100':'top-1/2 opacity-0'}right-half w-full sm:w-1/2 sm:flex items-center justify-center transition-all duration-300 ease-in-out relative `}>
                        <div id="nav-description" className="sm:full md:w-[598px] px-5">
                            <div className="flex items-center justify-center">
                              <img className="md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[70%]" src="https://i.ibb.co/7yVy1r8/a2.png" alt=""/>
                            </div>
                            <p className="flex gap-x-2 text-sm mt-5">
                                <span className="text-primary">#Dipto_Dey</span>
                                <span className="text-text">|</span>
                                <span className="text-text-60">Modern Front End Developer</span>
                            </p>
                            <h4 className="sm:text-[20px] md:text-[22px] lg:text-[26px] 2xl:text-[28px] font-bold mt-5 md:mt-4 lg:mt-5 text-text">Nulla facilisi. Pellentes dui ligula, varius non dignissim id, elementum in sem. Suspendisse quis risus tincidunt.</h4>
                        </div>
                    </div>
                </div>
                <div className="absolute top-5 right-10">
                  <button onClick={closeMenu} className='border-2'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.125 11.875L11.875 28.125M11.875 11.875L28.125 28.125" stroke="#838383" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div> 
            </div>
        </nav>
    </header>
  )
}

export default Header