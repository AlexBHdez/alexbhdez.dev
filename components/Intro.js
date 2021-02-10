import React from 'react'
import styled from 'styled-components'
import { Paragraph, Button } from './ui'
import { media } from '../styles/Theme'

const Wrap = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 40px;
  padding: 30px 0px;
  transition: all 0.75s ease;
  margin-top: 50px;

  ${media.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  `}
`

const Greetings = styled.div``

const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.super};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.name};
`

const Subtitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.plus};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  margin: 10px 0 20px;
  line-height: 1.1em;
  padding-right: ${({ paddingRight }) => (paddingRight ? `${paddingRight}px` : '')};
`

const Bio = styled.div``

const Intro = () => (
  <Wrap>
    <Greetings>
      <Name>Hi, I'm Alex,</Name>
      <Subtitle paddingRight={50}>a frontEnd developer with a graphic design background.</Subtitle>
      <Button onClick={() => alert('wolaaaaaaa')}>Say hello</Button>
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
