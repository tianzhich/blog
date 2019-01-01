import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import './index.scss'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png';
import './prism.css'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  background-color: #20232a;
  color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

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
  display: flex;

  @media (max-width: 1279px) and (min-width: 780px) {
    margin-top: 50px;
  }
  @media (max-width: 779px) {
    margin-top: 40px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`

const BodyLayout = styled.div`
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
`

const StyledFooter = styled.div`
  height: 50px;
  width: 100%;
  background: #20232a;
  color: #ffffff;
  position: relative;

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
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <StyledHeader>
      <Header siteTitle={data.site.siteMetadata.title} />
    </StyledHeader>
    <StyledBody>
      <Wrapper>
        <BodyLayout>
          {children()}
        </BodyLayout>
      </Wrapper>
    </StyledBody>
    <StyledFooter>
      <div>
        <p>
          {`Feel free to leave me a message `}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.719 492.719" height="15px">
            <g>
              <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569    c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178    l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553    C474.988,241.811,492.719,206.017,492.719,166.008z" fill="#FFFFFF" />
            </g>
          </svg>
          <a href="https://github.com/tianzhich" target="_blank"> @tianzhich </a>
        </p>
      </div>
    </StyledFooter>
  </StyledContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
