import React from 'react'
import styled from 'styled-components'

const Wrap = styled.article`
  margin-bottom: 30px;
  transition: color 0.35s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  line-height: 1.4em;
`

const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`

const WorkItem = (props) => {
  const {
    document: {
      data: { title, description, website }
    }
  } = props

  return (
    <Wrap>
      <a href={website} target="_blank" rel="noreferrer">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </a>
    </Wrap>
  )
}

export default WorkItem
