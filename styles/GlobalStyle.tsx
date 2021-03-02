import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';
import palette from './palette';

const globalStlye = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    color: ${palette.black_22};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStlye};
`;

export default GlobalStyle;
