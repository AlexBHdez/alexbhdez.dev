const fontWeight = {
  light: 200,
  regular: 400,
  semi: 600,
  bold: 800,
}

const sizes = {
  headerHeight: '80px',
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
  fontWeight: { ...fontWeight },
  sizes: { ...sizes },
  zIndex: { ...zIndex },
}

export { lightTheme, darkTheme }
