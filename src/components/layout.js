import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}

          // script={[
          //   {
          //     type: 'text/javascript',
          //     url: '',
          //     id: 'snipcart',
          //     'data-api-key':
          //       'YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0',
          //     src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
          //   },
          //   {
          //     type: 'text/javascript',
          //     src:
          //       'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
          //   },
          // ]}
          // script={[
          //   {
          //     src: 'https://gumroad.com/js/gumroad.js',
          //     type: 'text/javascript',
          //   },
          //   {
          //     src: 'https://gumroad.com/js/gumroad-embed.js',
          //     type: 'text/javascript',
          //   },
          // ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
