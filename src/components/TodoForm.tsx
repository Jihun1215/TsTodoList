import React, { useState,useEffect } from 'react'
import { styled } from 'styled-components'
import { Button } from '../element/Button';
import { useForm, SubmitHandler } from 'react-hook-form';


type Fromvalue = {
  todo?: string,
}

const TodoForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
  } = useForm<Fromvalue>({ mode: "onChange" });
  // 버튼 활성화 state 

  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (watch("todo") == "" )setIsActive(true);
    else setIsActive(false);
  }, [watch()]);
 

  const today: Date = new Date();
  const ThisDay = `${ today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  const onSubmitTodo:SubmitHandler<Fromvalue> = (data) =>{
    reset();

      // 기존 로컬 스토리지 값 가져오기
  const todoListGet: string | null = localStorage.getItem(ThisDay);
  if(todoListGet !== null && todoListGet.length < 5){
    alert("5개 초과 하였습니다!")
  }else{
    // 기존 값이 null이면 빈 배열로 초기화
  const copyArr = todoListGet ? JSON.parse(todoListGet) : [];

  // 새로운 값 추가
  copyArr.push(data.todo);

  // 로컬 스토리지에 저장
  localStorage.setItem(ThisDay, JSON.stringify(copyArr));
  };

  }
  
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmitTodo)}>
  
        <InputWrapper>
          <label htmlFor="todo">할일:</label>
          <input 
            type='text'
            placeholder="할 일을 입력해주세요"
            {...register('todo', {
            pattern: {
                  value: /^[가-힣\s]+$/,
                  message: "한글만 입력하세용",
                },
                maxLength: {
                  value: 20,
                  message: "20글자 이내로 입력해주세요",
                },
          
            })}
            />
           {errors.todo && <p>{errors.todo.message}</p>}
        </InputWrapper>
    
    {
      isActive ? <Button sm isactive type='button' >값 입력 X</Button>: 
        <Button sm type="submit" >제출</Button>
    } 

      

  </FormWrapper>
  )
}

export default TodoForm

const FormWrapper = styled.form`
  width: 95%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  p {
    color: red;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;