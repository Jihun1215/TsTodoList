import React from 'react'
import { styled } from 'styled-components'
import { DayBeforeStateItem } from '../types/type';
import Progress from "./Progress"

const Thisweek = () => {

  // const storedData = localStorage.getItem("beforeState");
  // if (storedData) {
  //   const parsedData = JSON.parse(storedData) as DayBeforeStateItem[];
  //   // parsedData를 사용하여 작업을 수행
  //   console.log(parsedData)
  // }
  const storedData = localStorage.getItem("beforeState");
  let parsedData: DayBeforeStateItem[] = [];
  if (storedData) {
    parsedData = JSON.parse(storedData) as DayBeforeStateItem[];
    console.log(parsedData)
  }


  return (
    <ThisWeekContiner>
      
     
      {parsedData.map((item,index) => (
        <DayBeFore key={index}>
          <DayBeforeDayText>{index+1}일전 TODOLIST 성공률</DayBeforeDayText>

          <DayBeforePercent>
             <Progress value={item.percent} text={`${item.percent}`} />
          </DayBeforePercent>
         
         
        </DayBeFore>
      ))}

    </ThisWeekContiner>
  )
}

export default Thisweek

const ThisWeekContiner = styled.div`
     width: 500px;
    height: 85%;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter}
    gap: 20px 0;
    border-radius: 14px;
    background-color: ${props => props.theme.color2};
   
`;

const DayBeFore = styled.div`
  position: relative;
  width: 25rem;
  height: 5rem;
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  background-color:#adb5bd;
  border-radius: 14px;
`;

const DayBeforeDayText = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px;
  ${props => props.theme.DisFlexCenter}
`;

const DayBeforePercent= styled.div` 
  width: 20%;
  height: 100%;
  ${props => props.theme.DisFlexCenter}
`;  