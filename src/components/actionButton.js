import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #20232a;
  bottom: 44px;
  color: #61dafb;
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 3;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  & > div {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`

const IconWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    width: 20px;
    height: 20px;
    align-items: center;
  }

  svg:nth-child(1) {
    transform: rotateZ(180deg) translateY(4px);
    transition: transform 0.2s ease;

    &.active {
      transform: rotateZ(180deg) translateY(-8px);
    }
  }

  svg:nth-child(2) {
    transform: translateY(4px);
    transition: transform 0.2s ease;

    &.active {
      transform: translateY(-8px);
    }
  }
`

const ActionButton = ({isActive, toggleActionButton}) =>
  <Wrapper onClick={toggleActionButton} className='action-button'>
    <div>
      <IconWrapper>
        <div>
          <svg className={isActive ? 'active' : ''} viewBox="0 0 926.23699 573.74994" version="1.1" width="15" height="15">
            <g transform="translate(904.92214,-879.1482)">
              <path d="m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,-55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,-174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,-174.68583 0.6895,0 26.281,25.03215 56.8701,55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864 -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688, -104.0616 -231.873,-231.248 z" fill="currentColor">
              </path>
            </g>
          </svg>
          <svg className={isActive ? 'active' : ''} viewBox="0 0 926.23699 573.74994" version="1.1" width="15" height="15">
            <g transform="translate(904.92214,-879.1482)">
              <path d="m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,-55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,-174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,-174.68583 0.6895,0 26.281,25.03215 56.8701,55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864 -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,-104.0616 -231.873,-231.248 z" fill="currentColor">
              </path>
            </g>
          </svg>
        </div>
      </IconWrapper>
    </div>
  </Wrapper>

export default ActionButton;