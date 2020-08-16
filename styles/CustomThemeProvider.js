import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import GlobalStyle from './GlobalStyle'
import { ThemeModeContext } from '../context/ThemeModeContext'

const themes = {
  lightTheme,
  darkTheme,
}

const CustomThemeProvider = ({ children }) => {
  const { themeMode } = useContext(ThemeModeContext)

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
