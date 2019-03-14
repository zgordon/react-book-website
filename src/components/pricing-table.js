import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Card, Heading, Text } from 'rebass'
import AmazonButton from './AmazonButton'
import bookBlur from '../images/book-blur.png'

const colors = {
  dark: '#363A45',
  grey: '#CCC',
  bright: '#6FE1FC',
}

class PricingTable extends Component {
  render() {
    return (
      <>
        <Heading as="h2" fontSize={[3, 4, 5]} textAlign="center" my="2rem">
          Get the Book
        </Heading>{' '}
        <Card
          flexWrap="wrap"
          flexDirection="row"
          p="3rem"
          className="pricing-block"
          // backgroundImage={`url(${bookBlur})`}
          // backgroundSize="cover"
          // backgroundPosition="bottom"
          css={
            {
              // backgroundColor: '#FFF5A9',
              // backgroundColor: colors.dark,
            }
          }
        >
          {/* <Box
            width={[1, 1 / 3]}
            p="1rem"
            css={{
              backgroundColor: '#fff',
              border: '1px #ccc solid',
            }}
          >
            <Card>
              <Heading as="h3" textAlign="center" mb="1rem">
                Digital
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Get all the standard digital formats for the book plus all the
                example code.
              </Text>
              <Script url="https://gumroad.com/js/gumroad.js" />
              <a
                rel="noopener noreferrer"
                className="gumroad-button"
                href="https://gum.co/HWuPe?wanted=true"
                target="_blank"
              >
                Buy Now $14
              </a>
            </Card>
          </Box> */}
          <Box
            width={[1, 1 / 2]}
            my="-1rem"
            p="1rem"
            css={{
              backgroundColor: '#fff',
              // border: `5px ${colors.dark} solid`,
              margin: `0 auto`,
            }}
          >
            <Card>
              <Heading as="h3" mb="1rem" textAlign="center">
                Print &amp; Kindle Versions
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Both the paperback, print version of the book and the Kindle
                version are available via the link below on Amazon.
              </Text>
              <AmazonButton style={{ margin: `0 auto`, display: 'block' }} />
            </Card>
          </Box>
          {/* <Box
            width={[1, 1 / 3]}
            p="1rem"
            css={{
              backgroundColor: '#fff',
              border: '1px #ccc solid',
            }}
          >
            <Card>
              <Heading as="h3" mb="1rem" textAlign="center">
                Videos
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Get videos of Zac walking through all the exercises and building
                out the project.
              </Text>
              <Text my="1rem" fontSize={[1, 2]}>
                Coming Soon.
              </Text>
            </Card>
          </Box> */}
        </Card>
      </>
    )
  }
}

export default PricingTable
