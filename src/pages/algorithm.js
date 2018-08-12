import React from 'react'
import Link from 'gatsby-link'
import AlgorithmPage from '../templates/base-category'

const AlgorithmIndexPage = ({data}) => (
  <AlgorithmPage posts={data}/>
)


export const query = graphql`
  query AlgorithmIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "algorithm"}}
      }
    ) {
        edges {
          node {
            id
            frontmatter {
              title
              date (formatString: "MMMM DD, YYYY")
              category
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
  }
`

export default AlgorithmIndexPage;
