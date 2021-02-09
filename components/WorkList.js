import React from 'react'
import styled from 'styled-components'
import { arrayOf, object } from 'prop-types'
import { Title } from './ui'
import { WorkCard } from '.'

const Wrap = styled.section`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid tomato;
`

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 310px);
  grid-gap: 20px;
`

const WorkList = ({ works }) => (
  <Wrap>
    <Title headingTag="h2">Recent Works</Title>
    <WorksGrid>{works && works.map((work, i) => <WorkCard key={i} {...work} />)}</WorksGrid>
  </Wrap>
)

export default WorkList

WorkList.propTypes = {
  works: arrayOf(object).isRequired
}
