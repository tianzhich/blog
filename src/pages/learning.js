import React from 'react'
import Learining, { filterPosts } from '../templates/base-category'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query LearningIndexQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { category: { eq: "learning" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
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
    `}
    render={data => {
      const allPosts = [
        {
          name: '前端开发',
          posts: !data.allMarkdownRemark
            ? []
            : filterPosts(data.allMarkdownRemark.edges, '前端开发'),
        },
        {
          name: '计算机原理',
          posts: !data.allMarkdownRemark
            ? []
            : filterPosts(data.allMarkdownRemark.edges, '计算机原理'),
        },
        {
          name: '算法',
          posts: !data.allMarkdownRemark
            ? []
            : filterPosts(data.allMarkdownRemark.edges, '算法'),
        },
      ]
      return <Learining allPosts={allPosts} />
    }}
  />
)
