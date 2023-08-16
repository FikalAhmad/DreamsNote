import { injectGlobal } from "@emotion/css";

export const GlobalCss = injectGlobal`
  :root{
    --hijaumuda: #C7D8B7;
    --hijautua: #054B3A;
    --hijaucerah: #DAFF8C;
  }
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "CircularBook";
  src:
    url("/src/assets/fonts/CircularStd-Book.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularLight";
  src:
    url("/src/assets/fonts/CircularStd-Light.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularMedium";
  src:
    url("/src/assets/fonts/CircularStd-Medium.otf") format("opentype")
  }
  @font-face {
    font-family: "CircularBold";
  src:
    url("/src/assets/fonts/CircularStd-Bold.otf") format("opentype")
  }
`;