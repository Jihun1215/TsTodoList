import React, {useEffect, useState} from 'react';
import { styled } from 'styled-components';
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
    setTodoItem(newTodos)
  }

  const [clearTodos, setClearTodos] = useState<Item[]>([]);
  

  useEffect(()=>{
    const Todos= todoItem.filter((item:any) => item.isDone);
    setClearTodos(Todos)

  },[todoItem])
  

  const calculateCompletionPercentage = () => {
    if (todoItem.length === 0) return 0;
    return (clearTodos.length / todoItem.length) * 100;
  };

  return (
    <>
   {
    todoItem.length > 0 ? (
        todoItem.map((item:any)=>{
            return (<TodoListBox id={item.itemId} isDone={item.isDone}>
                {item.title}
                <Button sm onClick={()=> onClickDeleteTodo(item.itemId)}>삭제</Button>

                {item.isDone ?  <Button istrue onClick={()=> onClickChckeTodo(item.itemId)}>되 돌리기</Button>
                :  <Button isfalse onClick={()=> onClickChckeTodo(item.itemId)}>성 공</Button>
                 }
            </TodoListBox>)
        })
    ) : <div>없다.</div>
   }

    <TodoPercentBox>
   <p>{calculateCompletionPercentage()}%</p> 
    <TodoPercent type="range" min="0" max="100" step="10" value={calculateCompletionPercentage()} />
    </TodoPercentBox>

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

const TodoPercentBox = styled.div`
 position: relative;
 margin: 40px;
 width: 90%;
 height: 4.375rem;
 animation: ${toUp} 0.25s ease-in-out;
 border: 1px solid red;
 ${props => props.theme.FlexRow};
 ${props => props.theme.FlexCenter};
 > p {
    position: absolute;
    top: 5px;
 }
`;

const TodoPercent= styled.input`
    border: 1px solid red;
    width: 50%;
    height: 30%;
`;
