import React from 'react';
import styled, { css } from 'styled-components';
import { toUp } from '../styles/Animation';

// ButtonProps 타입 정의
type ButtonProps = {
  children: string;
  type?: string;
  onClick?: any;
  // disabled: string;
  opacity?: string;
  size?: "sm" | "me" | "lg"  // 새로운 size 속성 추가
  isfalse?: boolean;
  istrue?: boolean;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <BtnStyle {...props}>{children}</BtnStyle>;
};

const BtnStyle = styled.button<ButtonProps>`
  width: 90%;
  height: 3.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  ${props => props.theme.DisFlexCenter};
  background-color: ${props => props.theme.colorTheme.primary_heavy};
  /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px; */
  animation: ${toUp} 0.25s ease-in-out;
  ${(props) =>
    props.opacity &&
    css`   
     opacity: 0.5;
     background-color:  ${props => props.theme.colorTheme.primary_normal};
    `};
    ${(props) =>
    props.size === "sm" &&
    css`
      width: 4.6875rem;
      height: 1.875rem;
      ${props.theme.Text_400_12}
    `};
  ${(props) =>
    props.size === "me" &&
    css`
      width: 9.375rem;
      height: 2.5rem;
      ${props.theme.Text_700_16}
    `};
  ${(props) =>
    props.size === "lg" &&
    css`
      width: 12.5rem;
      height: 2.8125rem;
      font-size: 16px;
      ${props.theme.Text_700_16}
    `};
  ${(props) =>
    props.isfalse &&
    css`   
        width: 4.6875rem;
        height: 1.875rem;
        ${props => props.theme.Text_400_12}
        background-color: ${props => props.theme.colorTheme.skyblue};
    `}; 
  ${(props) =>
    props.istrue &&
    css`   
        width: 4.6875rem;
        height: 1.875rem;
        ${props => props.theme.Text_400_12}
        background-color: ${props => props.theme.colorTheme.red};
    `}; 
`;
