import React from 'react'
import Learining, {filterPosts} from '../templates/base-category'

const LearningPage = ({ data }) => {
  const allPosts = [{
    name: "前端开发",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "前端开发")
  }, {
    name: "计算机原理",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "计算机原理")
  }, {
    name: "算法",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "算法")
  }];

  return <Learining allPosts={allPosts}/>
}


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
              subCategory
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
