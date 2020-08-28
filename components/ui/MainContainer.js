import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

const Wrap = styled.main`
  flex-shrink: 0;
`

const InnerWrap = styled.div`
  margin: ${({ theme }) => `${theme.sizes.headerHeight} auto`};
  max-width: 800px;
  background-color: pink;
  padding: 0 30px;
`

const MainContainer = ({ children }) => (
  <Wrap>
    <InnerWrap>{children}</InnerWrap>
  </Wrap>
)

export default MainContainer

MainContainer.propTypes = {
  children: node.isRequired,
}
