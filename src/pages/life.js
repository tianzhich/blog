import React from 'react'
import Life from '../templates/base-category'

const LifePage = ({data}) => (
  <Life posts={data}/>
)


export const query = graphql`
  query LifeIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "life"}}
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

export default LifePage;
