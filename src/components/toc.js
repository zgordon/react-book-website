import React from 'react'
// import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Card, Heading, Text, Image } from 'rebass'
import appDemo from '../images/app-demo.gif'
import jsDemo from '../images/part-1.png'
import reactDemo from '../images/part-2.png'
import reactLogo from '../images/react.png'
import reactRouterLogo from '../images/react-router.png'
import firebaseLogo from '../images/firebase.png'
import netlifyLogo from '../images/netlify.png'

import Chapter from './chapter'
import ProjectChapter from './project-chapter'

const chapters = {
  part1: [
    {
      number: '01',
      title: 'Helpful JavaScript',
      description:
        'This may be a review or something to come back to for reference more than once as we learn React. All of the JavaScript explained in this section will be used at some point when building with React.',
    },
    {
      number: '02',
      title: 'Important Tools',
      description:
        'This chapter gives a high level overview of the most common development tools used with React. Although we explore what each tool does individually, these tools are often used together in one workflow with overlapping and interlacing parts, as we will see later in this book.',
    },
    {
      number: '03',
      title: 'A High Level Overview',
      description:
        'Now we finally introduce React itself. We explain the basic building blocks of React, show how data flows through a React app, and get us comfortable beginning to read and write our first React apps.',
    },
  ],
  part2: [
    {
      number: `04 \\ 05`,
      title: 'Elements and Components',
      description:
        'These chapters dive into the most important function in React, createElement(). We look at how to use it to create the most basic building blocks in React: elements. Components are also explained as functions or classes that return a single element or nested group of elements.',
    },
    {
      number: `06 \\ 07`,
      title: 'JSX Explained',
      description:
        'These chapters dive into the most important function in React, createElement(). We look at how to use it to create the most basic building blocks in React: elements. Components are also explained as functions or classes that return a single element or nested group of elements.',
    },
    {
      number: `08 \\ 09`,
      title: 'Create React App',
      description:
        'This section takes us through the tooling stack we will use to work with React. We explore how to set up and use Create React App and the various commands it comes with. This will allow us to easily spin up and manage React projects.',
    },
    {
      number: `10 \\ 11`,
      title: 'React Props Explained',
      description:
        'This section takes us through the tooling stack we will use to work with React. We explore how to set up and use Create React App and the various commands it comes with. This will allow us to easily spin up and manage React projects.',
    },
    {
      number: `12 \\ 13`,
      title: 'React Props Explained',
      description:
        'This section takes us through the tooling stack we will use to work with React. We explore how to set up and use Create React App and the various commands it comes with. This will allow us to easily spin up and manage React projects.',
    },
    {
      number: `14 \\ 15`,
      title: 'React Props Explained',
      description:
        'This demonstrates how we can manage data that changes in our code that we need to keep track of. We look at how to set and update state, as well as how to pass it down into other components via props.',
    },
  ],
  part3: {
    section1: [
      {
        number: 'Step 1',
        title: 'Content from State',
      },
      {
        number: 'Step 2',
        title: 'Routing and Content Views',
      },
      {
        number: 'Step 3',
        title: 'Adding Content Forms',
      },
      {
        number: 'Step 4',
        title: 'Event Notifications',
      },
    ],
    section2: [
      {
        number: 'Step 5',
        title: 'Updating Content',
      },
      {
        number: 'Step 6',
        title: 'Deleting Content',
      },
      {
        number: 'Step 7',
        title: 'Persistent State',
      },
      {
        number: 'Step 8',
        title: 'User Authentication',
      },
    ],
    section3: [
      {
        number: 'Step 9',
        title: 'Database CRUD',
      },
      {
        number: 'Step 10',
        title: 'Deploying a Project',
      },
      {
        number: 'Step 11',
        title: 'Refactoring A Codebase',
      },
      {
        number: 'Step 12',
        title: 'Taking It Further',
      },
    ],
  },
}

