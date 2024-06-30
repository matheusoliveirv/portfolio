import { createGlobalStyle } from "styled-components";
import lineEffect from "../Icons/assets/background/line.svg";

export const GlobalStyle = createGlobalStyle`

  :root {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    /*background: ${props => props.theme.colors.background};
    background-size: 0, cover;
    background-position: center;*/
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
  h1{
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
  }
  h2{
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
  }
  h3{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
  }
  p{
    text-align: center;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.subText};
    font-weight: 400;
  }
  h1, h2, h3, p, i{
    transition: all 1s;
  }

  //MOBILE

  @media (max-width: 767px) {
    h1{
      font-size: 2.3rem;
    }
    h2{
      font-size: 1.4rem;
    }
    h3{
      font-size: 1.3rem;
    }
    p{
      font-size: .9rem;
    }
  }

  //FONTES PERSONALIZADAS

  @font-face {
    font-family: 'Burtons';
    src: url(../../public/fonts/Burtons.otf);
  }
`