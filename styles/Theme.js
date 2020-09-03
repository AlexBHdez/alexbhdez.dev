import { generateMedia } from 'styled-media-query'

// TODO: Refactor fontSizes
const fontSize = {
  // ref: 10px
  xs: '1rem',
  s: '1.4rem',
  sm: '1.6rem',
  m: '1.8rem',
  l: '2.1rem',
  ll: '2.8rem',
  xl: '3.2rem',
  xll: '4rem',
  xxl: '4.8rem',
}

const fontWeight = {
  light: 200,
  regular: 400,
  semi: 600,
  bold: 800,
}

const sizes = {
  headerHeight: '80px',
  containerPadding: '40px',
}

const zIndex = {
  navBar: '90',
}

const lightTheme = {
  colors: {
    body: '#FFF',
    text: '#7B7E7C',
    textHover: '#363537',
    h1: '#242421',
    toggleBorder: '#FFF',
    background: '#363537',
    toggleBg: '#7B7E7C',
    toggleCircle: '#FFF',
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  sizes: { ...sizes },
  zIndex: { ...zIndex },
}
const darkTheme = {
  colors: {
    body: '#363537',
    text: '#7B7E7C',
    textHover: '#FFF',
    h1: '#242421',
    toggleBorder: '#6B8096',
    background: '#999',
    toggleBg: '#FFF',
    toggleCircle: '#7B7E7C',
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  sizes: { ...sizes },
  zIndex: { ...zIndex },
}

const media = generateMedia({
  mobile: '576px',
  tablet: '769px',
  desktop: '992px',
})

export { lightTheme, darkTheme, media }
