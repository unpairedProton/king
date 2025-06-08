import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Story from '../pages/Story'
import Release from '../pages/Release'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/story' element={<Story/>}></Route>
        <Route path='/release' element={<Release/>}></Route>
        
    </Routes>
  )
}

export default Routing