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
          <span
            style={{
              marginTop: '1rem',
              display: 'block',
              fontWeight: 'normal',
              fontSize: '1rem',
              verticalAlign: 'middle',
            }}
          >
            A Book from Educator Zac Gordon
          </span>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
