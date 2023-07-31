import { DefaultTheme, css } from "styled-components";
 

const colorTheme: DefaultTheme = {
    white: "#ffffff",
    black: "#000000",
    gray:  "#495057",
    green: "#A0C49D",
    Alternative: '#8A8A8A',
    primary_easy: "#F7FFE5",
    primary_normal: "#FF9900",
    primary_strong: "#FF8A00",
    primary_heavy: "#FF7A00",
    primary_altemative: "#FFC672",
    primary_assistive: "#FFE4BC",
    dark_beige: "AA9178",
};

const WH100 = css`
  width: 100%;
  height: 100%;
`;

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const DisFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Text Style
const Text_700_18 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

const Text_700_16 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Text_400_12 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
`;


const theme = { 
    colorTheme,
    WH100,
    FlexCol,
    FlexRow,
    FlexCenter,
    DisFlexCenter,
    Text_700_18,
    Text_700_16,
    Text_400_12
}

export const Theme: DefaultTheme = {
    ...theme,
    bgColor: '#f1f3f5',
    bgColor2: '#dee2e6',
    color: '#191A23',
    color2: '#E2E2E2',
}

export const DarkTheme: DefaultTheme = {
    ...theme,   
    bgColor: '#1e1e1e',
    bgColor2: '#282c34',
    color: '#E2E2E2',
    color2: '#495057',
}