import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px 15px;
`

const Greetings = styled.div``

const Bio = styled.div``

const Intro = () => (
  <Wrap>
    <Greetings>
      <h1>Hi, I'm Alex,</h1>
      <h2>a frontEnd and UI/UX developer.</h2>
      <button type="button">Say hello</button>
    </Greetings>
    <Bio>
      <p>
        I'm a Barcelona based front End developer, experienced in HTML5, CSS3 and Javascript using
        modern libraries like React, Vue, Gatsby or Next.
      </p>
      <p>
        I have worked as a graphic and web designer in my own design studio (Estudio Way) for a
        couple of years before I became a frontEnd developer.
      </p>
      <p>Currently working as frontEnd developer at Quipu, a sass startup from Barcelona.</p>
    </Bio>
  </Wrap>
)

export default Intro
