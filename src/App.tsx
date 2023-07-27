import React from 'react';
import styled from 'styled-components';
import Reset from './styles/Reset';
import { ThemeProvider } from 'styled-components';
import { Theme,DarkTheme  } from './styles/theme';
import { GlobalStyle } from './styles/Globalstyle';
import { useRecoilState } from 'recoil';
import {DarkModeToggleState} from "./atoms"
import Layout from './layout/Layout';

function App() {

  const [darkMode, setDarkMode] = useRecoilState(DarkModeToggleState);
  const theme = darkMode ? { ...DarkTheme, } : { ...Theme };
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
        <Layout children={undefined}/>
      </ThemeProvider>
    </>
  );
}

export default App;


