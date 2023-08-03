import React from 'react'
import { styled } from 'styled-components'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoBox = () => {
  return (
    <TodoContiner>
      <TodoForm />
      <TodoList />
    </TodoContiner>
  )
}

export default TodoBox

const TodoContiner = styled.div`
    width: 500px;
    height: 100%;
    ${props => props.theme.FlexCol};
    align-items: center;
    gap: 20px 0;
    /* 모바일 뷰일때  */
    @media screen and (max-width: 650px) {
      height: 90vh;
    }
`;