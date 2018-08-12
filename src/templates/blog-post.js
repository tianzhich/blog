import React from "react"; 
import styled from 'styled-components'

const PostWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PostWrapper>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostWrapper>
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