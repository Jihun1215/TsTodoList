import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { DayBeforeStateItem } from '../types/type';
import Progress from "./Progress"

const Thisweek = () => {

  const storedData = localStorage.getItem("beforeState");
  let parsedData: DayBeforeStateItem[] = [];
  useEffect(()=>{
    if (storedData) {
      parsedData = JSON.parse(storedData) as DayBeforeStateItem[];
      console.log(parsedData)
    }
  },[storedData])

  
  console.log(parsedData); // 두 항목이 콘솔에 표시되는지 확인

  return (
    <ThisWeekContiner>
        <BeforeTodoListArea>
     
      {parsedData.map((item,index) => (
        <DayBeFore key={index}>
          <DayBeforeDayText>{item.thisDay} 성공률</DayBeforeDayText>

          <DayBeforePercent>
             <Progress value={item.percent} text={`${item.percent}`} />
          </DayBeforePercent>
         
         
        </DayBeFore>
      ))}

     </BeforeTodoListArea>
    </ThisWeekContiner>
  )
}

export default Thisweek

const ThisWeekContiner = styled.div`
    width: 500px;
    height: 85%;
    overflow: scroll;
    ${props => props.theme.FlexCol};
    ${props => props.theme.FlexCenter}
    border-radius: 14px;
    background-color: ${props => props.theme.color2};
`;

const BeforeTodoListArea = styled.div`
  ${props => props.theme.WH100};
  ${props => props.theme.FlexCol};
  ${props => props.theme.FlexCenter};
  gap: 20px 0;
  border: 1px solid red;
`;

const DayBeFore = styled.div`
  position: relative;
  width: 25rem;
  min-height: 5rem;
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