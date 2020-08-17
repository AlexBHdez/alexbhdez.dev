const fontWeight = {
  light: 200,
  regular: 400,
  semi: 600,
  bold: 800,
}

const lightTheme = {
  colors: {
    body: '#FFF',
    text: '#7B7E7C',
    textHover: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    toggleBg: '#7B7E7C',
    toggleCircle: '#FFF',
  },
  fontWeight: { ...fontWeight },
}
const darkTheme = {
  colors: {
    body: '#363537',
    text: '#7B7E7C',
    textHover: '#FFF',
    toggleBorder: '#6B8096',
    background: '#999',
    toggleBg: '#FFF',
    toggleCircle: '#7B7E7C',
  },
  fontWeight: { ...fontWeight },
}

export { lightTheme, darkTheme }
