import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
    width: calc(100% / 4);
  }

  svg {
    min-width: 30px;
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    transition: color 0.2s ease-out;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 300;
    white-space: nowrap;

    @media (min-width: 600px) {
      &::after {
        content: "";
      }
    }

    &.active {
      color: #61dafb;

      ::after {
        position: absolute;
        bottom: -1px;
        height: 4px;
        background: #61dafb;
        left: 0;
        right: 0;
      }
    }

    &:focus {
      outline: 0;
      background-color: #373940;
      color: #ffffff;
    }

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

  @media (max-width: 599px) {
    margin-right: 0;
    min-width: 0;
    margin-left: 10px;
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

  &:hover {
    color: #61dafb;
    div {
      display: block;
    }
  }

  &.clicked {
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
`

const GithubLink = styled.div`
  text-align: center;
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

  @media (max-width: 320px) {
    display: none;
  }

  @media (max-width: 499px) {
    a {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 980px) {
    width: calc(100% / 6);
  }
`

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: ""
    }
  }

  showFriendLinks = (e) => {
    this.toggleBtn.classList.add('clicked');
    e.nativeEvent.stopImmediatePropagation();
  }

  toggleActiveLinks = (category) => {
    this.setState({
      isActive: category
    });
  }

  hideFriendLinks = () => {
    this.toggleBtn.classList.remove('clicked');
  }

  componentDidMount() {
    document.addEventListener('touchend', this.hideFriendLinks)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.hideFriendLinks);
  }

  render() {
    return (
      <StyledHeader>
        <HomeLink to="/" onClick={() => this.toggleActiveLinks('')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.331 331.331" height="30">
            <g>
              <path d="M30.421,317.462l4.422-17.661l-12.194-4.814l-8.376,13.804c0,0,4.618,12.526-0.511,22.539   C13.766,331.331,20.184,320.399,30.421,317.462z M22.229,309.358c1.501-0.615,3.231,0.087,3.851,1.561   c0.625,1.474-0.087,3.171-1.588,3.786c-1.501,0.615-3.231-0.087-3.851-1.561C20.01,311.664,20.723,309.967,22.229,309.358z" fill="#ffffff" />
              <path d="M158.353,112.621c-35.115,28.8-81.086,88.124-120.073,157.423l-0.022-0.027l-6.815,12.026   l7.267,2.796l3.84-10.117c20.799-37.491,77.224-135.4,180.397-200.451c0,0,38.411-22.877,76.256-54.516   c-9.214,7.702-27.391,17.356-37.247,23.584C236.088,59.683,204.166,75.043,158.353,112.621z" fill="#ffffff" />
              <path d="M33.2,215.365c-7.985,28.223-7.528,49.718-4.438,55.625h4.83   c13.337-27.625,77.572-127.693,117.554-159.016c41.424-32.455,73.378-51.339,100.253-65.111   c9.437-4.835,19.118-11.384,27.848-17.949c10.601-8.36,21.348-17.302,30.758-26.053L282.728,20.75L294.89,2.148L271.67,25.759   L286.78,0c-35.746,3.225-68.918,21.109-68.918,21.109c-13.271,15.741-23.959,40.782-23.959,40.782   c-0.37-12.521,8.11-31.481,8.11-31.481c-6.266,2.861-30.073,16.459-30.073,16.459c-11.645,9.66-15.262,35.06-15.262,35.06   c-2.214-10.019,5.526-29.333,5.526-29.333c-33.543,19.32-57.502,52.231-57.502,52.231c-16.584,32.553-2.948,57.953-8.11,51.872   c-5.162-6.081-4.052-28.261-4.052-28.261c-35.017,33.63-38.699,49.724-38.699,49.724c-5.896,14.31-11.058,52.59-11.058,52.59   c-3.318-3.579,0-23.611,0-23.611c-8.479,17.889-4.422,34.701-4.422,34.701C34.309,240.407,33.2,215.365,33.2,215.365z" fill="#ffffff" />
              <path d="M310.01,14.191c0,0-13.483,13.065-30.758,26.053c-27.081,21.359-53.156,38.819-53.156,38.819   C123.945,139.425,67.025,237.932,48.212,271.708h10.002c3.535-2.834,8.844-4.971,31.014-11.389   c28.011-8.11,44.72-25.041,44.72-25.041s-25.553,14.31-37.595,12.88s-28.223,3.1-28.223,3.1s-6.179-2.861,24.291-7.392   s80.596-38.634,80.596-38.634s-19.167,7.87-28.011,7.152c-8.844-0.718-30.714,0-30.714,0c14.495-3.34,28.011-1.43,50.126-9.779   c22.115-8.349,20.886-7.631,20.886-7.631c25.063-8.349,35.474-34.342,35.474-34.342c-4.335,1.67-37.443,5.722-51.176,1.67   c-13.734-4.052-37.132,0-37.132,0c22.115-7.392,27.032-4.052,32.433-4.291c5.406-0.239,22.855,1.191,57.502-10.731   s44.475-26.711,44.475-26.711l-23.366,3.122c15.257-2.567,32.455-12.662,32.455-12.662c-10.568,2.861-27.032,4.291-27.032,4.291   c19.412-4.291,30.225-10.253,30.225-10.253c18.183-13.832,22.36-34.342,22.36-34.342c-25.803,8.822-46.194,4.77-46.194,4.77   c35.387-2.382,45.215-11.449,50.126-13.592c4.917-2.148,6.94-11.03,6.94-11.03c-17.878,6.44-38.15,7.511-38.15,7.511   c21.93-3.399,40.722-14.49,40.722-14.49V32.792c-8.479,4.83-23.399,8.588-23.399,8.588l23.219-15.023   C316.091,18.841,310.01,14.191,310.01,14.191z" fill="#ffffff" />
              <polygon points="23.551,290.571 37.361,296.103 39.933,289.989 26.124,284.458  " fill="#ffffff" />
              <path d="M177.036,285.458c-45.628,21.936-89.462,36.888-147.758,38.846c-5.439,0.185-5.466,5.624,0,5.439   c52.15-1.751,95.543-12.961,137.391-32.575c46.618-21.854,89.435-40.167,147.828-46.39c5.385-0.577,3.095-5.814-2.252-5.243   C260.531,251.051,218.514,265.519,177.036,285.458z" fill="#ffffff" />
            </g>
          </svg>
          <span>TIANZHICH</span>
        </HomeLink>
        <StyledNav>
          <Link to='/learning'
            className={this.state.isActive === "learning" ? "active" : ""}
            onClick={() => this.toggleActiveLinks('learning')}>Learning</Link>
          <Link to='/life'
            className={this.state.isActive === "life" ? "active" : ""}
            onClick={() => this.toggleActiveLinks('life')}>Life</Link>
          <Link to='/fitness'
            className={this.state.isActive === "fitness" ? "active" : ""}
            onClick={() => this.toggleActiveLinks('fitness')}>Fitness</Link>
        </StyledNav>
        <FriendLink
          onTouchEnd={this.showFriendLinks}
          innerRef={ele => this.toggleBtn = ele}
        >
          Friends
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
