import React from 'react'
import { styled } from 'styled-components'
import Todo from '../components/Todo'
import Thisweek from '../components/Thisweek'



const Home = () => {
  return (
    <>
    <WebViewContainer>
      <Todo/>
      <WebViewLine/>
      <Thisweek/>
    </WebViewContainer>
    <MobileViewContainer>
    <Todo/>
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
    @media screen and (max-width: 650px) {
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
  @media screen and (max-width: 650px) {
    display: block;
    ${props => props.theme.FlexRow};

    padding: 1rem;
    /* width: 26.25rem;
  height: 90vh; */

  }
 
`;


// import React from 'react'
// import { styled } from 'styled-components'
// import TodoList from '../components/TodoList'
// import Thisweek from '../components/Thisweek'

// const Home = () => {
//   return (
//     <>
//     <WebViewContainer>웹뷰
//       <TodoList/>
//       {/* <WebViewLine/> */}
//       <Thisweek/>
//     </WebViewContainer>
//     <MobileViewContainer>모바일뷰</MobileViewContainer>
//     </>
//   )
// }

// export default Home

// const WebViewContainer = styled.div`
//     ${props => props.theme.WH100};
//     border: 1px solid blue;
//     @media screen and (max-width: 420px) {
//     display: none;
//   }
// `;

// const WebViewLine = styled.div`
//   width: 5%;
//   height: 100%;
//   /* border-left: 1px solid ${props => props.theme.color}; */
// `;

// const MobileViewContainer = styled.div`
//   display: none;
//   @media screen and (max-width: 420px) {
//     display: block;
//     ${props => props.theme.FlexRow};
//     width: 100%;
//     height: 40.625rem;
//     padding: 1rem;
//     /* width: 26.25rem;
//   height: 90vh; */
//    border: 1px solid blue;
//   }
 
// `;
