import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Card, Heading, Text, Button } from 'rebass'

import Script from 'react-load-script'

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
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          p="3rem"
          css={{
            // backgroundColor: '#FFF5A9',
            backgroundColor: colors.dark,
          }}
        >
          <Box
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
          </Box>
          <Box
            width={[1, 1 / 3]}
            my="-1rem"
            p="1rem"
            css={{
              backgroundColor: '#fff',
              border: `5px ${colors.dark} solid`,
            }}
          >
            <Card>
              <Heading as="h3" mb="1rem" textAlign="center">
                Print
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Get the print version of the book shipped to you via Amazon.
                Code included.
              </Text>
              <Button
                bg={colors.dark}
                borderRadius="0"
                mx="auto"
                css={{ display: 'block' }}
              >
                Buy on Amazon
              </Button>
            </Card>
          </Box>
          <Box
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
          </Box>
        </Flex>
      </>
    )
  }
}

export default PricingTable
