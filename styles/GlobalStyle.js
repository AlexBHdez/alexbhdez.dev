import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  html {
    height: 100%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
