import React from "react";
import styled from 'styled-components'
import "katex/dist/katex.min.css"

const Body = styled.div`
  display: flex;

  & > div {
    @media (min-width: 780px) {
      width: 90%;
    }
    @media (min-width: 1340px) {
      max-width: 1260px;
    }
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Wrapper = styled.div`
  display: flex;

  article {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    justify-content: flex-start;
    align-items: stretch;
  }

  aside {
    @media (min-width: 600px) {
      margin-left: 80px;
      border-left: 1px solid rgb(236, 236, 236);
    }
    @media (max-width: 1339px) and (min-width: 600px) {
      margin-left: 80px;
      flex: 0 0 200px;
    }
    @media (max-width: 979px) and (min-width: 600px) {
      margin-left: 40px;
    }
    @media (min-width: 1100px) {
      flex: 0 0 300px
    }
  }
`

const ContentsWrapper = styled.div`
  height: calc(100vh - 60px);

  @media (max-width: 599px) {
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    background-color: rgb(255, 255, 255);
    z-index: 2;
    height: 100vh;
    overflow-y: auto;
    pointer-events: none;
  }
  @media (min-width: 600px) {
    position: fixed;
    z-index: 2;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f7f7f7;
    opacity: 1 !important;
  }
  @media (max-width: 779px) and (min-width: 600px) {
    height: calc(100vh - 40px);
  }
  @media (max-width: 1279px) and (min-width: 780px) {
    height: calc(100vh - 50px);
  }
`

const Contents = styled.div`
  margin-top: 60px;

  @media (max-width: 599px) and (min-width: 0px) {
    margin-top: 40px;
  }
  @media (max-width: 979px) and (min-width: 600px) {
    margin-top: 0;
  }
  @media (max-width: 1279px) and (min-width: 780px) {
    margin-top: 50px;
  }

  nav {
    width: 100%;
    padding-left: 20px;
    position: relative;

    ul {
      list-style: none;
      margin-bottom: 10px;

      li {
        margin-top: 5px;
        a {

        }
      }
    }
  }
`

const FloatButton = styled.div`

`

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Body>
      <div>
        <Wrapper>
          <article>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
          <aside>
            <div>
              <ContentsWrapper>
                <Contents>
                  <nav>
                    <div>
                      <span>Fake Contents</span>
                      <ul>
                        <li >
                          <a href="#">React v16.4.2: Server-side vulnerability fix</a>
                        </li>
                        <li >
                          <a href="#"><span></span>You Probably Don't Need Derived State</a>
                        </li>
                        <li >
                          <a href="#">React v16.4.0: Pointer Events</a>
                        </li>
                        <li >
                          <a href="#">React v16.3.0: New lifecycles and context API</a>
                        </li>
                        <li >
                          <a href="#">Update on Async Rendering</a>
                        </li>
                        <li >
                          <a href="#">Sneak Peek: Beyond React 16</a>
                        </li>
                        <li >
                          <a href="#">Behind the Scenes: Improving the Repository Infrastructure</a>
                        </li>
                        <li >
                          <a href="#">Introducing the React RFC Process</a>
                        </li>
                        <li >
                          <a href="#">React v16.2.0: Improved Support for Fragments</a>
                        </li>
                        <li >
                          <a href="#">React v16.0</a>
                        </li>
                        <li >
                          <a href="#">All posts ...</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </Contents>
              </ContentsWrapper>
              <FloatButton />
            </div>
          </aside>
        </Wrapper>
      </div>
    </Body>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;