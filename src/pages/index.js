import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Heading, Card, Image, Text } from 'rebass'
import Layout from '../components/layout'
import coverImg from '../images/cover.jpg'
import plusImg from '../images/plus.png'
import zacImg from '../images/zac-cropped.jpg'

import PricingTable from '../components/pricing-table'
import TOC from '../components/toc'
// import AmazonButton from '../components/AmazonButton'
import './index.css'
import AmazonButton from '../components/AmazonButton'

const colors = {
  dark: '#363A45',
  grey: '#CCC',
  bright: '#6FE1FC',
}
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
            m="5rem 0 2rem"
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
          <AmazonButton />
        </Box>
        <Box width={[9 / 10, 1 / 3]}>
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
        <Box p="1rem" width={[1, 1 / 3]}>
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
      <PricingTable id="buy" />
      <hr />
      <TOC />
      <PricingTable />

      <Card className="briukH" m="4rem auto" width={[1, 2 / 3]}>
        <Box width={[1]}>
          <Image
            p="1"
            className="cover"
            src={zacImg}
            alt="React Explained Book Cover"
            width={[1]}
          />
        </Box>
        <Box width={[1]} p="1rem" fontSize={[2]} mb="4">
          <Heading as="h2" fontSize={[3, 4, 5]}>
            About the Author
          </Heading>
          <Text my="1rem">
            <a href="https://zacgordon.com/">Zac Gordon</a> is a professional
            educator, with a current focus on{' '}
            <a href="https://javascriptforwp.com">
              JavaScript for WordPress education
            </a>
            . Zac has years of experience teaching at high schools, colleges,
            bootcamps and online learning sites like Frontend Masters and
            Treehouse. Catch his free Office Yoga sessions on{' '}
            <a href="https://OfficeYoga.tv">OfficeYoga.tv</a>.
          </Text>
        </Box>
      </Card>
      <Text textAlign="center" my="4">
        <a css={{ color: colors.dark }} href="https://twitter.com/zgordon">
          Follow Zac on Twitter
        </a>
      </Text>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
