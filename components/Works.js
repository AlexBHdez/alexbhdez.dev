import React from 'react'
import styled from 'styled-components'
import { Title } from './ui'

const Wrap = styled.section`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid tomato;
`

const Works = () => (
  <Wrap>
    <Title headingTag="h2">Recent Works</Title>
  </Wrap>
)

export default Works
