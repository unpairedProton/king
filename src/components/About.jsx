import React from 'react'
import AboutImg from './AboutImg.jsx'
import AboutText from './AboutText.jsx'
import Navbar from './Navbar.jsx'

const About = () => {
  return (
    <div className='bg-zinc-900 w-full h-full flex flex-col relative'>
    <Navbar />
    <div className='w-full h-fit lg:h-full flex flex-col lg:flex-row bg-zinc-900 p-4 py-8 justify-between gap-6' >
      
        <div className='w-full  lg:w-[25vw] h-[100vh] lg:h-full flex items-start justify-center'>
            <AboutImg />
        </div>
        <div className=' w-full flex-1 lg:h-full flex items-start justify-center -mt-30 lg:mt-0'>
            <AboutText />
        </div>
        

    </div>
    </div>
  )
}

export default About