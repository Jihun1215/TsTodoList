import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { Button } from '../element/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Item } from '../types/type';
import { useRecoilState } from 'recoil';
import { todoItemState } from "../atoms"
import { v4 as uuidv4 } from 'uuid';
import { toUp } from '../styles/Animation';



type Fromvalue = {
  todo?: string,
}

const TodoForm: React.FC = () => {
  const [todoItem, setTodoItem] = useRecoilState<Item[]>(todoItemState)
  // console.log(todoItem)

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
    if (watch("todo") == "") setIsActive(true);
    else setIsActive(false);
  }, [watch()]);


  // const today: Date = new Date();
  // const ThisDay = `${ today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  // console.log(todoItem)
  const onSubmitTodo: SubmitHandler<Fromvalue> = (data) => {

    if (todoItem.length >= 6) {
      alert("6개 까지 등록 가능합니다.")
      reset()
    } else {
      const newTodo: Item = {
        itemId: uuidv4(),
        title: data.todo,
        isDone: false,
      };
      setTodoItem([...todoItem, newTodo]);
      reset()
    }

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
        isActive ? <Button sm isactive type='button' >값 입력 X</Button> :
          <Button sm type="submit" >제출</Button>
      }



    </FormWrapper>
  )
}

export default TodoForm

const FormWrapper = styled.form`
  width: 95%;
  padding: 20px;
  border-radius: 14px;
  background-color: ${props => props.theme.color2};
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
    border: none;
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.colorTheme.black};
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter}
    animation: ${toUp} 0.25s ease-in-out;
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