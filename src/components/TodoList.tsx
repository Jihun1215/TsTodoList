import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Button } from '../element/Button';
// import { Data,  } from '../tododata';
import Todo from './Todo';
import { Item } from '../types/type';





const TodoList = () => {
  // 오늘 저장된 리스트를 가지고 오기 위한 로컬스토리지 키 값
  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const todoListGet = localStorage.getItem(ThisDay);
  const todoData = todoListGet ? JSON.parse(todoListGet) : [];
  



  return (
    <TodoListContiner>
      <Todo />
    </TodoListContiner>
  )
}

export default TodoList

const TodoListContiner = styled.div`
    width: 95%;
    height: 100%;
    border: 1px solid red;
    ${props => props.theme.FlexCol};
    align-items: center;
`;

