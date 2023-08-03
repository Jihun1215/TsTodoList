import React from 'react'
import { styled } from 'styled-components'
import TodoBox from '../components/TodoBox'
import Thisweek from '../components/Thisweek'
import Sidebar from '../components/Sidebar'



const Home = () => {
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
    @media screen and (max-width: 1000px) {
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
  @media screen and (max-width: 1000px) {
    display: block;
    ${props => props.theme.FlexRow};
    padding: 1rem;
    width: 26.25rem;
    height: 90vh;
    border: 1px solid red;

  }
 
`;

