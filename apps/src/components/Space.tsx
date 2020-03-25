import React from 'react'
import styled, { css } from 'styled-components/native'
import { flexbox, position, space } from 'styled-system'
import { useResponsiveProps } from 'src/utils/Responsive'

const SpaceStyled = styled.View(() => {
  return css`
    ${flexbox};
    ${position};
    ${space};
  `
})

export function Space(props) {
  const responsivedProps = useResponsiveProps(props)
  return responsivedProps ? <SpaceStyled {...responsivedProps} /> : null
}
