import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'
import { Title } from './ui'

const Wrap = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-position: center;
  border-radius: 4px;
  transition: all 0.35s ease;
  &:hover {
    transform: scale(1.02);
  }
`
const Overflow = styled.div`
  width: 100%;
  height: 100%;
  transition: background-color 0.35s ease-out;
  transition: color 0.75s ease;
  background-color: transparent;
  color: transparent;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 50)};
    color: white;
    > * {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  opacity: 0;
  transition: all 0.15s ease;
  padding: 15px;
`

const Year = styled.p``

const WorkCard = (props) => {
  const {
    document: {
      data: { title, date, featuredImg, services, tech }
    }
  } = props
  const servicesArray = services.split(', ')
  const techsArray = tech.split(', ')

  return (
    <Wrap bgImage={featuredImg}>
      <Overflow>
        <Content>
          <Year>{new Date(date).getFullYear()}</Year>
          <Title headingTag="h3">{title}</Title>
        </Content>
      </Overflow>
    </Wrap>
  )
}

export default WorkCard
