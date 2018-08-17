import React from "react";
import styled from 'styled-components'
import "katex/dist/katex.min.css"
import './blog-post.scss'

const Body = styled.div`
  display: flex;

  & > div {
    @media (min-width: 780px) {
      width: 90%;
    }
    @media (min-width: 1340px) {
      max-width: 1260px;
    }
    width: 100%;
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
    overflow-x: hidden;
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
    opacity: 0;
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
      margin-left: 0;

      li {
        margin-top: 5px;
        a {

        }
      }
    }
  }
`

const ContentsTitle = styled.div`
  margin-top: 10px;
  color: #6d6d6d;
  font-size: 14px;
  font-weight: 700;
  line-height: 3;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  svg {
    margin-left: 7px;
    transform: rotateY(180deg);
  }

  @media (min-width: 600px) {
    color: #1a1a1a;
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
                      <ContentsTitle>
                        Fake Contents
                        <svg viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="10" height="10" ><g transform="translate(904.92214,-879.1482)"><path d="
                            m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                            -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                            0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                            -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                            -174.68583 0.6895,0 26.281,25.03215 56.8701,
                            55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                            -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                            -104.0616 -231.873,-231.248 z
                            " fill="currentColor"></path></g>
                        </svg>
                      </ContentsTitle>
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