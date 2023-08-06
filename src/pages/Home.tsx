import React from 'react'
import { styled } from 'styled-components'
import TodoBox from '../components/TodoBox'
import Thisweek from '../components/Thisweek'
import Sidebar from '../components/Sidebar'
import { DayBeforeStateItem } from '../types/type'
import { useRecoilState } from 'recoil';
// import { beforeTodoState } from '../atoms'



const Home = () => {

  // const [todoItem, setTodoItem] = useRecoilState<number>(beforeTodoState)
  // console.log(todoItem)
  // const today: Date = new Date();
  // const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;


  const dayBeforeState: DayBeforeStateItem[] = []
  // const dayBeforeState: DayBeforeStateItem[] = [
  //   { todoState: ["대", "한", "민", "국", "일"], percent: 20 },
  //   // { todoState: ["대", "한", "민", "국", "일"], percent: 40 },
  //   // { todoState: ["대", "한", "민", "국", "일"], percent: 60 },
  //   // { todoState: ["대", "한", "민", "국", "일"], percent: 80 },
  //   // { todoState: ["대", "한", "민", "국", "일"], percent: 100 },
  // ];
  localStorage.setItem("beforeState", JSON.stringify(dayBeforeState))


  return (
    <>
      <WebViewContainer>
        <TodoBox />
        <WebViewLine />
        <Thisweek />
        <Sidebar />
      </WebViewContainer>

      <MobileViewContainer>
        <TodoBox />
        <Sidebar />
      </MobileViewContainer>
    </>
  )
}

export default Home

const WebViewContainer = styled.div`
    ${props => props.theme.WH100};
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    gap: 0px 30px;
    @media screen and (max-width: 800px) {
    display: none;
  }
`;

const WebViewLine = styled.div`
  width: 1%;
  height: 90%;
  border-left: 1px solid ${props => props.theme.color};
`;

const MobileViewContainer = styled.div`
  display: none;
  ${props => props.theme.WH100};
  @media screen and (max-width: 800px) {
    display: block;
    ${props => props.theme.FlexRow};
    padding: 1rem;
    width: 26.25rem;
    height: 90vh;
  }
 
`;

