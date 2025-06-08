import React from 'react'
import Navbar from '../components/Navbar.jsx'
import StoryImg from '../components/StoryImg.jsx'
import StoryText from '../components/StoryText.jsx'


const Story = () => {

  return (
    <div className='bg-zinc-900 w-full h-fit lg:h-full flex flex-col relative p-4 lg:p-0'>
      <Navbar />


      <main   className='w-full  h-fit lg:h-[95vh] flex flex-col-reverse lg:flex-row overflow-hidden  gap-8 lg:gap-0'> 
        <section  className='lg:w-[70%] w-full lg:overflow-y-auto custom-scrollbar px-4'>
          <StoryImg />
        </section>
        <section className='lg:w-[25%] w-full'>
          <StoryText />
        </section>
      </main>
    </div>
  )
}

export default Story