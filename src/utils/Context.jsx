import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const ContextSong = createContext();

const Context = (props) => {
    const [songPlay, setSongPlay] = useState('https://www.youtube.com/embed/clkf1ODI9I4')
  return (
    <ContextSong.Provider value={{songPlay, setSongPlay}}>
      {props.children}
    </ContextSong.Provider>
  )
}

export default Context