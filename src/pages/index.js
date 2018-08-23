import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const AboutMe = styled.div`
  width: 3000px;
  height: 300px;
  background-color: #61dafb;
  margin-left: -1000px;
`

const PostListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: -40px;
  }
  
`

const PostList = styled.li`
  border-top: 1px dotted rgb(236, 236, 236);
  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  border-top: 1px dotted rgb(236, 236, 236);

  @media (min-width: 980px) {
    width: 33.33%;
  }
  @media (max-width: 979px) and (min-width: 780px) {
    width: 50%;
  }

  & > h2 {
    font-size: 24px;
    color: rgb(40, 44, 52);
    line-height: 1.3;
    font-weight: 700;
    border-bottom: none;
    & > a {
      border-bottom: 1px solid rgb(236, 236, 236);
      text-decoration: none;
      color: inherit;

      &:hover {
        border-bottom-color: rgb(0, 0, 0);
      }
    }
  }
}
`

const Excerpt = styled.div`
  color: rgb(109, 109, 109);
  margin-top: -5px;
`

const Date = styled.div`
  color: rgb(109, 109, 109);
  font-size: 14px;
  font-weight: 700;
  line-height: 3;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const IndexPage = ({ data }) => {
  return (
    <div>
      <AboutMe />
      <PostListWrapper>
        <ul>
          {
            data.allMarkdownRemark.edges.map(({ node }) =>
              <PostList key={node.id}>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <Excerpt>{node.frontmatter.excerpt}</Excerpt>
                <Date>{node.frontmatter.date}</Date>
              </PostList>
            )
          }
        </ul>
      </PostListWrapper>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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

export default IndexPage
