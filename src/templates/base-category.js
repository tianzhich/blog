import styled from 'styled-components'
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const StyledSection = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: flex;
`

const PostListWrapper = styled.div`
  & > ul {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    flex-direction: column;
  }
`

const StyledAside = styled.aside`
  position: fixed;
`

const PostList = styled.li`
  border-top: 1px dotted rgb(236, 236, 236);
  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  border-top: 1px dotted rgb(236, 236, 236);

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

const TemplatePage = ({ posts }) => {
  console.log(posts);
  return (
    <StyledSection>
      <PostListWrapper>
        <ul>
          {
            !posts ? null :
            posts.allMarkdownRemark.edges.map(({ node }) =>
              <PostList key={node.id}>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <Excerpt>{node.excerpt}</Excerpt>
                <Date>{node.frontmatter.date}</Date>
              </PostList>
            )
          }
        </ul>
      </PostListWrapper>
      <StyledAside>

      </StyledAside>
    </StyledSection>
  );
}

export default TemplatePage;