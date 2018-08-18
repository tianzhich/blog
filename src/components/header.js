import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/React-icon.svg'

const StyledHeader = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  align-items: center;

  @media (max-width: 599px) {
    height: 40px;
  }
  @media (max-width: 1279px) and (min-width: 600px) {
    height: 50px;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover, &:active {
      color: #61dafb;
      text-decoration: none;
    }
  }
`

const HomeLink = styled(Link)`
  display: flex;
  margin-right: 10px;
  height: 100%;
  align-items: center;

  @media (max-width: 599px) {
    flex: 0 0 auto;
  }

  @media (min-width: 600px) {
    width: calc(100% / 6);
  }
  

  img {
    margin-bottom: 0;
  }

  span {
    color: #61dafb;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 20px;
    line-height: 20px;
    margin-left: 10px;

    @media (max-width: 599px) {
      position: absolute;
      overflow: hidden;
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
    }
    @media (max-width: 979px) {
      font-size: 16px;
      margin-top: 1px;
    }
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  flex-grow: 1;

  @media (max-width: 599px) {
    mask-image: -webkit-linear-gradient(to right, transparent, black 20px, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
  }
  @media (max-width: 599px) and (min-width: 0px) {
    flex-grow: 1;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    transition: color 0.2s ease-out;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 300;
    white-space: nowrap;

    @media (max-width: 599px) and (min-width: 0px) {
      padding-left: 8px;
      padding-right: 8px;
    }
    @media (max-width: 979px) and (min-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (min-width: 1280px) {
      padding-left: 20px;
      padding-right: 20px;
      font-size: 18px;
    }
  }
`


const FriendLink = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-width: 100px;
  color: #ffffff;
  font-weight: 300;
  transition: color 0.2s ease-out;

  @media (max-width: 979px) {
    margin-right: 10px;
  }

  @media (min-width: 600px) {
    width: calc(100%/12);
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }

  div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 120px;
    height: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    line-height: 20px;
    bottom: -80px;
  }

  &.clicked {
    color: #61dafb;
    div {
      display: block;
    }
  }

  &:hover {
    color: #61dafb;
    div {
      display: block;
    }
  }

  a {
    float: none;
    color: black;
    padding: 10px 12px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: color 0.2s ease-out;
  }
  a:hover {
    color: #61dafb;
  }
`

const GithubLink = styled.div`
  text-align: center;

  @media (max-width: 779px) {
    display: none;
  }

  @media (min-width: 980px) {
    width: calc(100% / 6);
  }

  a {
    padding: 5px 10px;
    margin-left: 10px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 100;
    color: rgba(255,255,255,.9);
    text-decoration: none;
    transition: color 0.2s ease-out;
    svg {
      margin-left: 5px;
      vertical-align: -2px;
      color: #6d6d6d;
    }
  }
`

class Header extends React.Component {

  showFriendLinks = (e) => {
    this.toggleBtn.classList.add('clicked');
    e.nativeEvent.stopImmediatePropagation();
  }

  hideFriendLinks = () => {
    this.toggleBtn.classList.remove('clicked');
  }

  componentDidMount() {
    document.addEventListener('click', this.hideFriendLinks)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideFriendLinks);
  }

  render() {
    return (
      <StyledHeader>
        <HomeLink to="/">
          <img src={logo} alt="" height="20" />
          <span>React</span>
        </HomeLink>
        <StyledNav>
          <Link to='/fed' >前端学习</Link>
          <Link to='/cs' >计算机</Link>
          <Link to='/algorithm'>算法</Link>
        </StyledNav>
        <FriendLink
          onClick={this.showFriendLinks}
          innerRef={ele => this.toggleBtn = ele}
        >
          友情链接
          <div>
            <a href="https://best921.github.io/">小泽的博客</a>
            <a href="https://takikuzhu.github.io/">Ting的博客</a>
          </div>
        </FriendLink>
        <GithubLink>
          <a href="https://github.com/tianzhich" target="_blank" >
            Github
            <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" >
              <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
              </path>
              <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
              </polygon>
            </svg>
          </a>
        </GithubLink>
      </StyledHeader>
    );
  }
}

export default Header;
