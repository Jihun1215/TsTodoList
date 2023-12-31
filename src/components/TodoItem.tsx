import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '../element/Button';
import { toUp } from '../styles/Animation';
import { Item } from '../types/type';
import { useRecoilState } from 'recoil';
import { ThisDayState } from "../atoms"
import Progress from './Progress';
import { todoListPercen } from "../atoms"
import { DayBeforeStateItem } from '../types/type';


interface TodoListBoxProps {
  id: number;
  isDone: boolean;
  children: React.ReactNode;
}

const TodoItem = () => {
  const [todoItem, setTodoItem] = useRecoilState<Item[]>(ThisDayState);
  const [percentage, setPercentage] = useRecoilState<number>(todoListPercen);
  const [clearTodos, setClearTodos] = useState<Item[]>([]);
  // console.log(todoItem)
  // 오늘 저장된 리스트를 가지고 오기 위한 로컬스토리지 키 값
  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`;
  const todoListGet = localStorage.getItem(ThisDay);
  const todoData = todoListGet ? JSON.parse(todoListGet) : [];

  const dateKey = Object.keys(todoData)[0]?.trim(); // dateKey를 가져올 때, undefined 방지



  const beforeState = localStorage.getItem("beforeState");
  const beforeData = beforeState ? JSON.parse(beforeState) : [];


 const anotherDate: DayBeforeStateItem = {
   thisDay: ThisDay, 
   percent: percentage,
 };

  useEffect(() => {
    // 오늘 날짜가 아니면 beforeData에 값을 추가
    if (dateKey === ThisDay) {
      console.log('동일한 날짜입니다')
    }else{
      // 새로운 배열로 복사 후 추가
      const updatedBeforeData = [...beforeData, anotherDate];
      localStorage.setItem("beforeState", JSON.stringify(updatedBeforeData));
    }
  }, [dateKey]);








  const onClickDeleteTodo = (id: number) => {

    if (window.confirm("정말로 이 작업을 수행하시겠습니까?")) {
      const updatedTodoData = todoItem.filter((item: any) => item.itemId !== id);
      setTodoItem(updatedTodoData)
    }
  }

  const onClickChckeTodo = (id: number) => {
    const newTodos = todoItem.map((item: any) => {
      if (item.itemId === id) {
        return { ...item, isDone: !item.isDone }
      } else {
        return { ...item }
      }
    })
    setTodoItem(newTodos)
  }

  useEffect(() => {
    // 컴포넌트가 마운트되거나 todoItem이 변경될 때마다 clearTodos를 업데이트
    const Todos = todoItem.filter((item: any) => item.isDone);
    setClearTodos(Todos);
  }, [todoItem]);

  // 성공률을 변환해주는 함수
  const calculateCompletionPercentage = () => {
    if (todoItem.length === 0) return 0;
    const completionPercentage = (clearTodos.length / todoItem.length) * 100;
    return Math.round(completionPercentage * 100) / 100;
  };


  useEffect(() => {
    setPercentage(calculateCompletionPercentage)
  }, [calculateCompletionPercentage])




  return (
    <>
      {
        todoItem.length > 0 ? (
          todoItem.map((item: any,) => {
            return (<TodoItemBox id={item.itemId} isDone={item.isDone}>
              <h4>{item.title}</h4>
              <div>
                <Button size="sm" onClick={() => onClickDeleteTodo(item.itemId)}>삭제</Button>
                {item.isDone ? <Button istrue="true" onClick={() => onClickChckeTodo(item.itemId)}>되 돌리기</Button>
                  : <Button isfalse="true" onClick={() => onClickChckeTodo(item.itemId)}>성 공</Button>
                }
              </div>

            </TodoItemBox>)
          })
        ) : <div>없다.</div>
      }

      <Progress main="true" value={percentage} text={`${percentage}`} />
    </>
  );
};

export default TodoItem;


const TodoItemBox = styled.div<TodoListBoxProps>`
    position: relative;
    margin-top: 10px;
    width: 90%;
    height: 70px;
    background-color:#adb5bd;
    animation: ${toUp} 0.25s ease-in-out;
    border-radius: 14px;
    padding: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    > h4 {
      width: 100%;
      height: 50%;
      font-size: 20px;
      font-weight: 500;
    }
    > div {
      width: 100%;
      height: 50%;
      ${props => props.theme.FlexRow};
      justify-content: right;
      gap: 0 10px;
    }
`;

