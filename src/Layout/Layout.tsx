import React, { ReactNode } from "react";
import  styled  from "styled-components/";
import Home from "../pages/Home";


interface GlobalLayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: GlobalLayoutProps) => {
  return (
      <Continer>
        <HomeContainer>
            <Home/>
          { children }
        </HomeContainer>
      </Continer>
  )
}

export default Layout

const Continer = styled.div`
  width: 100%;
  height: 100vh;
  ${props => props.theme.FlexRow};
  ${props => props.theme.FlexCenter};
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
`;


const HomeContainer = styled.div`
  width: 95%;
  height: 95%;
  ${props => props.theme.FlexCol};
  gap: 100px 0;
`;

