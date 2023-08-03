import React from 'react'
import { styled } from 'styled-components'

const Thisweek = () => {
  return (
    <ThisWeekContiner>
      5일간 TODOLIST 성공률을 보여주는 형태로 구현해보자!
    </ThisWeekContiner>
  )
}

export default Thisweek

const ThisWeekContiner = styled.div`
   width: 500px;
    height: 85%;
    ${props => props.theme.FlexCol};
    align-items: center;
    gap: 20px 0;
    border-radius: 14px;
  background-color: ${props => props.theme.color2};
   
`;