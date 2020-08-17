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
  },
  fontWeight: { ...fontWeight },
}
const darkTheme = {
  colors: {
    body: '#363537',
    text: '#FAFAFA',
    textHover: '#000000',
    toggleBorder: '#6B8096',
    background: '#999',
  },
  fontWeight: { ...fontWeight },
}

export { lightTheme, darkTheme }
