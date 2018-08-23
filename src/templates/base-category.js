import styled from 'styled-components'
import React from 'react'
import Link from 'gatsby-link'

export const filterPosts = (data, key) => {
  return data.filter(({ node }) => {
    return node.frontmatter.subCategory === key;
  })
}

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Wrapper = styled.div`
  h1 {
    border-bottom: none;
  }
`

const PostListWrapper = styled.div`
  width: 100%;

  & > ul {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin-left: -40px;
    margin-bottom: 0;
  }

  & > h1 {
    color: rgb(40, 44, 52);
    margin-right: 5%;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    border-bottom: 0;
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

const TemplatePage = ({ allPosts }) => {
  return (
    <StyledSection>
      {
        allPosts.map(({ name, posts }) =>
          posts.length === 0 ? null : 
          <Wrapper key={name}>
            <h1>{name}</h1>
            <PostListWrapper>
              <ul>
                {
                  posts.map(({ node }) =>
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
          </Wrapper>
        )
      }
      <StyledAside>

      </StyledAside>
    </StyledSection>
  );
}

export default TemplatePage;