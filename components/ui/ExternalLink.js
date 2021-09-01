import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'

const Wrap = styled.a`
  transition: color 0.35s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`

const ExternalLink = ({ children, ...rest }) => (
  <Wrap rel="noreferrer noopener" {...rest}>
    {children}
  </Wrap>
)

export default ExternalLink

ExternalLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  target: string
}
