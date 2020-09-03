import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

const Wrap = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
  margin-bottom: 20px;
  line-height: 1.6em;
`

const Paragraph = ({ children }) => <Wrap>{children}</Wrap>

export default Paragraph

Paragraph.propTypes = {
  children: node.isRequired,
}
