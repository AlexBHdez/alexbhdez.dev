import { func, bool } from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.toggleBg};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.toggleCircle};
    position: absolute;
    transition: left 0.2s linear;
    left: ${({ darkMode }) => (darkMode ? '2px' : '22px')};
    top: 2px;
  }
`

const ThemeToggle = ({ onClick, darkMode }) => (
  <Wrap onClick={onClick} aria-hidden="true" darkMode={darkMode} />
)

export default ThemeToggle

ThemeToggle.propTypes = {
  onClick: func.isRequired,
  darkMode: bool.isRequired
}
