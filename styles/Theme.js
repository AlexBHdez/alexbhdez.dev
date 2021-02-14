import { generateMedia } from 'styled-media-query'

const fontSize = {
  small: '0.75rem',
  regular: '1rem',
  plus: '1.25rem',
  medium: '1.50rem',
  big: '2rem',
  super: '2.5rem'
}

const fontWeight = {
  light: 200,
  regular: 400,
  semi: 600,
  bold: 800
}

const zIndex = {
  navBar: '90'
}

const lightTheme = {
  colors: {
    accent: '#997b1e',
    body: '#edf2f7',
    text: '#676a68',
    textHover: '#363537',
    title: '#242421',
    toggleBorder: '#fff',
    background: '#363537',
    toggleBg: '#676a68',
    toggleCircle: '#fff'
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  zIndex: { ...zIndex }
}
const darkTheme = {
  colors: {
    accent: '#fdcb6e',
    body: '#171923',
    text: '#99a69b',
    textHover: '#fff',
    title: '#cdcdcd',
    toggleBorder: '#6b8096',
    background: '#999',
    toggleBg: '#fff',
    toggleCircle: '#99a69b'
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  zIndex: { ...zIndex }
}

const media = generateMedia({
  mobile: '576px',
  tablet: '769px',
  desktop: '992px'
})

export { lightTheme, darkTheme, media }
