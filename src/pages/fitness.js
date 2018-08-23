import React from 'react'
import Fitness, {filterPosts} from '../templates/base-category'

const FitnessPage = ({data}) => {
  const allPosts = [{
    name: "fake1",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "fake1")
  }, {
    name: "fake2",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "fake2")
  }, {
    name: "fake3",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "fake3")
  }];

  return <Fitness allPosts={allPosts} />
}


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
              subCategory
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
