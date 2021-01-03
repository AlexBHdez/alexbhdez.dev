import React from 'react'
import styled from 'styled-components'
import { Title } from './ui'

const Wrap = styled.section`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid tomato;
`

const Works = ({ workList }) => {
  console.log('WORKLIST AT WORKS COMP: ', workList)

  return (
    <Wrap>
      <Title headingTag="h2">Recent Works</Title>
      {workList && workList.map(({ document }, i) => <div key={i}>{document.data.title}</div>)}
    </Wrap>
  )
}

export default Works
