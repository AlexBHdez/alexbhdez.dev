import styled from 'styled-components'

import Link from 'next/link'

const Wrap = styled.header`
  height: 100px;
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
`

const Menu = styled.ul`
  display: flex;
`

const Header = () => (
  <Wrap>
    <Nav>
      <Link href="/">
        <a>alexbhdez.dev</a>
      </Link>
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

export default Header
