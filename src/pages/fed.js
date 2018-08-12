import React from 'react'
import Link from 'gatsby-link'
import FedPage from './template'

const FedIndexPage = ({data}) => (
  <FedPage posts={data}/>
)


export const query = graphql`
  query FedIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "fed"}}
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
            excerpt
          }
        }
      }
  }
`

export default FedIndexPage;
