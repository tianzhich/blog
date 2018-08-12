import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/React-icon.svg'
import githubLink from '../images/external-link-symbol.svg'

const StyledHeader = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  & a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }
  & img {
    margin-bottom: 0;
  }
  
  @media (min-width: 780px) {
    & {
      width: 90%;
    }
  }
`

const StyledNav = styled.nav`
  display: flex;
  width: 40%;
  margin-left: 10%;

  & > a{
    padding: 0 15px;
    font-weight: 300;
  }
  & > a:active {
    &::after {
      position: absolute;
      bottom: -1px;
      height: 4px;
      background: #61dafb;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
`

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  & > img+span {
    color: #61dafb;
    font-weight: 600;
    font-size: 1.1rem;
  }
`

const GithubLink = styled.a`
  margin-left: 10%;

  & > img {
    fontSize: '0.8rem';
    padding-left: 10px;
  }
`
const FriendLink = styled.div`
  cursor: pointer;

  & > span {
    color: #ffffff;
    font-weight: 300;
  }
  & > div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    line-height: 20px;
  }
  &:hover {
    & > span {
      color: #61dafb;
    }
    & > div {
      display: block;
    }
  }
  & a {
    float: none;
    color: black;
    padding: 10px 12px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  & a:hover {
    color: #61dafb;
  }
`

const Header = () =>
  <StyledHeader>
    <HomeLink to="/">
      <img src={logo} alt="" height="30" />
      <span>React</span>
    </HomeLink>
    <StyledNav>
      <Link to='/' is>前端学习</Link>
      <Link to='/' >计算机</Link>
      <Link to='/' >算法</Link>
    </StyledNav>
    <FriendLink>
      <span href="#">友情链接</span>
      <div>
        <a href="#">小泽的博客</a>
        <a href="#">Ting的博客</a>
      </div>
    </FriendLink>
    <GithubLink href="https://github.com/tianzhich" target="_blank" >
      Github
        <img src={githubLink} alt="" height="15" />
    </GithubLink>
  </StyledHeader>

export default Header
