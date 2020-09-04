import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

const Wrap = styled.main`
  flex-shrink: 0;
`

const InnerWrap = styled.div`
  margin: ${({ theme }) => `${theme.sizes.headerHeight} auto`};
  max-width: 880px;
  padding: ${({ theme }) => `0px ${theme.sizes.containerPadding}`};
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
