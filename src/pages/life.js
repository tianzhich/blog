import React from 'react'
import Life, { filterPosts } from '../templates/base-category'

const LifePage = ({ data }) => {
  const allPosts = [{
    name: "工作学习",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "工作学习")
  }, {
    name: "年终总结",
    posts: !data.allMarkdownRemark ? [] :
      filterPosts(data.allMarkdownRemark.edges, "年终总结")
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
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
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
