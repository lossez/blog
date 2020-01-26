import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Image from 'gatsby-image'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Home"/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="inline-flex">

            <article key = {
              node.fields.slug
            }
            className = {
              `max-w-full md:max-w-xs md:mr-2 lg:max-w-sm lg:mr-4 max-h-screen rounded shadow bg-white  mb-4`
            }>
               <Image fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
               <div className="px-6 py-4">
                 <div className="font-bold text-xl ">
                   <Link className={`text-black no-underline font-black`} to={node.fields.slug}>{title}</Link>
                  </div>
                  <div className="text-base text-gray-800 mb-2">
                    <small>{node.frontmatter.date}</small>
                  </div>
                  <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt}}/>
               </div>
               <div className="px-6 py-4 -mt-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tutorial</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#nodejs</span>
               </div>
            </article>  
            </div>
          )
        })}
      </Layout>
    )
  }
}


export default IndexPage

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 315) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`