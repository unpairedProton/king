import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/king_logo2.png'


const Navbar = () => {
  return (
    
         <div className=" flex justify-between p-2 px-3 h-8 items-center relative z-30 bg-transparent">
        <Link to={'/'} className="w-6 md:w-8 ">
          <img className="w-full aspect-square" src={logo} alt="" />
        </Link>
        <Link
          to="/menu"
          className="NavText small cursor-pointer "
        >
          Menu
        </Link>
      </div>
    
  )
}

export default Navbar