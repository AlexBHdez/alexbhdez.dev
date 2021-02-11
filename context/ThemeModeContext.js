import { createContext, useState, useEffect } from 'react'
import { node } from 'prop-types'

const ThemeModeContext = createContext()

const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (window) {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

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
