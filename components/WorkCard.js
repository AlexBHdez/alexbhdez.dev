import React from 'react'
import styled from 'styled-components'
import { Title } from './ui'

const Wrap = styled.div`
  border-radius: 3px;
  height: 440px;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 auto 20px;
  background-color: tomato;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`

const Info = styled.div`
  color: #fff;
  padding: 60px 0 60px 60px;
  display: flex;
  flex-direction: column;
`

const Year = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
`

const Services = styled.ul`
  margin-top: 50px;
`

const Service = styled.li`
  font-size: ${({ theme }) => theme.fontSize.regular};
`

const Techs = styled.ul`
  margin-top: auto;
  display: flex;
`

const Tech = styled.li``

const ImageWrap = styled.div`
  overflow: hidden;

  > img {
    height: 100%;
    width: auto;
    border-radius: 3px;
    box-shadow: 0px 3.32378px 20.6857px rgba(0, 0, 0, 0.2);
  }
`

const WorkCard = (props) => {
  const {
    document: {
      data: { title, date, featuredImg, services, tech }
    }
  } = props
  const servicesArray = services.split(', ')
  const techsArray = tech.split(', ')

  return (
    <Wrap>
      <Info>
        <Year>{new Date(date).getFullYear()}</Year>
        <Title headingTag="h3">{title}</Title>
        <Services>
          {!!servicesArray.length &&
            servicesArray.map((service, i) => <Service key={i}>{service}</Service>)}
        </Services>
        <Techs>
          {!!techsArray.length &&
            techsArray.map((techElement, i) => <Tech key={i}>{techElement}</Tech>)}
        </Techs>
      </Info>
      <ImageWrap>
        <img src={featuredImg} alt={title} />
      </ImageWrap>
    </Wrap>
  )
}

export default WorkCard
