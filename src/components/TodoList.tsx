import React from 'react'
import { styled } from 'styled-components'
import { Button } from '../element/Button'

const TodoList = () => {
  return (
    <TodolistContiner>
        <Button >버튼</Button>
        <Button sm>버튼</Button>
        <Button me>버튼</Button>
        <Button lg>버튼</Button>
        <Button xlg>버튼</Button>
    </TodolistContiner>
  )
}

export default TodoList

const TodolistContiner= styled.div`
    width: 40%;
    height: 80%;
    border: 1px solid red;
    > button{
        margin-top: 20px;
    }
    /* 모바일 뷰일때  */
    @media screen and (max-width: 650px) {
      width: 100%;
      height: 90vh;
      
    }
`;