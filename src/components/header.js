import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"

const Header = () => {
  return(
  <header className = {
      `w-full font-fredoka bg-white
    items-center jutify-between border-b border-gray-200 sticky top-0 p-4             
  `}>
    <div className={`
      flex container mx-auto flex-wrap xl:px-12
    `}
    >
      <div className={`flex items-center flex-shrink-0 mr-6`}>
          <Link to="/"> <img src = {logo} alt=""/></Link>  
      </div>
      <div className={`
        w-full block flex-grow lg:flex lg:items-center lg:w-auto
      `}>
        <div className={`text-sm lg:flex-grow`}></div>
        <div>
          <Link to="/" className={`
            font-medium text-xl rounded-full block mt-4 lg:inline-block lg:mt-0 text-red-500 px-3 py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>Home</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block mt-4 lg:inline-block lg:mt-0 text-red-500 px-3 py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>News</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block mt-4 lg:inline-block lg:mt-0 text-red-500 px-3 py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>About</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block mt-4 lg:inline-block lg:mt-0 text-red-500 px-3 py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>Contact</Link>
        </div>
      </div>
    </div>
  </header>
)}

export default Header
