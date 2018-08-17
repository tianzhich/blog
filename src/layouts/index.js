import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import styled from 'styled-components'
import heartLogo from '../images/valentines-heart.svg'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledHeader = styled.header`
  background-color: #20232a;
  color: #ffffff;
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  left: 0;

  & > div {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 780px) {
      width: 90%;
    }
    @media (min-width: 1340px) {
      max-width: 1260px;
    }
  }
`

const StyledBody = styled.div`
  margin-top: 60px;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 1279px) and (min-width: 780px) {
    margin-top: 50px;
  }
  @media (max-width: 779px) {
    margin-top: 40px;
  }
`

const StyledFooter = styled.div`
  height: 50px;
  width: 100%;
  background: #20232a;
  color: #ffffff;
  z-index: 3;

  & img {
    margin-bottom: 0;
  }
  & p {
    line-height: 50px;
    margin-bottom: 0;
    text-align: center;
  }
  & a {
    color: #61dafb;

    &:hover {
      text-decoration: none;
    }
  }
`

const Layout = ({ children, data }) => (
  <StyledContainer>
    <StyledHeader>
      {/* <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      /> */}
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
    </StyledHeader>
    <StyledBody>
      {children()}
    </StyledBody>
    <StyledFooter>
      <div>
        <p>
          {`Powered with `}<img src={heartLogo} alt="" height="15" />{` by `}
          <a href="https://www.gatsbyjs.org/" >Gatsby</a>
        </p>
      </div>
    </StyledFooter>
  </StyledContainer>
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
