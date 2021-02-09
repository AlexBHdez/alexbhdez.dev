import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

const Wrap = styled.main``

const MainContainer = ({ children }) => <Wrap>{children}</Wrap>

export default MainContainer

MainContainer.propTypes = {
  children: node.isRequired
}
