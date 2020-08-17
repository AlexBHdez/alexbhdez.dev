import { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeModeContext } from '../context/ThemeModeContext'

const Wrap = styled.header`
  height: 80px;
  left: 50%;
  max-width: 1200px;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: 0 30px;
`

const Menu = styled.ul`
  display: flex;

  > li {
    margin: 0 8px;
  }
`

const Header = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)
  const handleThemeClick = () =>
    setThemeMode(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme')

  return (
    <Wrap>
      <Nav>
        <Link href="/">
          <a>alexbhdez.dev</a>
        </Link>
        <span role="button" onClick={handleThemeClick} aria-hidden="true">
          theme
        </span>
        <Menu>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a href="mailto:abhbretones@gmail.com" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </Menu>
      </Nav>
    </Wrap>
  )
}

export default Header
