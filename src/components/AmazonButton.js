import React from 'react'
import styled from 'styled-components'

const AmazonButton = styled.a`
  display: block;
  background-color: #ff9900;
  color: #363a45;
  text-decoration: none;
  padding: 1rem;
  max-width: 260px;
  margin-bottom: 2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

export default ({ style }) => (
  <AmazonButton
    style={style}
    href="https://www.amazon.com/React-Explained-Step-Step-Guide/dp/1798752980"
  >
    Buy on Amazon
  </AmazonButton>
)
