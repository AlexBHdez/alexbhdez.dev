import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: fixed;
  bottom: 110px;
  left: -170px;
  background-color: pink;
  transform: rotate(45deg);
`

const Text = styled.p`
  font-size: 1.5rem;
  padding: 20px 200px;
`

const WorkInProgress = () => (
  <Wrap>
    <Text>work in progress 🚨 👨🏻‍💻</Text>
  </Wrap>
)

export default WorkInProgress
