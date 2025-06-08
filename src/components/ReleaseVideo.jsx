import React from 'react'
import { useContext } from 'react'
import { ContextSong } from '../utils/Context.jsx'




const ReleaseVideo = () => {

    const {songPlay} = useContext(ContextSong)
    console.log('songPlay', songPlay);
    
  return (
    <section className='w-full h-full flex justify-center items-center p-8' >
    <div className="aspect-video w-full mx-auto">
      <iframe
        width="100%"
        height="100%"
        src={`${songPlay}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </section>
  )
}

export default ReleaseVideo