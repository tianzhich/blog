import React from 'react'
import Learining from '../templates/base-category'

const LearningPage = ({data}) => (
  <Learining posts={data}/>
)


export const query = graphql`
  query LearningIndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "learning"}}
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

export default LearningPage;
