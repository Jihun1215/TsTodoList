import React from 'react'
import styled, { css } from "styled-components";
import { toUp } from '../styles/Animation';

// ButtonProps 타입 정의
type InputProps = {
  children: string,
  sm?: boolean,
}


// export const Button = ({ children, ...props }:ButtonProps) => {
//   return  <BtnStyle {...props}>{children}</BtnStyle>
  
// }


export const Input = ({ children, ...props }:InputProps) => {
  return (
    <InputStyle {...props}>{children}</InputStyle>
  )
}

const InputStyle = styled.input<InputProps>`
  width: 3rem;
  height: 2rem;
  border-radius: .625rem;
  border: none;
  outline: none;
  background: #5c7cfa;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${toUp} 0.25s ease-in-out;
  ${(props) =>
    props.sm &&
    css`   

        width: 4.6875rem;
        height: 1.875rem;
    `};
`;