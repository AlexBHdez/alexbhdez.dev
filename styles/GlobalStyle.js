import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  html {
    height: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    transition: all .5s linear;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.regular};

    #__next {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`

export default GlobalStyle
