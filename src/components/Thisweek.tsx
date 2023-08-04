import React from 'react'
import { styled } from 'styled-components'
import { DayBeforeStateItem } from '../types/type';
// import Progress from "./Progress"

const Thisweek = () => {

  const storedData = localStorage.getItem("beforeState");
  if (storedData) {
    const parsedData = JSON.parse(storedData) as DayBeforeStateItem[];
    // parsedData를 사용하여 작업을 수행
    console.log(parsedData)
  }


  return (
    <ThisWeekContiner>
      
  

      {/* 5일간 TODOLIST 성공률을 보여주는 형태로 구현해보자! */}
      {/* <Progress /> */}
      {/* <DayBeFore> */}
      {/* </DayBeFore> */}
      {/* <DayBeFore></DayBeFore> */}
      {/* <DayBeFore></DayBeFore> */}
    </ThisWeekContiner>
  )
}

export default Thisweek

const ThisWeekContiner = styled.div`
   width: 500px;
    height: 85%;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter}
    gap: 10px 0;
    border-radius: 14px;
  background-color: ${props => props.theme.color2};
   
`;

const DayBeFore = styled.div`
  width: 25rem;
  height: 6.25rem;
  border: 1px solid red;
`;