import React, { createContext, useState } from 'react'

const ThemeModeContext = createContext()

const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('lightTheme')

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export { ThemeModeContext, ThemeModeProvider }
