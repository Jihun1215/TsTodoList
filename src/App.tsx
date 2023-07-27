import React from 'react';
import styled from 'styled-components';
import Reset from './styles/Reset';
import { ThemeProvider } from 'styled-components';
import { Theme,DarkTheme  } from './styles/theme';
import { GlobalStyle } from './styles/Globalstyle';
import { useRecoilState } from 'recoil';
import {DarkModeToggleState} from "./atoms"

function App() {

  const [darkMode, setDarkMode] = useRecoilState(DarkModeToggleState);
  const theme = darkMode ? { ...DarkTheme, } : { ...Theme };
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Continer>
        <HomeContainer>
        
        </HomeContainer>
      </Continer>
 
      </ThemeProvider>
    </>
  );
}

export default App;


const Continer = styled.div`
  width: 100%;
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  border: 1px solid red;

`;


const HomeContainer = styled.div`
  width: 80%;
  height: 4000px;
  ${props => props.theme.FlexCol};
  gap: 100px 0;
  border: 1px solid red;

`;
