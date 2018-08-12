import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import styled from 'styled-components'
import heartLogo from '../images/valentines-heart.svg'

const StyledHeader = styled.header`
  background: #20232a;
  margin-bottom: 1.45rem;
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
`

const StyledContent = styled.div`
  margin-top: 50px;
`

const StyledFooter = styled.div`
  height: 50px;
  width: 100%;
  background: #20232a;
  color: #ffffff;
  & img {
    margin-bottom: 0;
  }
  & p {
    line-height: 50px;
    margin-bottom: 0;
    text-align: center;
  }
  & a {
    color: inherit;

    &:hover {
      text-decoration: none;
      color: #61dafb
    }
  }
`

const Layout = ({ children, data }) => (
  <div>
    <StyledHeader>
      {/* <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      /> */}
      <Header siteTitle={data.site.siteMetadata.title} />
    </StyledHeader>
    <StyledContent>
      {children()}
    </StyledContent>
    <StyledFooter>
      <div>
        <p>
          {`Powered with `}<img src={heartLogo} alt="" height="15" />{` by `}
          <a href="https://www.gatsbyjs.org/" >Gatsby</a>
        </p>
        </div>
    </StyledFooter>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
