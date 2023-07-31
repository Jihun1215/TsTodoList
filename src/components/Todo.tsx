import React, {useEffect, useState} from 'react';
import { styled } from 'styled-components';
// import { TodoDateType } from '../tododata';
import { Button } from '../element/Button';
import { toUp } from '../styles/Animation';
import { Item } from '../types/type';
import { useRecoilState  } from 'recoil';
import { todoItemState } from "../atoms"


interface TodoListBoxProps {
    id: number;
    isDone: boolean;
    children: React.ReactNode;
  }

const Todo= () => {
    const [todoItem , setTodoItem ] = useRecoilState<Item[]>(todoItemState)
    // console.log(todoItem)
  


      // 오늘 저장된 리스트를 가지고 오기 위한 로컬스토리지 키 값
  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const todoListGet = localStorage.getItem(ThisDay);
  const todoData = todoListGet ? JSON.parse(todoListGet) : [];



  const onClickDeleteTodo = (id:number) => {
    const updatedTodoData = todoItem.filter((item:any) => item.itemId !== id);
    setTodoItem(updatedTodoData)
  } 

  const onClickChckeTodo = (id:number) =>{
    const newTodos = todoItem.map((item:any) => {
        if (item.itemId === id) {
            return { ...item, isDone: !item.isDone }
        } else {
            return { ...item }
        }
    })
    // 바뀐부분 재렌더링
    setTodoItem(newTodos)
  }


  return (
    <>
   {
    todoItem.length > 0 ? (
        todoItem.map((item:any)=>{
            return (<TodoListBox id={item.itemId} isDone={item.isDone}>
                {item.title}
                <Button sm onClick={()=> onClickDeleteTodo(item.itemId)}>삭제</Button>
                <Button sm onClick={()=> onClickChckeTodo(item.itemId)}>
                {item.isDone ? "취 소" : "완 료"}
                </Button>
            </TodoListBox>)
        })
    ) : <div>없다.</div>
   }
    </>
  );
};

export default Todo;


const TodoListBox = styled.div<TodoListBoxProps>`
    margin-top: 10px;
    width: 90%;
    height: 4.375rem;
    border:1px solid  ${props => props.theme.colorTheme.primary_normal};
    animation: ${toUp} 0.25s ease-in-out;
`;
