import React from "react";
import Navbar from "./Navbar.jsx";
import ReleaseList from "./ReleaseList.jsx";
import ReleaseVideo from "./ReleaseVideo.jsx";

const Release = () => {
  return (
    <div className='bg-zinc-900 w-full h-full flex flex-col relative  '>
      <Navbar />
      <main   className='w-full h-[95vh] flex overflow-hidden flex-col-reverse lg:flex-row '> 
        <section  className='flex-1 overflow-y-auto custom-scrollbar'>
          <ReleaseList />
        </section>
        <section className='w-full lg:w-[65%]'>
          <ReleaseVideo />
        </section>
      </main>
    </div>
  );
};

export default Release;
