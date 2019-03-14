import React from 'react'
// import { Box } from '@rebass/grid'
import { Heading } from 'rebass'

const ProjectChapter = ({ number, title }) => (
  <Heading as="h4" fontSize={[1, 2]} mb="1rem" css={{ fontWeight: 'normal' }}>
    <span
      css={{
        fontWeight: 'bold',
      }}
    >
      {number}
    </span>
    <br />
    {title}
  </Heading>
)

export default ProjectChapter
