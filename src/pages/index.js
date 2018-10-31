import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import coverImg from '../images/cover.jpg'

const IndexPage = () => (
  <Layout>
    <h1>React Explained Book</h1>
    <h2>By Zac Gordon</h2>
    <img
      style={{ maxWidth: '200px', float: 'left', margin: '10px' }}
      className="cover"
      src={coverImg}
      alt="React Explained Book Cover"
    />
    <p class="description">
      Learn the popular JavaScript library, React, with in depth explanations
      and tons of practice exercises.
    </p>
    <Link className="button" to="/buy/">
      Buy on Amazon
    </Link>
    <hr style={{ clear: 'both' }} />
    <h2>What You Will Learn</h2>
    <ol>
      <li>Important JavaScript to Know for React</li>
      <li>Important Development Tools for React</li>
      <li>How React Works at High Level</li>
      <li>How to Manage Data with Props and State</li>
      <li>The Component Lifecycle & API Requests</li>
      <li>Forms, Routing &amp; More</li>
      <li>Building Single Page Web Apps</li>
    </ol>
    <hr />
    <h2>How You Will Learn</h2>
    <h3>🧠 Get the Theory</h3>
    <h3>💻 Practice, Practice, Practice</h3>
    <hr />
    <h2>What Folks Are Saying</h2>
    <blockquote>
      Can't wait for this book! I love your teaching style and this book looks
      great from the excerpts I've seen!
      <cite>~ Person</cite>
    </blockquote>
    <hr />
    <h2>Table of Contents</h2>
    <ul>
      <li>
        Part 1 - Preparing to React
        <ul>
          <li>Important JavaScript to Know for React</li>
          <li>5 Exercises in Vanilla JavaScript</li>
          <li>Important Development Tools for React</li>
          <li>5 Exercises in Development Tools</li>
          <li>A High Level Overview of React</li>
          <li>3 Exercises in React</li>
        </ul>
      </li>
      <li>
        Part 2 - React Explained
        <ul>
          <li>React Elements and Components</li>
          <li>5 Exercises with Elements and Components</li>
          <li>Create React App Explained</li>
          <li>5 Exercises with Create React App</li>
          <li>React Props Explained</li>
          <li>5 Exercises with React Props</li>
          <li>React State Explained</li>
          <li>5 Exercises with React State</li>
        </ul>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
