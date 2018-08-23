import React from 'react'
import Fitness from '../templates/base-category'

const FitnessPage = ({data}) => (
  <Fitness posts={data}/>
)


export const query = graphql`
  query FitnessIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "fitness"}}
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

export default FitnessPage;
