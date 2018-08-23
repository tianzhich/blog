import React from 'react'
import Life, { filterPosts } from '../templates/base-category'

const LifePage = ({ data }) => {
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

  return <Life allPosts={allPosts} />
}


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

export default LifePage;
