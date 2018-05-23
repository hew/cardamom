import React from 'react'
import styled from 'styled-components'
// import { width, space } from 'styled-system'

const Button = styled.button`
  padding: 0 24px;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  color: #edf9f4;
  text-transform: uppercase;
  border-radius: 2px;
  font-family: 'roboto', sans-serif;
  font-weight: 600;
  font-size: 80%;
  height: 44px;
  line-height: 40px;
  border: 2px solid transparent;
  transition: all 260ms ease-in-out;
  background-color: ${props => props.bgColor || 'black'};
  background: ${props => props.bgColor || 'black'};
  border-color: ${props => props.borderColor || 'transparent'};
  color: ${props => props.color || 'white'};

  :hover {
    outline: 0;
    color: ${props => props.hoverColor || 'white'};
    background-color: ${props => props.hoverBgColor || 'black'};
    border-color: ${props => props.hoverBorderColor || 'black'};
  }

  :focus {
    outline: 0;
  }
`

export default Button

export const Secondary = ({ children, ...props }) => (
  <Button 
    color={color.blue} 
    bgColor="#fff" 
    hoverColor="white" 
    hoverBgColor={color.blue} 
    borderColor={color.blue} 
    hoverBorderColor={color.blue}
  >
    {children}
  </Button>
)
