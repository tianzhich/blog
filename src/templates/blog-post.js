import React from "react";
import styled from 'styled-components'
import "katex/dist/katex.min.css"
import './blog-post.scss'
import ContentsNav from '../components/contentsNav'

const Body = styled.div`
  display: flex;

  article {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    justify-content: flex-start;
    align-items: stretch;
    padding-left: 30px;
    margin-left: -30px;
    padding-right: 30px;
    margin-right: -30px;
    overflow: hidden;

    header {
      h1 {
        margin-bottom: 0;
        padding-bottom: 0;
        border: none;
      }
      div {
        margin-top: 15px;
      }
      p {
        margin-top: 30px;
        color: #6d6d6d;
        margin-bottom: 0;
      }
    }
  }
`

export default class extends React.Component  {
  render() {
    const post = this.props.data.markdownRemark;
    const contents = this.props.data.markdownRemark.frontmatter.contents
    return (
      <Body>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <div>{`${post.frontmatter.date} by Tian Zhi`}</div>
            <p>{post.frontmatter.excerpt}</p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <ContentsNav contents={contents} />
      </Body>
    );
  }
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date (formatString: "MMMM DD, YYYY")
        excerpt
        contents {
          text
          subContents {
            text
          }
        }
      }
    }
  }
`;