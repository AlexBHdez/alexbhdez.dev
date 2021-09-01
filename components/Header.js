import { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeModeContext } from '../context/ThemeModeContext'
import { ThemeToggle, Logo, ExternalLink } from './ui'
import { media } from '../styles/Theme'

const Wrap = styled.header``

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navBar};
`

const LogoWrapper = styled.a`
  transition: width 0.75s ease;
  transition: transform 1.25s ease;
  width: 200px;

  ${media.lessThan('mobile')`
    width: 25px;
    overflow: hidden;
    transform: scale(1.5);
  `}
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
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <ThemeToggle onClick={handleThemeClick} darkMode={darkMode} />
        <Menu>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <ExternalLink href="mailto:abhbretones@gmail.com">Contact</ExternalLink>
          </li>
        </Menu>
      </Nav>
    </Wrap>
  )
}

export default Header
