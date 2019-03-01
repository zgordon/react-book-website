import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Heading } from 'rebass'
import Layout from '../components/layout'
import coverImg from '../images/cover.jpg'
import plusImg from '../images/plus.png'
import zacImg from '../images/zac-cropped.jpg'

import PricingTable from '../components/pricing-table'
import TOC from '../components/toc'

import './index.css'

const theme = {
  space: [0, 6, 12, 18, 24],
  breakpoints: ['32em', '48em', '64em'],
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Flex id="intro" my="2rem" flexWrap="wrap" flexDirection="row">
        <Box width={[1, 2 / 3]}>
          <Heading
            as="h2"
            m="8rem 0 4rem"
            style={{
              fontWeight: 'normal',

              fontSize: '2rem',
              lineHeight: '2.6rem',
            }}
          >
            <strong>Learn React</strong> from
            <br />
            Clear Explanations
            <br />
            <em style={{ fontStyle: 'normal' }}>&amp; Guided Practice</em>
          </Heading>
          {/* <p class="description" style={{ fontSize: '1.4rem', lineHeight: '2rem' }}>
      Learn the popular JavaScript library, React, with in depth explanations
      and tons of practice exercises.
    </p> */}
          {/* {amazonLink} */}
        </Box>
        <Box width={[1, 1 / 3]}>
          <img
            style={{}}
            className="cover"
            src={coverImg}
            alt="React Explained Book Cover"
          />
        </Box>
      </Flex>
      <Flex
        id="what-you-will-learn"
        mt={'3rem'}
        flexWrap="wrap"
        flexDirection="row"
      >
        <Box width={[1, 2 / 3]}>
          <h2>What You Will Learn</h2>
          <ol>
            <li>Modern JavaScript and Development Tools</li>
            <li>Fundamental React Concepts and Patterns</li>
            <li>How to Build and Deploy a Real React App</li>
          </ol>
        </Box>
        <Box width={[1, 1 / 3]}>
          <img
            style={{}}
            className="cover"
            src={plusImg}
            alt="React Explained Book Cover"
          />
        </Box>
      </Flex>
      <Flex
        id="how-you-will-learn"
        py="3rem"
        flexWrap="wrap"
        flexDirection="row"
      >
        <Box width={[1, 2 / 3]} pr="4rem">
          <h2 style={{}}>How You Will Learn</h2>
          <p>
            <strong>Each chapter of the book teaches one React concept.</strong>{' '}
            Then, the following chapter gives five exercises to practice that
            concept.
          </p>
          <p>
            <strong>This approach helps</strong> you understand the core
            concepts of React and also get comfortable writing it on your own.
          </p>
          <p>
            <strong>
              The final section of the book walks through building, deploying
              and refactoring a production React app.
            </strong>
          </p>
        </Box>
        <Box p="2rem" width={[1, 1 / 3]}>
          <h3>
            <span aria-label="brain icon" role="img">
              🧠
            </span>{' '}
            + 1 Part Theory
          </h3>
          <h3>
            <span aria-label="computer icon" role="img">
              💻
            </span>{' '}
            x 5 Parts Practice
          </h3>
        </Box>
      </Flex>
      <PricingTable />
      <hr />
      <TOC />
      <PricingTable />
      <Flex>
        <Box>
          <img
            style={{ maxWidth: '200px', float: 'left', margin: '10px' }}
            className="cover"
            src={zacImg}
            alt="React Explained Book Cover"
          />
        </Box>
        <Box>
          <Heading as="h2">About the Author</Heading>
          <p />
        </Box>
      </Flex>
      <h2>Get the Book</h2>
      <p>
        You can purchase the print and digital versions of the book through
        Amazon.com
      </p>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
