import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a>Logo</a>
      </Link>
      <ul>
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
      </ul>
    </nav>
  </header>
)

export default Header
