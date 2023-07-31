// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    WH100;
    FlexCol;
    FlexRow;
    FlexCenter;
    DisFlexCenter;
    Text_700_18;
    Text_700_16;
    Text_400_12;
    bgColor: string;
    bgColor2: string;
    color: string;
    color2: string;
    white:  string;
    black:  string;
    gray:   string;
    green: string,
    primary_easy: string,
    primary_normal:  string;
    primary_strong: string;
    primary_heavy: string;
    primary_altemative: string;
    primary_assistive:  string;
    dark_beige: string,
    Alternative: string,
  }
}

