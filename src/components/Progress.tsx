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
    // console.log(props)
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
     cursor: pointer;
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