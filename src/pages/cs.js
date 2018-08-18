import React from 'react'
import Link from 'gatsby-link'
import CSPage from '../templates/base-category'

const CSIndexPage = ({data}) => (
  <CSPage posts={data}/>
)


export const query = graphql`
  query CSIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "cs"}}
      }
    ) {
        edges {
          node {
            id
            frontmatter {
              title
              date (formatString: "MMMM DD, YYYY")
              category
              excerpt
            }
            fields {
              slug
            }
          }
        }
      }
  }
`

export default CSIndexPage;
