import React from 'react';
import styled from 'styled-components';
import ActionButton from './actionButton'

const Aside = styled.aside`
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
`

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-right: 999px;
  margin-right: -999px;

  @media (max-width: 599px) {
    transition: opacity 0.5s ease;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    background-color: rgb(255, 255, 255);
    z-index: ${props => props.isActive ? 1 : -1};
    height: 100vh;
    overflow-y: auto;
    opacity: ${props => props.isActive ? 1 : 0};

    & + div.action-button {
      display: block;
    }
  }
  @media (min-width: 600px) {
    position: fixed;
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

const ContentsWrapper = styled.div`
  margin-top: 60px;
  transform: translateY(0);
  transition: transform 0.5s ease;

  @media (max-width: 599px) {
    margin-top: 40px;
    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(40px)'};
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

    @media (min-width: 1100px) {
      padding-left: 40px;
    }
  }
`

const Title = styled.div`
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

const Contents = styled.ul`
  transition: border 0.2s ease;
  list-style: none;
  margin-bottom: 10px;
  margin-left: 0;

  & > li {
    margin-top: 10px;
    margin-bottom: 0;
  }

  a {
    color: #1a1a1a;
    display: inline-block;
    transition: border 0.2s ease;
    text-decoration: none;
    &:hover {
      color: #6d6d6d;
      outline-width: 0;
    }
  }

  a::before {
    width: 4px;
    height: 25px;
    content: '';
    border-left: 4px solid #61dafb;
    padding-left: 16px;
    position: absolute;
    left: 0;
    visibility: hidden;

    @media (min-width: 1100px) {
      left: 15px;
    }
  }

  a.active {
    font-weight: 700;

    &:hover {
      color: #6d6d6d;
    }

    &::before {
      visibility: visible;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 0px;
    margin-top: 0;
    margin-left: 20px;
     
    li {
      margin-bottom: 0;
    }
  }
`

export default class ContentsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      itemOffsets: [],
      isButtonActive: false
    }
  }

  getContentsArray(contents) {
    let temp = [];
    contents.forEach(mainContent => {
      temp.push(mainContent.text);
      if (mainContent.subContents) {
        temp = [...temp, ...mainContent.subContents.map(subContent => subContent.text)];
      }
    });
    return temp;
  }

  getItemOffsets(contentsArray) {
    return contentsArray.map(content => {
      return {
        id: content,
        offsetTop: this.findOffsetById(content)
      }
    });
  }

  findOffsetById(id) {
    return document.getElementById(id) ? document.getElementById(id).offsetTop : -1;
  }

  onScroll = () => {
    let itemOffsets = this.state.itemOffsets;
    let activeItem = itemOffsets.find((item, i) => {
      let nextItem = itemOffsets[i+1];
      return nextItem ? window.scrollY >= item.offsetTop && window.scrollY < nextItem.offsetTop : 
        window.scrollY >= item.offsetTop;
    });

    // 滑动到底时，不让scroll事件修改activeItem，转交给click事件
    if(window.scrollY + window.innerHeight === document.body.offsetHeight) {
      return;
    }

    this.setState({
      activeItem: activeItem ? `#${activeItem.id}` : ''
    });
  }

  /** 
   * 最后想了想还是需要这个函数。因为滑到底时，如果还有多个heading(也就是多个item)，此时不能再往下滑
   * 滑动事件监听不到，后面几个item的样式无法改变。而一开始使用的是hashchange和click，
   * 但是这两个事件都发生在scroll事件之前，滑动根本不可能检测到它，scroll会覆盖之前的改变
   * 后面想到可以判断是否滑到到底部，如果是，则scroll事件中不去setState，从而让click事件生效
   **/
  toggleActiveItem = (activeItem) => {
    this.setState({
      activeItem
    })
  }

  componentDidMount() {
    // contents需要由层次结构转换成数组形式，方便查找id
    this.setState({
      itemOffsets: this.getItemOffsets(this.getContentsArray(this.props.contents)),
      activeItem: decodeURIComponent(window.location.hash)
    });

    // 监听滚动事件，动态改变目录栏按钮
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  toggleActionButton = () => {
    this.setState(prevState => ({
      isButtonActive: !prevState.isButtonActive
    }));
  }

  render() {
    const contents = this.props.contents;
    return (
      <Aside>
        <div>
          <Wrapper isActive={this.state.isButtonActive}>
            <ContentsWrapper isActive={this.state.isButtonActive}>
              <nav>
                <div>
                  <Title>
                    Contents
                    <svg viewBox="0 0 926.23699 573.74994" version="1.1" width="10" height="10" >
                      <g transform="translate(904.92214,-879.1482)">
                        <path d="
                          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                          -174.68583 0.6895,0 26.281,25.03215 56.8701,
                          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                          -104.0616 -231.873,-231.248 z" fill="currentColor">
                        </path>
                      </g>
                    </svg>
                  </Title>
                  <Contents>
                    {
                      contents.map(content => 
                        <li key={content.text}>
                          <a href={`#${content.text}`}
                            onClick={() => this.toggleActiveItem(`#${content.text}`)}
                            className={this.state.activeItem === `#${content.text}` ? 'active' : ''}>
                            {content.text}
                          </a>
                          {
                            content.subContents ? 
                            <ul>
                              {
                                content.subContents.map(subContent => 
                                  <li key={subContent.text}>
                                    <a href={`#${subContent.text}`}
                                      onClick={() => this.toggleActiveItem(`#${subContent.text}`)}
                                      className={this.state.activeItem === `#${subContent.text}` ? 
                                      'active' : ''}>
                                      {subContent.text}
                                    </a>
                                  </li>
                                )
                              }
                            </ul> : null
                          }
                        </li>
                      )
                    }
                  </Contents>
                </div>
              </nav>
            </ContentsWrapper>
          </Wrapper>
          <ActionButton 
            toggleActionButton={this.toggleActionButton} 
            isActive={this.state.isButtonActive} />
        </div>
      </Aside>
    );
  }
}