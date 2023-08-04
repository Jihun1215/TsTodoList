import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled, { css } from 'styled-components';
import { toUp } from '../styles/Animation';

type ProGressProps = {
  value: number;
  text: string;
  main?: string;
  // 추가: Progress 컴포넌트에서 사용하지 않는 속성은 제거
};

const Progress = ({ value, text, main }: ProGressProps) => {
  return (
    <ProgressStyle main={main}>
      <CircularProgressbar value={value} text={`${text}%`} />
    </ProgressStyle>
  );
};

export default Progress;

// 추가: sm 속성이 있으므로 해당 속성을 사용하여 스타일을 설정합니다.
const ProgressStyle = styled.div<{ main?: string }>`
  position: absolute;
  width: 60px;
  height:60px;
  cursor: pointer;
  animation: ${toUp} 0.25s ease-in-out;
       ${(props) =>
        props.main &&
        css`   
              width: 100px;
              height: 100px;
              bottom: 2px;
       `};
`;

// 원하는 스타일을 설정하고, sm 속성에 따라 크기를 변경할 수 있도록 설정하였습니다.
