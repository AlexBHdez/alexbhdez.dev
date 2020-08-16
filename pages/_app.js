import { ThemeModeProvider } from '../context/ThemeModeContext'
import CustomThemeProvider from '../styles/CustomThemeProvider'

const App = ({ Component, pageProps }) => (
  <ThemeModeProvider>
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  </ThemeModeProvider>
)

export default App
