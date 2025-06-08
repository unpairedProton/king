import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Menu from '../components/Menu'
import About from '../components/About'
import Story from '../components/Story'
import Release from '../components/Release'


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