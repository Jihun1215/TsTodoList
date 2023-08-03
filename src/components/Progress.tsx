import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRecoilState } from 'recoil';
import { todoListPercen } from "../atoms"
import styled, { css } from 'styled-components'
import { toUp } from '../styles/Animation'

type ProGressProps = {
    value?: number,
    text?: string,
    sm?: boolean,
};

export const Progress = ({ ...props }: ProGressProps) => {
    console.log(props)
    const [percentage, setPercentage] = useRecoilState<number>(todoListPercen);

    return (
        <ProgressStyle>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                // 선굴기
                strokeWidth={7}
            />
        </ProgressStyle>
    );
};
export default Progress;


const ProgressStyle = styled.div<ProGressProps>`
     position: absolute;
     bottom: -20px;
     width: 70px;
     height: 100px;
     //   border: none;
//   outline: none;
//   cursor: pointer;
//   border-radius: 0.25rem;
//   ${props => props.theme.DisFlexCenter};
//   background-color: ${props => props.theme.colorTheme.primary_heavy};
//   /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px; */
     animation: ${toUp} 0.25s ease-in-out;
        ${(props) =>
        props.sm &&
        css`   
              width: 200px;
              height: 200px;
              position: absolute;
              bottom: 10px;
             `};

        `;