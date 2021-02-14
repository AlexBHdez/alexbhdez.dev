import React from 'react'
import styled from 'styled-components'
import { arrayOf, object } from 'prop-types'
import { WorkItem } from '.'

const Wrap = styled.section`
  margin-top: 50px;
  padding-top: 50px;
  position: relative;
  &::before {
    content: '';
    height: 0.5px;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    left: 0;
    top: 0;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.title};
`

const WorksWrap = styled.div``

const WorkList = ({ works }) => (
  <Wrap>
    <Title>Recent Works</Title>
    <WorksWrap>{works && works.map((work, i) => <WorkItem key={i} {...work} />)}</WorksWrap>
  </Wrap>
)

export default WorkList

WorkList.propTypes = {
  works: arrayOf(object).isRequired
}
