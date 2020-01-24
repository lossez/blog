import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../images/javascript.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={`text-xl lg:text-2xl text-semibold py-1 border-b-2 border-gray-200`}>Example Title Post</h1>
    <p className={`text-base py-1`}>Rayha - January, 24  2020</p>
    <div className={`bg-center bg-cover py-2`}>
     <img src={Image} alt=""/>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
  </Layout>
)

export default IndexPage
