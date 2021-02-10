import React from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'

const Wrap = styled.button`
  margin-top: 20px;
  width: auto;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0 25px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const Button = (props) => {
  const { onClick, children } = props

  return <Wrap onClick={onClick}>{children}</Wrap>
}

export default Button

Button.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired
}
