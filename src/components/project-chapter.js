import React from 'react'
// import { Box } from '@rebass/grid'
import { Heading } from 'rebass'

const ProjectChapter = ({ number, title }) => (
  <React.Fragment>
    <Heading
      as="h4"
      fontSize={[1, 2]}
      mb=".5rem"
      css={{ fontWeight: 'normal' }}
    >
      <span
        css={{
          fontWeight: 'bold',
        }}
      >
        {number}
      </span>
    </Heading>
    <Heading
      as="h4"
      fontSize={[1, 2]}
      mb="1.5rem"
      css={{ fontWeight: 'normal' }}
    >
      {title}
    </Heading>
  </React.Fragment>
)

export default ProjectChapter
