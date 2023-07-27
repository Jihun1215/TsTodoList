import React from 'react'
import styled, { css, keyframes }  from 'styled-components'

// ButtonProps 타입 정의
type ButtonProps = {
  children: string,
  sm?: boolean,
  me?: boolean,
  lg?: boolean,
  xlg?: boolean,
}


export const Button = ({ children, ...props }:ButtonProps) => {
  return  <BtnStyle {...props}>{children}</BtnStyle>
  
}

// 아래에서 위로 등장하는 듯한 애니메이션 
const toUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(50%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const BtnStyle = styled.button<ButtonProps>`
  width: 90%;
  height: 3.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  ${props => props.theme.DisFlexCenter};
  background-color: ${props => props.theme.colorTheme.orange};
  animation: ${toUp} 0.25s ease-in-out;
  ${(props) =>
    props.sm &&
    css`   
        width: 4.6875rem;
        height: 1.875rem;
    `};
    ${(props) =>
    props.me &&
    css`   
        width: 9.375rem;
        height: 2.5rem;
    `}; 
    ${(props) =>
    props.lg &&
    css`   
        width: 12.5rem;
        height: 2.8125rem;
    `}; 
    ${(props) =>
    props.xlg &&
    css`   
        width: 4.6875rem;
        height: 1.875rem;
    `}; 
  /* &:hover {
    filter: brightness(10%);
  } */
`;