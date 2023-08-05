import React from 'react'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil';
import { DarkModeToggleState } from "../atoms"
import { BsMoon } from "react-icons/bs"
import { BsSun } from "react-icons/bs"
import { AiOutlineArrowUp } from "react-icons/ai"

const Sidebar = () => {

  const [mode, setMode] = useRecoilState<boolean>(DarkModeToggleState);

  // 다크모드 변경 함수
  const onClickModeToggle = () => {
    setMode((mode) => !mode);
  }

  const onClickScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SidebarContiner>
      <SidebarModeButton onClick={onClickModeToggle} mode={mode.toString()}>
        {
          mode ? <BsMoon /> : <BsSun />
        }
      </SidebarModeButton>
      {/* <SidebarGoupButton onClick={onClickScrollToTop}>
        <AiOutlineArrowUp />
      </SidebarGoupButton> */}
    </SidebarContiner>
  )
}

export default Sidebar

const SidebarContiner = styled.div`
    position: fixed;
    bottom: 20px;
    right: 10px;
    width: 100px;
    height: 50px;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    gap: 0px 20px;
`;

const SidebarModeButton = styled.button<{ mode: boolean | string }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: 1s ease-in-out 0s 1 normal forwards running;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
    ${props => props.theme.FlexCol}
    ${props => props.theme.FlexCenter}
    font-size: 25px;
    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.9);
    }
`;

const SidebarGoupButton = styled.button`
    width: 3.125rem;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: 1s ease-in-out 0s 1 normal forwards running;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
    ${props => props.theme.FlexCol}
    ${props => props.theme.FlexCenter}
    font-size: 20px;
    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.9);
    }
`;