import { func, bool } from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 40px;
  background-color: tomato;
  position: relative;

  &::after {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: gold;
    position: absolute;
    left: 1px;
    top: 1px;
  }
`

const ThemeToggle = ({ onClick, darkMode }) => (
  <Wrap onClick={onClick} aria-hidden="true" themeMode={darkMode} />
)

export default ThemeToggle

ThemeToggle.propTypes = {
  onClick: func.isRequired,
  darkMode: bool.isRequired,
}
