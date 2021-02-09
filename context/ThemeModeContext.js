import { createContext, useState } from 'react'
import { node } from 'prop-types'

const ThemeModeContext = createContext()

const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export { ThemeModeContext, ThemeModeProvider }

ThemeModeProvider.propTypes = {
  children: node.isRequired
}
