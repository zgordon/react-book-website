import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    className="wrapper"
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}{' '}
        </Link>
        <a
          style={{
            color: 'white',
            marginTop: '1rem',
            display: 'block',
            fontWeight: 'normal',
            fontSize: '1rem',
            verticalAlign: 'middle',
            textDecoration: 'none',
          }}
          href="https://twitter.com/zgordon"
        >
          From Educator Zac Gordon
        </a>
      </h1>
    </div>
  </div>
)

export default Header
