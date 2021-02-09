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

const sizes = {
  headerHeight: '80px',
  containerPadding: '40px'
}

const zIndex = {
  navBar: '90'
}

const lightTheme = {
  colors: {
    body: '#FFF',
    text: '#7B7E7C',
    textHover: '#363537',
    name: '#242421',
    toggleBorder: '#FFF',
    background: '#363537',
    toggleBg: '#7B7E7C',
    toggleCircle: '#FFF',
    primary: '#800080'
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  sizes: { ...sizes },
  zIndex: { ...zIndex }
}
const darkTheme = {
  colors: {
    body: '#363537',
    text: '#7B7E7C',
    textHover: '#FFF',
    name: '#242421',
    toggleBorder: '#6B8096',
    background: '#999',
    toggleBg: '#FFF',
    toggleCircle: '#7B7E7C',
    primary: '#800080'
  },
  fontSize: { ...fontSize },
  fontWeight: { ...fontWeight },
  sizes: { ...sizes },
  zIndex: { ...zIndex }
}

const media = generateMedia({
  mobile: '576px',
  tablet: '769px',
  desktop: '992px'
})

export { lightTheme, darkTheme, media }
