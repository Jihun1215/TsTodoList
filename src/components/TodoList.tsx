import React from 'react'
import { styled } from 'styled-components'

const TodoList = () => {
  return (
    <TodolistContiner>TodoList</TodolistContiner>
  )
}

export default TodoList

const TodolistContiner= styled.div`
    width: 40%;
    height: 80%;
    border: 1px solid red;
`;