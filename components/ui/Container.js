import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

const Wrap = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 0 40px;
`

const Container = ({ children }) => <Wrap>{children}</Wrap>

export default Container

Container.propTypes = {
  children: node.isRequired
}