const TOC = props => (
  <>
    <Heading as="h2" fontSize={[3, 4, 5]} textAlign="center" mt="6rem">
      Table of Contents
    </Heading>
    <Heading as="h3" mt="6rem" mb="2rem" fontSize={[3, 4]} textAlign="center">
      Part 1 - Preparing to React
    </Heading>
    <Image
      width={[1, 2 / 3]}
      src={jsDemo}
      m="3rem auto"
      css={{ display: 'block' }}
    />
    <Text
      size={['1']}
      width={[1, 2 / 3]}
      m={'0 auto 2rem'}
      css={{ display: 'block' }}
    >
      In the first part of the book we prepare to React with a look at modern
      JavaScript, development tools and a high level overview of React.
    </Text>
    <Flex flexWrap="wrap" flexDirection="row">
      {chapters.part1.map(chapter => (
        <Chapter {...chapter} />
      ))}
    </Flex>
    <Heading as="h3" mt="6rem" mb="2rem" fontSize={[3, 4]} textAlign="center">
      Part 2 - React Explained
    </Heading>
    <Image
      width={[1, 2 / 3]}
      src={reactDemo}
      m="3rem auto"
      css={{ display: 'block' }}
    />
    <Text
      size={['1']}
      width={[1, 2 / 3]}
      m={'0 auto 2rem'}
      css={{ display: 'block' }}
    >
      Part 2 is heart of the book. Each chapter explains one core React concept.
      Then the proceeding chapter goes over practice exercises to solidy the
      concept.
    </Text>
    <Flex flexWrap="wrap" flexDirection="row">
      {chapters.part2.map(chapter => (
        <Chapter {...chapter} />
      ))}
    </Flex>
    <Box />
    <Heading as="h3" mt="6rem" mb="2rem" fontSize={[3, 4]} textAlign="center">
      Part 3 - A React Project
    </Heading>
    <Image
      width={[1, 2 / 3]}
      src={appDemo}
      m="3rem auto"
      css={{ display: 'block', boxShadow: '0 0 8px rgba(0, 0, 0, .25)' }}
    />
    <Text
      size={['1']}
      width={[1, 2 / 3]}
      m={'0 auto 2rem'}
      css={{ display: 'block' }}
    >
      In the final section of the book we introduce a number of new React
      related libraries to build a complete project. These include React Router
      for controlling pages, Firebase for authentication and database and
      Netlify for hosting.
    </Text>
    <Flex
      id="how-you-will-learn"
      flexWrap="wrap"
      flexDirection="row"
      my="1rem"
      justifyContent="center"
    >
      <Card width={[1 / 5]} p="1rem">
        <Image src={reactLogo} css={{ display: 'block' }} />
      </Card>
      <Card width={[1 / 5]} p="1rem">
        <Image src={reactRouterLogo} css={{ display: 'block' }} />
      </Card>
      <Card width={[1 / 5]} p="1rem">
        <Image src={firebaseLogo} css={{ display: 'block' }} />
      </Card>
      <Card width={[1 / 5]} p="1rem">
        <Image src={netlifyLogo} css={{ display: 'block' }} />
      </Card>
    </Flex>
    <Flex
      id="how-you-will-learn"
      flexWrap="wrap"
      flexDirection="row"
      css={{ boxShadow: '0 0 8px rgba(0, 0, 0, .25)' }}
      mb="6rem"
    >
      <Box width={[1, 1 / 3]}>
        <Card m="1" p="2rem">
          {chapters.part3.section1.map(chapter => (
            <ProjectChapter {...chapter} />
          ))}
        </Card>
      </Box>
      <Box width={[1, 1 / 3]}>
        <Card m="1" p="2rem">
          {chapters.part3.section2.map(chapter => (
            <ProjectChapter {...chapter} />
          ))}
        </Card>
      </Box>
      <Box width={[1, 1 / 3]}>
        <Card m="1" p="2rem">
          {chapters.part3.section3.map(chapter => (
            <ProjectChapter {...chapter} />
          ))}
        </Card>
      </Box>
    </Flex>
  </>
)
export default TOC
