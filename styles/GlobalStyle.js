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
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
`

export default GlobalStyle
