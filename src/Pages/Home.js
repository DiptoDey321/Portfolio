import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import AboutMe from '../Component/Home/AboutMe'
import Banner from '../Component/Home/Banner'
import Projects from '../Component/Home/Projects'
import Footer from '../Component/Shared-component/Footer'

function Home() {
  return (
    <div>
        <div className="z-[9990]">
            <Banner></Banner>
        </div>
       <div className="">
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Footer></Footer>
          <ScrollToTop smooth />
       </div>
    </div>
  )
}

export default Home