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
            <article key = {
              node.fields.slug
            }
            className = {
              `rounded overflow-hidden shadow bg-white xl:px-8 xl:pb-6 px-4 py-4 font-sans mb-10`
            } >
              <header>
                <div className={`border-b-2 border-gray-200 `}>
                  <h2>
                    <Link className={`text-black no-underline font-black`} to={node.fields.slug}>{title}</Link>
                  </h2>  
                </div>
                <small>{node.frontmatter.date}</small>
              </header>
              <div className={`py-2`}>
                <Image fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
              </div>
              <section>
                <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt}}/>
              </section>
              <div className={`-mt-4`}>
                 <Link to={node.fields.slug} className={`no-underline text-red-500 font-bold`}>Continue reading</Link>
              </div>
            </article>  
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
                fluid(maxWidth: 900) {
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