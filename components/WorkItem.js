import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  margin-bottom: 30px;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  line-height: 1.4em;
`

const Description = styled.p``

const WorkItem = (props) => {
  const {
    document: {
      data: { title, description }
    }
  } = props

  return (
    <Wrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrap>
  )
}

export default WorkItem
