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
    font-family: 'Nunito', sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    transition: all .5s linear;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
