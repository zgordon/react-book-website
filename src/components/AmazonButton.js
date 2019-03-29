import React from 'react'
import styled from 'styled-components'
// import Button from './components/button'

const AmazonButton = styled.a`
  display: block;
  background-color: #101114;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  max-width: 260px;
  font-weight: bold;
  margin-bottom: 6rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

export default ({ style }) => (
  <AmazonButton
    style={style}
    // href="https://www.amazon.com/React-Explained-Step-Step-Guide/dp/1798752980"
    href="#buy"
  >
    Get React Explained
  </AmazonButton>
)

// export default () => (
//   <a href="#buy" className={'button'}>
//   </a>
// )
