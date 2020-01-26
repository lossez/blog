import React from "react"
import Header from "./header"
import { useStaticQuery, graphql } from 'gatsby'
import "./layout.css"
import { Icon } from 'antd'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
    
      site{
        siteMetadata {
          title
        }
      }
  
    }
    `
    
    )
  return (
    <>
      <Header/>
      <div className={`bg-cover bg-red-100 p-4 lg:p-16`}>
        <main>{children}</main>   
      </div>
      <footer className = {`border-t border-gray-200 w-full bottom-0 p-6`} >
        <div className="flex justify-center">
           <Icon type = "facebook" className = {`mr-5 text-2xl text-blue-800 hover:bg-blue-600`}/>
           <Icon type ="instagram" className = {`mr-5 text-2xl text-pink-700`}/> 
           <Icon type ="twitter" className = {`mr-5 text-2xl text-blue-400`}/> 
           <Icon type ="youtube" className = {`mr-5 text-2xl text-red-700`}/> 
           
        </div>
        <div className = {
          `mt-2 text-sm text-gray-600 pt-2 text-center tracking-widest`
        } > copyright &copy; {new Date().getFullYear()} - {data.site.siteMetadata.title}. All right reserved 
        </div> 
      </footer>  

    </>
  )
}


export default Layout
