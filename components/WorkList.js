import React from 'react'
import styled from 'styled-components'
import { Title } from './ui'
import { WorkCard } from './'
import { arrayOf, object } from 'prop-types'

const Wrap = styled.section`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid tomato;
`

const WorkList = ({ works }) => (
  <Wrap>
    <Title headingTag="h2">Recent Works</Title>
    {works && works.map((work, i) => <WorkCard key={i} {...work} />)}
  </Wrap>
)

export default WorkList

WorkList.propTypes = {
  works: arrayOf(object).isRequired,
}
