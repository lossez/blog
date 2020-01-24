import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={`text-2xl text-semibold py-1 border-b-2 border-gray-200`}>Example Title Post</h1>
    <p className={`text-base py-1`}>Rayha - January, 24  2020</p>
    <div className={`bg-cover relative`}>
      <Image/>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
