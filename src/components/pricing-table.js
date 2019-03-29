import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Card, Heading, Text } from 'rebass'

import styled from 'styled-components'

const colors = {
  dark: '#363A45',
  grey: '#CCC',
  bright: '#6FE1FC',
}

const BuyLink = styled.a`
  color: ${colors.dark};
  text-align: center;
  display: block;
  font-size: 0.9rem;
`

class PricingTable extends Component {
  render() {
    return (
      <>
        <Heading
          id={this.props.id}
          as="h2"
          fontSize={[5]}
          textAlign="center"
          my="2rem"
        >
          Get React Explained
        </Heading>{' '}
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          className="pricing-block"
          p="3rem"
          css={
            {
              // backgroundColor: '#FFF5A9',
            }
          }
        >
          <Box
            width={[1, 1, 1 / 3]}
            p="2rem 1rem 1rem"
            css={{
              backgroundColor: '#fff',
              border: '1px #ccc solid',
            }}
          >
            <Card>
              <Heading as="h3" textAlign="center" mb=".5rem">
                Digital Book
              </Heading>
              <Heading as="h4" textAlign="center" mb="1rem" fontWeight="normal">
                $19
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Get this if you like to just read something to understand it and
                can work through exercise files and projects on your own.
              </Text>
              <BuyLink
                href="https://reactexplained.podia.com/react-explained-book"
                data-podia-embed="button"
                data-text="Just the Book"
              >
                Just the Book
              </BuyLink>
            </Card>
          </Box>
          <Box
            m={`-1rem 0`}
            className="featured"
            width={[1, 1, 1 / 3]}
            css={{
              backgroundColor: '#fff',
              border: `5px ${colors.dark} solid`,
            }}
          >
            <Card p={`2rem 1rem`}>
              <Heading as="h3" mb=".5rem" textAlign="center">
                Video Course &amp; Digital Book
              </Heading>
              <Heading as="h3" m="1rem 0" textAlign="center">
                <span
                  css={{
                    textDecorationLine: 'line-through',
                    fontWeight: 'normal',
                  }}
                >
                  $79
                </span>{' '}
                $59
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                This is the way I suggest most people learn React Explained.
              </Text>
              <Text my="1rem" fontSize={[1, 2]}>
                Get the book for reference and the videos explaining how it all
                fits together plus more.
              </Text>
              <BuyLink
                href="https://reactexplained.podia.com/react-explained-bundle"
                data-podia-embed="button"
                data-text="Get the Bundle"
              >
                Get the Bundle
              </BuyLink>
              {/* <AmazonButton style={{ margin: `0 auto`, display: 'block' }} /> */}
            </Card>
          </Box>
          <Box
            width={[1, 1, 1 / 3]}
            p="2rem 1rem 1rem"
            css={{
              backgroundColor: '#fff',
              border: '1px #ccc solid',
            }}
          >
            <Card>
              <Heading as="h3" mb=".5rem" textAlign="center">
                Print Book
              </Heading>
              <Heading as="h3" mb="1rem" textAlign="center" fontWeight="normal">
                $25
              </Heading>
              <Text my="1rem" fontSize={[1, 2]}>
                Get the print version of the book for healthier reading.
              </Text>
              <Text my="1rem" fontSize={[1, 2]}>
                Includes access to the exercise files and project repo.
              </Text>
              <BuyLink href="https://www.amazon.com/React-Explained-Step-Step-Guide/dp/1798752980">
                Get on Amazon
              </BuyLink>
            </Card>
          </Box>
        </Flex>
      </>
    )
  }
}

export default PricingTable
