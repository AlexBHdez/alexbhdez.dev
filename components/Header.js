import { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeModeContext } from '../context/ThemeModeContext'
import { ThemeToggle } from './ui'

const Wrap = styled.header``

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: ${({ theme }) => theme.sizes.headerHeight};
  padding: ${({ theme }) => `0px ${theme.sizes.containerPadding}`};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navBar};
`

const Menu = styled.ul`
  display: flex;

  > li {
    margin: 0 8px;
    transition: color 0.35s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeModeContext)
  const handleThemeClick = () => setDarkMode(!darkMode)

  return (
    <Wrap>
      <Nav>
        <Link href="/">
          <a>alexbhdez.dev</a>
        </Link>
        <ThemeToggle onClick={handleThemeClick} darkMode={darkMode} />
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
