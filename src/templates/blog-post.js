import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
         const {
             previous,
             next
         } = this.props.pageContext
        return(
        <Layout>
            <div className={`rounded border shadow px-4 bg-white`}>
                
            <SEO 
                title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}
            />
            <acticle className={'bg-black'}>
                <header>
                    <div className={`border-b-2 py-2 text-xl font-semibold`}>
                        <h1>{post.frontmatter.title}</h1>
                    </div>
                    <div className={`py-1`}>
                        {post.frontmatter.date}
                    </div>
                </header>
                <div className={`py-2`}>
                    <Image fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
                </div>
                <section dangerouslySetInnerHTML={{__html: post.html }}></section>
            </acticle>
            <nav>
          <ul className={`mt-2`}
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link className={`text-red-500 hover:text-pink-600`} to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className={`text-red-500 hover:text-pink-600`} to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
            </div>
        </Layout>
        )
       
    }
}

export default BlogPostTemplate

export const pageQuery = graphql `
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
