import React from 'react'
import styled from 'styled-components'
import { Paragraph, Title, Button } from './ui'
import { media } from '../styles/Theme'

const Wrap = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 40px;
  padding: 30px 0px;
  transition: all 0.75s ease;

  ${media.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
  `}
`

const Greetings = styled.div``

const Bio = styled.div``

const Intro = () => (
  <Wrap>
    <Greetings>
      <Title headingTag="h1">Hi, I'm Alex,</Title>
      <Title headingTag="h2">a frontEnd and UI/UX developer.</Title>
      <Button onClick={() => console.log('wolaaaaaaa')}>Say hello</Button>
    </Greetings>
    <Bio>
      <Paragraph>
        I'm a Barcelona based front End developer, experienced in HTML5, CSS3 and Javascript using
        modern libraries like React, Vue, Gatsby or Next.
      </Paragraph>
      <Paragraph>
        I have worked as a graphic and web designer in my own design studio (Estudio Way) for a
        couple of years before I became a frontEnd developer.
      </Paragraph>
      <Paragraph>
        Currently working as frontEnd developer at Quipu, a sass startup from Barcelona.
      </Paragraph>
    </Bio>
  </Wrap>
)

export default Intro
