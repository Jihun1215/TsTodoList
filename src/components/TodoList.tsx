import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Button } from '../element/Button';

const TodoList = () => {
  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
// 로컬 스토리지에서 해당 날짜의 할 일 목록을 가져오기
  const todoListGet: string | null = localStorage.getItem(ThisDay);
// JSON 형식의 문자열로 저장된 할 일 목록을 객체로 변환합
  const parsedTodoList: string[] = todoListGet ? JSON.parse(todoListGet) : [];
            
  useEffect(() => {
    if (todoListGet !== null) {
      console.log(JSON.parse(todoListGet));
    }
  }, []);
    

  return (
    <TodoListContiner>
     {/* parsedTodoList 배열의 길이에 삼항 연산자 처리 */}
       {parsedTodoList.length > 0 ? (
        parsedTodoList.map((item: string, index: number) => {
          return( <TodoListBox key={index}>{item}
            <Button sm >삭제</Button>
          </TodoListBox>);
        })
      ) : (
        <div>없다</div>
      )}
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

const TodoListBox = styled.div`
    margin-top: 10px;
    width: 90%;
    height: 4.375rem;
    border: 1px solid red;
`;