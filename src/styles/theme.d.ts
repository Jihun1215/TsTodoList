// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    WH100;
    FlexCol;
    FlexRow;
    FlexCenter;
    bgColor: string;
    bgColor2: string;
    color: string;
    color2: string;
    white:  string;
    black:  string;
    gray:   string;
    yellow: string;
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

