import React from 'react'
import { Box } from '@rebass/grid'
import { Card, Heading, Text } from 'rebass'

const Chapter = ({ number, title, description }) => (
  <Box width={[1, 1 / 3]}>
    <Card m="1" p="2rem" boxShadow="0 0 8px rgba(0, 0, 0, .25)">
      <Heading as="h4" fontSize={[1, 2]} mb="1rem">
        {number}
        <br />
        {title}
      </Heading>
      <Text fontSize="1">{description}</Text>
    </Card>
  </Box>
)

export default Chapter
