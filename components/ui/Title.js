import React from 'react'
import styled from 'styled-components'
import { string, oneOf } from 'prop-types'

const titleStyle = ({ theme, as }) => {
  switch (as) {
    case 'h1':
      return `
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize.super};
        color: ${theme.colors.h1};
      `
    case 'h2':
      return `
        font-weight: ${theme.fontWeight.semi};
        font-size: ${theme.fontSize.plus};
        margin-top: 10px;
        margin-bottom: 20px;
        line-height: 1.1em;
      `
    case 'h3':
      return `
        font-weight: ${theme.fontWeight.semi};
        font-size: ${theme.fontSize.medium};
        line-height: 1.4em;
      `
    default:
      return ''
  }
}

// The rendered tag will be the received in as prop.
// This is a styled component feature
const Wrap = styled.div`
  ${titleStyle};
`

const Title = ({ children, headingTag }) => <Wrap as={headingTag}>{children}</Wrap>

export default Title

Title.propTypes = {
  children: string.isRequired,
  headingTag: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
}
