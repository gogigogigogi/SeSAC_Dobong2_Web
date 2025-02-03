import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Beeunhye';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Beeunhye.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*{
  margin : 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Beeunhye';
}

html{
  font-size: 20px;
}

a{
  text-decoration: none;
}

ul,ol{
  list-style: none;
}
`;
