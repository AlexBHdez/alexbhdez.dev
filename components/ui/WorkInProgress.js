import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles/Theme'

const Wrap = styled.div`
  position: fixed;
  bottom: 60px;
  left: -75px;
  background-color: pink;
  transform: rotate(45deg);
  z-index: 9;
  width: 300px;
  text-align: center;

  ${media.greaterThan('mobile')`
    width: 600px;
    bottom: 110px;
    left: -170px;
  `}
`

const Text = styled.p`
  font-size: 1rem;
  padding: 10px 0;

  ${media.greaterThan('mobile')`
    font-size: 1.5rem;
  `}
`

const WorkInProgress = () => (
  <Wrap>
    <Text>work in progress 🚨 👨🏻‍💻</Text>
  </Wrap>
)

export default WorkInProgress
