import React from 'react'
import styled from 'styled-components'
import { string, oneOf } from 'prop-types'

const titleStyle = ({ theme, as }) => {
  switch (as) {
    case 'h1':
      return `
        font-weight: 700;
        font-size: 52px;
        color: ${theme.colors.h1};
      `
    case 'h2':
      return `
        font-weight: 500;
        font-size: 28px;
        margin-top: 5px;
        line-height: 1.1em;
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
  headingTag: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
}
