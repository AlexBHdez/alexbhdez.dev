import { node } from 'prop-types'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import GlobalStyle from './GlobalStyle'
import { ThemeModeContext } from '../context/ThemeModeContext'

const CustomThemeProvider = ({ children }) => {
  const { darkMode } = useContext(ThemeModeContext)
  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider

CustomThemeProvider.propTypes = {
  children: node.isRequired,
}
