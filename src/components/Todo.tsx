import React from 'react'
import { styled } from 'styled-components'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <TodoContiner>
      
        <TodoForm/>
        <TodoList/>

    </TodoContiner>
  )
}

export default Todo

const TodoContiner= styled.div`
    width: 40%;
    height: 85%;
    border: 1px solid red;
    ${props => props.theme.FlexCol};
    align-items: center;
    gap: 20px 0;
    /* 모바일 뷰일때  */
    @media screen and (max-width: 650px) {
      width: 100%;
      height: 90vh;
      
    }
`;