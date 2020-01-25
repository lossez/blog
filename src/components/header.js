import { Link } from "gatsby"
import React, { useState } from "react"
import Image from "gatsby-image"
import { graphql , useStaticQuery } from 'gatsby'

const Header = () => {
 const [isExpanded, toggleExpansion] = useState(false)
 const data = useStaticQuery(graphql`
   query logoQuery {
     logo: file(absolutePath: {
       regex: "/logo.png/"
     }) {
       childImageSharp {
         fixed(width: 215, height: 56) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)

  return (
    <nav className="container mx-auto font-fredoka flex items-center justify-between flex-wrap bg-white p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
         <Link to="/"><Image fixed={data.logo.childImageSharp.fixed}/></Link>  
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-4 py-3 bg-transparent border rounded text-black border-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
         <div className={`text-sm lg:flex-grow`}></div>
        <div>
          <Link to="/" className={`
            font-medium text-xl rounded-full block lg:inline-block lg:mt-0 text-red-500 no-underline px-3 py-1 mt-2 lg:px-3 lg:py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>Home</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block lg:inline-block lg:mt-0 text-red-500 no-underline px-3 py-1  lg:px-3 lg:py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>News</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block lg:inline-block lg:mt-0 text-red-500 no-underline px-3 py-1  lg:px-3 lg:py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>About</Link>
          <Link to="/" className={`
            font-medium text-xl rounded-full block lg:inline-block lg:mt-0 text-red-500 no-underline px-3 py-1  lg:px-3 lg:py-2 hover:bg-red-500 hover:text-white hover:font-extrabold focus:bg-red-500 focus:text-white focus:font-extrabold
          `}>Contact</Link>
        </div>
      </div>
    </nav>
)}

export default Header
